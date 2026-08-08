'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { MdMenu, MdClose, MdPhone } from 'react-icons/md'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/curriculum', label: 'Curriculum' },
  { href: '/learning-experiences', label: 'Learning Experiences' },
  { href: '/contact', label: 'Contact' },
]

const PHONE = '98406 04197'
const PHONE_HREF = 'tel:+919840604197'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/olo-logo-removebg-preview.png" alt="Olo Kinder" width={80} height={72} className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-base font-medium transition-all duration-150 ${
                    isActive
                      ? 'text-accent bg-accent/10'
                      : 'text-foreground/75 hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors font-medium text-sm"
            >
              <MdPhone size={16} />
              <span>{PHONE}</span>
            </a>
            <Link
              href="/admissions"
              className="bg-accent text-white px-5 py-2 rounded-full hover:bg-orange-500 transition-colors font-semibold text-sm shadow-sm"
            >
              Admission Open Soon
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <MdClose size={22} /> : <MdMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                    isActive
                      ? 'bg-accent/10 text-accent'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                </Link>
              )
            })}
            <div className="pt-3 pb-1 border-t border-border mt-2 space-y-2">
              <a
                href={PHONE_HREF}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full border border-border text-foreground px-4 py-2.5 rounded-full font-medium text-sm hover:border-accent hover:text-accent transition-colors"
              >
                <MdPhone size={16} />
                {PHONE}
              </a>
              <Link
                href="/admissions"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-accent text-white px-4 py-3 rounded-full text-center font-semibold text-sm hover:bg-orange-500 transition-colors"
              >
                Admission Open Soon
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
