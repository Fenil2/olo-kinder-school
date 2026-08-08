import Image from 'next/image'
import Link from 'next/link'
import { Motion } from '@/components/ui/motion'

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion variant="up">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link href="/">
                <Image src="/olo-logo-removebg-preview.png" alt="Olo Kinder" width={100} height={90} className="h-20 w-auto object-contain mb-3" />
              </Link>
              <p className="text-sm text-white/70 leading-relaxed">
                Nurturing curious, confident, creative and compassionate young learners.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white/90">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white/70">
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
              <h3 className="font-semibold mb-4 text-white/90">Explore</h3>
              <ul className="space-y-2 text-sm text-white/70">
                {[
                  { href: '/learning-experiences', label: 'Learning Experiences' },
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
              <h3 className="font-semibold mb-4 text-white/90">Contact</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>98406 04197</li>
                <li>1470 B, Kathiravan Colony Main Road, Anna Nagar West, Chennai - 600040</li>
                <li className="pt-2">
                  <Link
                    href="/admissions#enquiry"
                    className="inline-block bg-accent text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-500 transition-colors"
                  >
                    Admissions Open Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Motion>

        <div className="border-t border-white/15 pt-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Olo Kinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
