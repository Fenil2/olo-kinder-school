'use client'

import { useActionState } from 'react'
import { MdErrorOutline, MdLock } from 'react-icons/md'
import { signIn, type LoginState } from '@/app/admin/actions'

export function LoginForm() {
  const [state, formAction, pending] = useActionState(signIn, {} as LoginState)

  return (
    <form action={formAction} className="space-y-4">
      {state.error && (
        <div role="alert" className="flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3">
          <MdErrorOutline size={20} className="shrink-0 mt-0.5 text-destructive" aria-hidden="true" />
          <p className="text-sm font-medium text-destructive">{state.error}</p>
        </div>
      )}

      <div>
        <label htmlFor="admin-password" className="block text-sm font-semibold text-foreground mb-1.5">
          Password
        </label>
        <input
          id="admin-password"
          name="password"
          type="password"
          required
          autoFocus
          autoComplete="current-password"
          placeholder="Enter the admin password"
          className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3 rounded-full font-semibold hover:bg-accent-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <MdLock size={18} aria-hidden="true" />
        {pending ? 'Checking…' : 'Sign in'}
      </button>
    </form>
  )
}
