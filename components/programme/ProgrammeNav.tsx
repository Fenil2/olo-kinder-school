import Link from 'next/link'
import { programmes } from '@/lib/programmes'

export function ProgrammeNav({ current }: { current: string }) {
  return (
    <section className="bg-background px-4 sm:px-6 lg:px-8 py-6 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-3">
        {programmes.map((programme) => {
          const isActive = programme.slug === current
          return (
            <Link
              key={programme.slug}
              href={`/curriculum/${programme.slug}`}
              aria-current={isActive ? 'page' : undefined}
              className={`px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors ${
                isActive
                  ? 'bg-accent text-white'
                  : 'border border-border text-foreground/75 hover:border-accent hover:text-accent'
              }`}
            >
              {programme.navLabel}
            </Link>
          )
        })}
      </div>
    </section>
  )
}
