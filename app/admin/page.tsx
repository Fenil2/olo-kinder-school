import Link from 'next/link'
import { redirect } from 'next/navigation'
import { MdDeleteOutline, MdInbox, MdLogout, MdMailOutline, MdPhone } from 'react-icons/md'
import { prisma } from '@/lib/prisma'
import { isSignedIn } from '@/lib/admin-auth'
import { LeadSource, LeadStatus } from '@/lib/generated/prisma/enums'
import { deleteLead, signOut } from '@/app/admin/actions'
import { StatusSelect } from './StatusSelect'

/* Reads a cookie and live data, so it is never prerendered or cached. */
export const dynamic = 'force-dynamic'

const STATUSES = Object.values(LeadStatus)
const SOURCES = Object.values(LeadSource)

const SOURCE_LABEL: Record<string, string> = {
  HOME: 'Home page',
  ADMISSIONS: 'Admissions',
  CONTACT: 'Contact',
}

const title = (value: string) => value.charAt(0) + value.slice(1).toLowerCase()

/** Asia/Kolkata, because that is where the school reads this. */
const dateFormat = new Intl.DateTimeFormat('en-IN', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Asia/Kolkata',
})

interface PageProps {
  searchParams: Promise<{ status?: string; source?: string }>
}

export default async function AdminDashboard({ searchParams }: PageProps) {
  if (!(await isSignedIn())) redirect('/admin/login')

  const params = await searchParams
  // Only values the enums actually contain reach the query.
  const status = STATUSES.includes(params.status as LeadStatus) ? (params.status as LeadStatus) : undefined
  const source = SOURCES.includes(params.source as LeadSource) ? (params.source as LeadSource) : undefined
  const where = { ...(status ? { status } : {}), ...(source ? { source } : {}) }

  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  const [leads, total, newCount, weekCount, filtered] = await Promise.all([
    prisma.lead.findMany({ where, orderBy: { createdAt: 'desc' }, take: 200 }),
    prisma.lead.count(),
    prisma.lead.count({ where: { status: LeadStatus.NEW } }),
    prisma.lead.count({ where: { createdAt: { gte: weekAgo } } }),
    prisma.lead.count({ where }),
  ])

  const stats = [
    { label: 'Total enquiries', value: total, tone: 'bg-mascot-hexy/15 text-mascot-hexy-dark' },
    { label: 'New / unactioned', value: newCount, tone: 'bg-mascot-roundy/15 text-mascot-roundy-dark' },
    { label: 'Last 7 days', value: weekCount, tone: 'bg-mascot-squarey/15 text-mascot-squarey-dark' },
  ]

  /** Build a filter link, dropping the key when it is already active. */
  const filterHref = (key: 'status' | 'source', value: string) => {
    const next = new URLSearchParams()
    if (status && key !== 'status') next.set('status', status)
    if (source && key !== 'source') next.set('source', source)
    const current = key === 'status' ? status : source
    if (current !== value) next.set(key, value)
    const qs = next.toString()
    return qs ? `/admin?${qs}` : '/admin'
  }

  const pill = (active: boolean) =>
    `px-3.5 py-1.5 rounded-full text-sm font-semibold transition-colors ${
      active ? 'bg-accent text-accent-foreground' : 'surface-card border border-border text-foreground/90 hover:border-primary hover:text-primary'
    }`

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

      <header className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <img src="/images/brand/olo-globe.webp" alt="" aria-hidden="true" className="h-11 w-auto object-contain" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-heading leading-tight">Admissions Dashboard</h1>
            <p className="text-sm text-foreground/75">Every enquiry submitted from the website.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors">
            View site
          </Link>
          <form action={signOut}>
            <button
              type="submit"
              className="flex items-center gap-2 surface-card border border-border px-4 py-2 rounded-full text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
            >
              <MdLogout size={16} aria-hidden="true" />
              Sign out
            </button>
          </form>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="surface-card rounded-2xl border border-border p-5">
            <p className="text-sm font-semibold text-foreground/70">{stat.label}</p>
            <p className={`mt-2 inline-block rounded-xl px-3 py-1 text-3xl font-bold tabular-nums ${stat.tone}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-sm font-bold uppercase tracking-wide text-foreground/60 mr-1">Status</span>
        {STATUSES.map((option) => (
          <Link key={option} href={filterHref('status', option)} className={pill(status === option)}>
            {title(option)}
          </Link>
        ))}
        <span className="text-sm font-bold uppercase tracking-wide text-foreground/60 ml-4 mr-1">Source</span>
        {SOURCES.map((option) => (
          <Link key={option} href={filterHref('source', option)} className={pill(source === option)}>
            {SOURCE_LABEL[option]}
          </Link>
        ))}
        {(status || source) && (
          <Link href="/admin" className="ml-2 text-sm font-semibold text-primary underline underline-offset-4">
            Clear
          </Link>
        )}
      </div>

      {leads.length === 0 ? (
        <div className="surface-card rounded-3xl border border-border p-12 text-center">
          <MdInbox size={48} className="mx-auto text-foreground/30" aria-hidden="true" />
          <p className="mt-4 text-lg font-bold text-heading">
            {total === 0 ? 'No enquiries yet' : 'Nothing matches this filter'}
          </p>
          <p className="mt-1 text-sm text-foreground/75">
            {total === 0
              ? 'Enquiries submitted from the website will appear here.'
              : 'Try clearing the filters above.'}
          </p>
        </div>
      ) : (
        <>
          <p className="text-sm text-foreground/70 mb-3">
            Showing {leads.length} of {filtered}
            {filtered > leads.length && ' (most recent 200)'}
          </p>

          {/* The table scrolls inside its own box rather than pushing the page
              sideways — there are nine columns and a phone has room for three. */}
          <div className="surface-card rounded-2xl border border-border overflow-x-auto">
            <table className="w-full min-w-[60rem] text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  {['Received', 'Parent', 'Child', 'Age', 'Contact', 'Enquiry', 'Source', 'Status', ''].map((head) => (
                    <th key={head} scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-foreground/70 whitespace-nowrap">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-border last:border-0 align-top hover:bg-muted/25 transition-colors">
                    <td className="px-4 py-4 text-sm text-foreground/80 whitespace-nowrap">
                      {dateFormat.format(lead.createdAt)}
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-heading whitespace-nowrap">{lead.parentName}</td>
                    <td className="px-4 py-4 text-sm text-foreground/90 whitespace-nowrap">{lead.childName ?? '—'}</td>
                    <td className="px-4 py-4 text-sm text-foreground/90 tabular-nums">{lead.childAge ?? '—'}</td>
                    <td className="px-4 py-4 text-sm">
                      <div className="flex flex-col gap-1">
                        {lead.phone && (
                          <a href={`tel:${lead.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-1.5 text-foreground/90 hover:text-primary transition-colors whitespace-nowrap">
                            <MdPhone size={14} aria-hidden="true" />
                            {lead.phone}
                          </a>
                        )}
                        {lead.email && (
                          <a href={`mailto:${lead.email}`} className="inline-flex items-center gap-1.5 text-foreground/90 hover:text-primary transition-colors break-all">
                            <MdMailOutline size={14} className="shrink-0" aria-hidden="true" />
                            {lead.email}
                          </a>
                        )}
                        {!lead.phone && !lead.email && <span className="text-foreground/60">—</span>}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-foreground/85 max-w-xs">
                      {lead.subject && <p className="font-semibold">{title(lead.subject)}</p>}
                      {lead.message ? (
                        <p className="whitespace-pre-wrap leading-relaxed">{lead.message}</p>
                      ) : (
                        !lead.subject && <span className="text-foreground/60">—</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-sm text-foreground/85 whitespace-nowrap">{SOURCE_LABEL[lead.source]}</td>
                    <td className="px-4 py-4">
                      <StatusSelect id={lead.id} value={lead.status} options={STATUSES} />
                    </td>
                    <td className="px-4 py-4">
                      <form action={deleteLead}>
                        <input type="hidden" name="id" value={lead.id} />
                        <button
                          type="submit"
                          aria-label={`Delete the enquiry from ${lead.parentName}`}
                          className="p-2 rounded-lg text-foreground/45 hover:text-destructive hover:bg-destructive/10 transition-colors"
                        >
                          <MdDeleteOutline size={18} aria-hidden="true" />
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}
