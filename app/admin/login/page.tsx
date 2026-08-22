import { redirect } from 'next/navigation'
import { isSignedIn } from '@/lib/admin-auth'
import { LoginForm } from './LoginForm'

/* Reads a cookie, so it can never be prerendered. */
export const dynamic = 'force-dynamic'

export default async function AdminLoginPage() {
  if (await isSignedIn()) redirect('/admin')

  return (
    <main className="min-h-screen grid place-items-center px-4 py-16">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <img src="/images/brand/olo-globe.webp" alt="Olo Kinder" className="h-16 w-auto mx-auto object-contain" />
          <h1 className="mt-4 text-2xl font-bold text-heading">Admissions Dashboard</h1>
          <p className="mt-1 text-sm text-foreground/80">Sign in to view enquiries.</p>
        </div>

        <div className="surface-card rounded-3xl border border-border p-6 sm:p-8 shadow-sm">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
