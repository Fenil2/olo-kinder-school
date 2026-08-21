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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/images/brand/olo-globe.webp" alt="Olo Kinder" width={820} height={900} priority className="h-15 sm:h-16 w-auto object-contain" />
          </Link>

          {/* Desktop nav links */}
          <div ref={dropdownRef} className="hidden xl:flex items-center gap-0.5">
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
              className="flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-full hover:border-primary hover:text-primary transition-colors font-semibold text-sm"
            >
              <MdPhone size={16} />
              <span>{PHONE}</span>
            </a>
            <Link
              href="/admissions#enquiry"
              className="bg-accent text-accent-foreground px-5 py-2 rounded-full hover:bg-accent-hover transition-colors font-semibold text-sm shadow-sm"
            >
              Admissions Open Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <MdClose size={22} /> : <MdMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="xl:hidden border-t border-border surface-card">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
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
