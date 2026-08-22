'use client'

import { useActionState, useId, type ReactNode } from 'react'
import { MdCheckCircle, MdErrorOutline, MdSend } from 'react-icons/md'
import { submitLead } from '@/app/actions/leads'
import { IDLE_STATE, type LeadField } from '@/lib/leads'
import type { LeadSource } from '@/lib/generated/prisma/enums'

type Variant = 'home' | 'admissions' | 'contact'

/**
 * Each page's form had its own class strings before this component existed.
 * They are kept apart rather than unified so the three sections still look
 * exactly as they did — the plum band's card wants a warmer input than the
 * white card on the contact page.
 */
const STYLES: Record<Variant, { form: string; label: string; input: string; button: string }> = {
  home: {
    form: 'space-y-4',
    label: 'block text-sm font-semibold text-foreground mb-1',
    input:
      'w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition',
    button:
      'w-full bg-accent text-accent-foreground py-3.5 rounded-full font-semibold hover:bg-accent-hover transition-colors mt-2 disabled:opacity-60 disabled:cursor-not-allowed',
  },
  admissions: {
    form: 'space-y-5',
    label: 'block text-sm font-semibold text-foreground mb-1.5',
    input:
      'w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition',
    button:
      'w-full bg-accent text-accent-foreground py-3.5 rounded-full font-semibold hover:bg-accent-hover transition-colors text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed',
  },
  contact: {
    form: 'space-y-5',
    label: 'block text-sm font-semibold text-foreground mb-1.5',
    input:
      'w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition',
    button:
      'w-full bg-accent text-accent-foreground py-3.5 rounded-full font-semibold hover:bg-accent-hover transition-colors text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed',
  },
}

interface LeadFormProps {
  source: LeadSource
  variant: Variant
  submitLabel: string
  /** Fine print under the button, where the page had some. */
  note?: string
  /** The contact form alone asks for a topic and a message. */
  withMessage?: boolean
  /** Whether labels carry the coral asterisk. */
  markRequired?: boolean
}

export function LeadForm({
  source,
  variant,
  submitLabel,
  note,
  withMessage = false,
  markRequired = false,
}: LeadFormProps) {
  const [state, formAction, pending] = useActionState(submitLead, IDLE_STATE)
  const styles = STYLES[variant]
  // Ids have to be unique per instance: the home page could one day carry two
  // of these, and duplicate ids would point every label at the first form.
  const uid = useId()
  const fieldId = (name: LeadField) => `${uid}-${name}`
  const errorId = (name: LeadField) => `${uid}-${name}-error`
  const error = (name: LeadField) => state.errors?.[name]

  if (state.status === 'success') {
    return (
      <div role="status" className="text-center py-8">
        <MdCheckCircle size={52} className="mx-auto text-mascot-squarey-dark" aria-hidden="true" />
        <p className="mt-4 text-lg font-bold text-heading">Enquiry received</p>
        <p className="mt-2 text-base text-foreground/90 leading-relaxed">{state.message}</p>
      </div>
    )
  }

  /** One labelled control, with its own error message wired up for screen readers. */
  const Field = ({
    name,
    label,
    children,
  }: {
    name: LeadField
    label: string
    children: (props: {
      id: string
      name: string
      'aria-invalid'?: true
      'aria-describedby'?: string
      className: string
    }) => ReactNode
  }) => {
    const message = error(name)
    return (
      <div>
        <label htmlFor={fieldId(name)} className={styles.label}>
          {label}
          {markRequired && <span className="text-primary"> *</span>}
        </label>
        {children({
          id: fieldId(name),
          name,
          className: `${styles.input}${message ? ' border-destructive focus:border-destructive focus:ring-destructive/20' : ''}`,
          ...(message ? { 'aria-invalid': true as const, 'aria-describedby': errorId(name) } : {}),
        })}
        {message && (
          <p id={errorId(name)} className="mt-1.5 text-sm font-medium text-destructive">
            {message}
          </p>
        )}
      </div>
    )
  }

  const pair = 'grid grid-cols-1 sm:grid-cols-2 gap-4'

  return (
    <form action={formAction} className={styles.form} noValidate>
      <input type="hidden" name="source" value={source} />

      {/* Honeypot. Not `display:none` — some bots skip hidden inputs, and some
          browsers skip them for autofill. Off-screen, unreachable by tab, and
          ignored by screen readers instead. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden">
        <label htmlFor={`${uid}-company`}>Company</label>
        <input id={`${uid}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === 'error' && state.message && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3"
        >
          <MdErrorOutline size={20} className="shrink-0 mt-0.5 text-destructive" aria-hidden="true" />
          <p className="text-sm font-medium text-destructive">{state.message}</p>
        </div>
      )}

      {variant === 'admissions' ? (
        <>
          <Field name="parentName" label="Parent Name">
            {(p) => <input {...p} type="text" autoComplete="name" placeholder="Your full name" />}
          </Field>
          <Field name="childName" label="Child Name">
            {(p) => <input {...p} type="text" placeholder="Child's full name" />}
          </Field>
        </>
      ) : (
        <div className={pair}>
          <Field name="parentName" label="Parent Name">
            {(p) => <input {...p} type="text" autoComplete="name" placeholder="Your full name" />}
          </Field>
          <Field name="childName" label="Child Name">
            {(p) => <input {...p} type="text" placeholder={variant === 'home' ? "Child's name" : "Child's full name"} />}
          </Field>
        </div>
      )}

      <div className={pair}>
        <Field name="childAge" label="Child's Age">
          {(p) => <input {...p} type="number" min="1" max="10" placeholder="Age in years" />}
        </Field>
        <Field name="phone" label={variant === 'contact' ? 'Phone' : 'Phone Number'}>
          {(p) => <input {...p} type="tel" autoComplete="tel" placeholder="Your phone number" />}
        </Field>
      </div>

      <Field name="email" label={variant === 'contact' ? 'Email' : 'Email Address'}>
        {(p) => <input {...p} type="email" autoComplete="email" placeholder="Your email address" />}
      </Field>

      {withMessage && (
        <>
          <div>
            <label htmlFor={fieldId('subject')} className={styles.label}>
              How can we help?
            </label>
            <select
              id={fieldId('subject')}
              name="subject"
              defaultValue=""
              className={`${styles.input.replace(' placeholder:text-foreground/40', '')}`}
            >
              <option value="">Select a topic</option>
              <option value="admissions">Admissions enquiry</option>
              <option value="curriculum">Curriculum information</option>
              <option value="visit">Schedule a campus visit</option>
              <option value="fees">Fees and payment</option>
              <option value="other">Other</option>
            </select>
          </div>
          <Field name="message" label="Message">
            {(p) => (
              <textarea
                {...p}
                rows={4}
                className={`${p.className} resize-none`}
                placeholder="Tell us a bit about your child and what you'd like to know..."
              />
            )}
          </Field>
        </>
      )}

      <button type="submit" disabled={pending} className={styles.button}>
        {variant === 'contact' && !pending && <MdSend size={18} aria-hidden="true" />}
        {pending ? 'Sending…' : submitLabel}
      </button>

      {note && <p className="text-xs text-foreground/85 text-center">{note}</p>}
    </form>
  )
}
