'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { MdMenu, MdClose, MdPhone, MdExpandMore } from 'react-icons/md'

interface NavLink {
  href: string
  label: string
  children?: { href: string; label: string }[]
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    href: '/curriculum',
    label: 'Curriculum',
    children: [
      { href: '/curriculum', label: 'Overview' },
      { href: '/curriculum/pre-school', label: 'Pre-School' },
      { href: '/curriculum/junior-kindergarten', label: 'Junior Kindergarten' },
      { href: '/curriculum/senior-kindergarten', label: 'Senior Kindergarten' },
    ],
  },
  { href: '/learning-experiences', label: 'Learning Experiences' },
  {
    // No index route: the desktop trigger is a button and the mobile trigger is
    // a heading, so this href is only ever used to mark the group active.
    href: '/enrichment-programme',
    label: 'Enrichment',
    children: [
      { href: '/enrichment-programme/for-teachers', label: 'For Teachers' },
      { href: '/enrichment-programme/for-parents', label: 'For Parents' },
      { href: '/enrichment-programme/for-students', label: 'For Students' },
    ],
  },
  { href: '/evaluation', label: 'Evaluation' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

const PHONE = '98406 04197'
const PHONE_HREF = 'tel:+919840604197'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close the desktop dropdown on outside click or Escape
  useEffect(() => {
    if (!openDropdown) return
    const onPointerDown = (e: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setOpenDropdown(null)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenDropdown(null)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [openDropdown])

  // Collapse menus when navigating
  useEffect(() => {
    setIsOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">

      {/* Full width rather than a centred `max-w-7xl` column. The bar spans
          the window, so the logo sits at the true left edge and the CTAs at
          the true right, instead of both being pulled inward to meet a
          content column that nothing else in the bar belongs to. The extra
          room is also what lets eight links and two CTAs share one row. */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 lg:gap-6 h-20">

          {/* Logo — hard left, and the only fixed point in the row */}
          <Link href="/" className="shrink-0">
            <Image src="/images/brand/olo-globe.webp" alt="Olo Kinder" width={820} height={900} priority className="h-15 sm:h-16 w-auto object-contain" />
          </Link>

          {/* Desktop nav links. `flex-1` gives them the whole gap between the
              logo and the CTAs and centres them inside it, so the row stays
              balanced at every window width rather than drifting with the
              length of the link labels. */}
          <div ref={dropdownRef} className="hidden xl:flex flex-1 items-center justify-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = link.children
                ? pathname.startsWith(link.href)
                : pathname === link.href

              if (link.children) {
                const isDropdownOpen = openDropdown === link.href
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      onClick={() => setOpenDropdown(isDropdownOpen ? null : link.href)}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                      className={`flex items-center gap-1 px-3 py-2 rounded-full text-nav font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                        isActive
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground/90 hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.label}
                      <MdExpandMore
                        size={18}
                        className={`transition-transform duration-150 ${isDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute left-0 top-full pt-2 w-60">
                        <div className="surface-card rounded-2xl border border-border shadow-lg p-2">
                          {link.children.map((child) => {
                            const isChildActive = pathname === child.href
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpenDropdown(null)}
                                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                                  isChildActive
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-foreground/90 hover:bg-muted hover:text-foreground'
                                }`}
                              >
                                {child.label}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-full text-nav font-semibold whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/90 hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <a
              href={PHONE_HREF}
              /* `text-nav`, not `text-sm`: these two sit in the same one-row
                 budget as the links beside them, so they stay out of the body
                 scale for the same reason the links do. The mobile panel's
                 copies of them are a stacked column and keep `text-sm`. */
              className="flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-full hover:border-primary hover:text-primary transition-colors font-semibold text-nav"
            >
              <MdPhone size={16} />
              <span>{PHONE}</span>
            </a>
            <Link
              href="/admissions#enquiry"
              className="bg-accent text-accent-foreground px-5 py-2 rounded-full hover:bg-accent-hover transition-colors font-semibold text-nav shadow-sm"
            >
              Admissions Open Now
            </Link>
          </div>

          {/* Mobile hamburger. `ml-auto` because the links and the CTAs that
              would otherwise fill the row are both hidden at this width —
              without it the button would sit against the logo. */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden ml-auto text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <MdClose size={22} /> : <MdMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="xl:hidden border-t border-border surface-card">
          {/* Same gutters as the bar above, so the panel's links line up with
              the logo rather than sitting in a narrower column of their own. */}
          <div className="w-full px-4 sm:px-6 lg:px-8 py-3 space-y-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              if (link.children) {
                return (
                  <div key={link.href} className="space-y-0.5">
                    <div className="px-4 pt-2 pb-1 text-xs font-bold uppercase tracking-wide text-foreground/70">
                      {link.label}
                    </div>
                    {link.children.map((child) => {
                      const isChildActive = pathname === child.href
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between pl-6 pr-4 py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                            isChildActive
                              ? 'bg-primary/10 text-primary'
                              : 'text-foreground hover:bg-muted'
                          }`}
                        >
                          <span>{child.label}</span>
                          {isChildActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                        </Link>
                      )
                    })}
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </Link>
              )
            })}
            <div className="pt-3 pb-1 border-t border-border mt-2 space-y-2">
              <a
                href={PHONE_HREF}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full border border-border text-foreground px-4 py-2.5 rounded-full font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
              >
                <MdPhone size={16} />
                {PHONE}
              </a>
              <Link
                href="/admissions#enquiry"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-accent text-accent-foreground px-4 py-3 rounded-full text-center font-semibold text-sm hover:bg-accent-hover transition-colors"
              >
                Admissions Open Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
