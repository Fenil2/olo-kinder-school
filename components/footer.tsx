import Image from 'next/image'
import Link from 'next/link'
import { Motion } from '@/components/ui/motion'

export function Footer() {
  return (
    <footer className="band-plum bg-surface-dark text-white pt-10 lg:pt-24 pb-10 relative overflow-hidden">
      {/* The cast waving the page off along the footer's top edge. The
          offsets are positive: the section clips its overflow, so anything
          hung above the edge loses its head. */}
      <img
        src="/images/mascots/rolly.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-2 left-[10%] w-14 hidden lg:block"
      />
      <img
        src="/images/mascots/squary.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1 left-[24%] w-12 -rotate-6 hidden xl:block"
      />
      <img
        src="/images/mascots/starry.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1 right-[26%] w-12 rotate-6 hidden xl:block"
      />
      <img
        src="/images/mascots/hexy.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-2 right-[10%] w-14 hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Motion variant="up">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-7 mb-7">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link href="/">
                <Image src="/images/brand/olo-globe.webp" alt="Olo Kinder" width={820} height={900} className="h-20 w-auto object-contain mb-3" />
              </Link>
              <p className="text-sm text-white/70 leading-relaxed">
                Nurturing curious, confident, creative and compassionate young learners.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-3 text-white/90">Quick Links</h3>
              <ul className="space-y-1.5 text-sm text-white/70">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About Olo Kinder' },
                  { href: '/curriculum', label: 'Curriculum' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className="font-semibold mb-3 text-white/90">Explore</h3>
              <ul className="space-y-1.5 text-sm text-white/70">
                {[
                  { href: '/learning-experiences', label: 'Learning Experiences' },
                  { href: '/gallery', label: 'Gallery' },
                  { href: '/admissions', label: 'Admissions' },
                  { href: '/contact', label: 'Contact Us' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-3 text-white/90">Contact</h3>
              <ul className="space-y-1.5 text-sm text-white/70">
                <li>98406 04197</li>
                <li>1470 B, Kathiravan Colony Main Road, Anna Nagar West, Chennai - 600040</li>
                <li className="pt-2">
                  <Link
                    href="/admissions#enquiry"
                    className="inline-block bg-accent text-accent-foreground px-5 py-2 rounded-full text-sm font-semibold hover:bg-accent-hover transition-colors"
                  >
                    Admissions Open Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Motion>

        <div className="border-t border-white/15 pt-5 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Olo Kinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
