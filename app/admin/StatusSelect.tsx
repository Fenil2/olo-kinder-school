'use client'

import { useRef, useTransition } from 'react'
import { updateLeadStatus } from '@/app/admin/actions'

const TONE: Record<string, string> = {
  NEW: 'bg-mascot-hexy/20 text-mascot-hexy-dark',
  CONTACTED: 'bg-mascot-starry/25 text-mascot-starry-dark',
  ENROLLED: 'bg-mascot-squarey/20 text-mascot-squarey-dark',
  CLOSED: 'bg-muted text-muted-foreground',
}

/**
 * The status cell. Changing the value submits immediately — a dashboard where
 * every row needs a separate Save click is a dashboard nobody keeps up to
 * date. The surrounding form still posts to the server action, so this keeps
 * working with JavaScript disabled, just with the button.
 */
export function StatusSelect({
  id,
  value,
  options,
}: {
  id: string
  value: string
  options: readonly string[]
}) {
  const formRef = useRef<HTMLFormElement>(null)
  const [pending, startTransition] = useTransition()

  return (
    <form ref={formRef} action={updateLeadStatus} className="inline-flex items-center gap-2">
      <input type="hidden" name="id" value={id} />
      <select
        name="status"
        defaultValue={value}
        disabled={pending}
        aria-label="Lead status"
        onChange={() => startTransition(() => formRef.current?.requestSubmit())}
        className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50 ${
          TONE[value] ?? TONE.CLOSED
        }`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0) + option.slice(1).toLowerCase()}
          </option>
        ))}
      </select>
      <noscript>
        <button type="submit" className="text-xs font-semibold text-primary underline">
          Save
        </button>
      </noscript>
    </form>
  )
}
