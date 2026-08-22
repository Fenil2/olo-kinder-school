import Link from 'next/link'
import { enrichmentPages } from '@/lib/enrichment'

/**
 * The three-way switch between the enrichment pages. Same pill row the
 * curriculum programmes use, so the two sub-sections of the site feel like
 * one family rather than two different ideas of a sub-nav.
 */
export function EnrichmentNav({ current }: { current: string }) {
  return (
    <section className="band-cream px-4 sm:px-6 lg:px-8 py-6 border-b border-border">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-3">
        {enrichmentPages.map((page) => {
          const isActive = page.slug === current
          return (
            <Link
              key={page.slug}
              href={`/enrichment-programme/${page.slug}`}
              aria-current={isActive ? 'page' : undefined}
              className={`px-5 py-2 rounded-full text-base sm:text-lg font-semibold transition-colors ${
                isActive
                  ? 'bg-accent text-accent-foreground'
                  : 'border border-border text-foreground/90 hover:border-primary hover:text-primary'
              }`}
            >
              {page.navLabel}
            </Link>
          )
        })}
      </div>
    </section>
  )
}
