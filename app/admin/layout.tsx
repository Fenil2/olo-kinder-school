import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Admin — Olo Kinder',
  // The dashboard lists parents' contact details. Keep it out of search
  // results even if the URL leaks.
  robots: { index: false, follow: false, nocache: true },
}

/**
 * The admin area deliberately drops the site's Navigation and Footer — it is
 * a tool, not a page of the website.
 *
 * The session check does NOT live here. A layout is not a security boundary:
 * it does not re-run for every request a nested route or server action can
 * serve. Each page and each action checks for itself instead.
 */
export default function AdminLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-surface-mist">{children}</div>
}
