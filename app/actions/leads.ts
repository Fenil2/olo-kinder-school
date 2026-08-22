'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma'
import { parseLead, type LeadFormState } from '@/lib/leads'
import { LeadSource } from '@/lib/generated/prisma/enums'

const SOURCES = new Set<string>(Object.values(LeadSource))

/**
 * Take one enquiry from any of the site's forms and store it.
 *
 * Shaped for `useActionState`, so it takes the previous state and returns the
 * next one rather than throwing — a failed submit has to redraw the form with
 * its messages, not replace the page with an error.
 */
export async function submitLead(_prev: LeadFormState, formData: FormData): Promise<LeadFormState> {
  // Which form this came from is decided here, from a fixed set — never
  // trusted as free text, or the dashboard's source column becomes a place
  // for anyone to write anything.
  const raw = formData.get('source')
  const source = typeof raw === 'string' && SOURCES.has(raw) ? (raw as LeadSource) : null
  if (!source) {
    return { status: 'error', message: 'Something went wrong. Please try again.' }
  }

  // Honeypot: a field positioned off-screen that a person never sees and so
  // never fills. Bots fill every input they find. Answer them exactly as we
  // answer a real submit, so they learn nothing, but write nothing down.
  const trap = formData.get('company')
  if (typeof trap === 'string' && trap.trim() !== '') {
    return { status: 'success', message: 'Thank you! We have received your enquiry and will be in touch shortly.' }
  }

  const parsed = parseLead(formData, source)
  if (!parsed.ok) {
    return { status: 'error', message: 'Please check the highlighted fields.', errors: parsed.errors }
  }

  try {
    await prisma.lead.create({ data: { ...parsed.data, source } })
  } catch (error) {
    // The reason belongs in the server log, not in the response — a driver
    // error can carry the connection string.
    console.error('[submitLead] failed to store lead', error)
    return {
      status: 'error',
      message: 'We could not save your enquiry just now. Please call us on 98406 04197 and we will help right away.',
    }
  }

  revalidatePath('/admin')
  return { status: 'success', message: 'Thank you! We have received your enquiry and will be in touch shortly.' }
}
