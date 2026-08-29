import Link from 'next/link'

/**
 * The About group's page switcher, built like `ProgrammeNav`: the subpages
 * carry it, the overview does not, so a reader who lands deep in the group
 * always has the way back out.
 */
const pages = [
  { slug: 'about', href: '/about', label: 'About Olo Kinder' },
  { slug: 'our-history', href: '/about/our-history', label: 'Our History' },
]

export function AboutNav({ current }: { current: string }) {
  return (
    <section className="band-cream px-4 sm:px-6 lg:px-8 py-6 border-b border-border">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-3">
        {pages.map((page) => {
          const isActive = page.slug === current
          return (
            <Link
              key={page.slug}
              href={page.href}
              aria-current={isActive ? 'page' : undefined}
              className={`px-5 py-2 rounded-full text-base sm:text-lg font-semibold transition-colors ${
                isActive
                  ? 'bg-accent text-accent-foreground'
                  : 'border border-border text-foreground/90 hover:border-primary hover:text-primary'
              }`}
            >
              {page.label}
            </Link>
          )
        })}
      </div>
    </section>
  )
}
