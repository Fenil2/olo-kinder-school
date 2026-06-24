import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/contact/HeroSection'
import { ContactSection } from '@/components/contact/ContactSection'

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
