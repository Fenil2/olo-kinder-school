'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { endSession, isSignedIn, passwordMatches, startSession } from '@/lib/admin-auth'
import { LeadStatus } from '@/lib/generated/prisma/enums'

export interface LoginState {
  error?: string
}

/** Deliberately vague: it never reveals whether a password was close. */
const WRONG = 'That password is not right.'

export async function signIn(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const password = formData.get('password')
  if (typeof password !== 'string' || password === '') return { error: WRONG }
  if (!passwordMatches(password)) return { error: WRONG }

  await startSession()
  redirect('/admin')
}

export async function signOut(): Promise<void> {
  await endSession()
  redirect('/admin/login')
}

const STATUSES = new Set<string>(Object.values(LeadStatus))

/**
 * Move a lead along the pipeline.
 *
 * Re-checks the session rather than trusting the layout's guard. A server
 * action is a POST endpoint of its own — anyone who knows its id can call it
 * directly, without ever rendering the page that guards it.
 */
export async function updateLeadStatus(formData: FormData): Promise<void> {
  if (!(await isSignedIn())) redirect('/admin/login')

  const id = formData.get('id')
  const status = formData.get('status')
  if (typeof id !== 'string' || typeof status !== 'string' || !STATUSES.has(status)) return

  await prisma.lead.update({ where: { id }, data: { status: status as LeadStatus } })
  revalidatePath('/admin')
}

export async function deleteLead(formData: FormData): Promise<void> {
  if (!(await isSignedIn())) redirect('/admin/login')

  const id = formData.get('id')
  if (typeof id !== 'string') return

  await prisma.lead.delete({ where: { id } })
  revalidatePath('/admin')
}
