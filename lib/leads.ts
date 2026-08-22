import type { LeadSource } from '@/lib/generated/prisma/enums'

/** What the form hands back to the browser after a submit. */
export interface LeadFormState {
  status: 'idle' | 'success' | 'error'
  message?: string
  /** Keyed by field name, so each input can show its own message. */
  errors?: Partial<Record<LeadField, string>>
}

export type LeadField =
  | 'parentName'
  | 'childName'
  | 'childAge'
  | 'phone'
  | 'email'
  | 'subject'
  | 'message'

export const IDLE_STATE: LeadFormState = { status: 'idle' }

/**
 * Which fields each form actually asks for. The database keeps every one of
 * them optional — a half-filled enquiry is still a lead worth having — so
 * "required" here means only "this form showed the field and expects it".
 */
export const REQUIRED_BY_SOURCE: Record<LeadSource, LeadField[]> = {
  HOME: ['parentName', 'childName', 'childAge', 'phone', 'email'],
  ADMISSIONS: ['parentName', 'childName', 'childAge', 'phone', 'email'],
  CONTACT: ['parentName', 'childName', 'childAge', 'phone', 'email'],
}

const LABELS: Record<LeadField, string> = {
  parentName: 'Parent name',
  childName: 'Child name',
  childAge: "Child's age",
  phone: 'Phone number',
  email: 'Email address',
  subject: 'Subject',
  message: 'Message',
}

/* Deliberately loose. An address only has to survive a round trip to the
   admissions inbox, and the strict RFC pattern rejects real addresses. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
/* Digits, with the separators people actually type. At least 7 digits so a
   stray "12" does not pass, at most 15 per E.164. */
const PHONE_CHARS = /^[+\d\s()-]+$/

export interface ParsedLead {
  parentName: string
  childName: string | null
  childAge: number | null
  phone: string | null
  email: string | null
  subject: string | null
  message: string | null
}

/**
 * Validate one submission. Returns either the row to write or the per-field
 * messages to show. Runs on the server, where it cannot be skipped — the
 * `required` attributes on the inputs are a convenience, not a control.
 */
export function parseLead(
  form: { get(name: string): FormDataEntryValue | null },
  source: LeadSource,
): { ok: true; data: ParsedLead } | { ok: false; errors: Partial<Record<LeadField, string>> } {
  const errors: Partial<Record<LeadField, string>> = {}
  const required = new Set(REQUIRED_BY_SOURCE[source])

  const text = (name: LeadField, max: number) => {
    const raw = form.get(name)
    const value = typeof raw === 'string' ? raw.trim() : ''
    if (!value) {
      if (required.has(name)) errors[name] = `${LABELS[name]} is required.`
      return null
    }
    if (value.length > max) {
      errors[name] = `${LABELS[name]} must be ${max} characters or fewer.`
      return null
    }
    return value
  }

  const parentName = text('parentName', 120)
  if (parentName && parentName.length < 2) errors.parentName = 'Please enter the full name.'

  const childName = text('childName', 120)
  const subject = text('subject', 160)
  const message = text('message', 4000)

  const email = text('email', 200)
  if (email && !EMAIL.test(email)) errors.email = 'Please enter a valid email address.'

  const phone = text('phone', 32)
  if (phone) {
    const digits = phone.replace(/\D/g, '')
    if (!PHONE_CHARS.test(phone) || digits.length < 7 || digits.length > 15) {
      errors.phone = 'Please enter a valid phone number.'
    }
  }

  let childAge: number | null = null
  const ageRaw = form.get('childAge')
  const ageText = typeof ageRaw === 'string' ? ageRaw.trim() : ''
  if (!ageText) {
    if (required.has('childAge')) errors.childAge = "Child's age is required."
  } else {
    const n = Number(ageText)
    if (!Number.isInteger(n) || n < 1 || n > 10) errors.childAge = 'Please enter an age between 1 and 10.'
    else childAge = n
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors }
  // parentName is required by every source, so it is a string by this point.
  return { ok: true, data: { parentName: parentName!, childName, childAge, phone, email, subject, message } }
}
