import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/programme/HeroSection'
import { ProgrammeNav } from '@/components/programme/ProgrammeNav'
import { MascotGuidesSection } from '@/components/programme/MascotGuidesSection'
import { ModulesSection } from '@/components/programme/ModulesSection'
import { CtaSection } from '@/components/programme/CtaSection'
import { seniorKindergarten } from '@/lib/programmes'

export default function SeniorKindergarten() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection programme={seniorKindergarten} />
        <ProgrammeNav current={seniorKindergarten.slug} />
        <MascotGuidesSection />
        <ModulesSection modules={seniorKindergarten.modules} />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
