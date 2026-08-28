import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/programme/HeroSection'
import { ProgrammeNav } from '@/components/programme/ProgrammeNav'
import { MascotGuidesSection } from '@/components/programme/MascotGuidesSection'
import { ModulesSection } from '@/components/programme/ModulesSection'
import { CtaSection } from '@/components/programme/CtaSection'
import { juniorKindergarten } from '@/lib/programmes'

export default function JuniorKindergarten() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection programme={juniorKindergarten} />
        <ProgrammeNav current={juniorKindergarten.slug} />
        <MascotGuidesSection />
        <ModulesSection modules={juniorKindergarten.modules} />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
