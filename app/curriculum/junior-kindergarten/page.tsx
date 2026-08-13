import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/programme/HeroSection'
import { ProgrammeNav } from '@/components/programme/ProgrammeNav'
import { ModulesSection } from '@/components/programme/ModulesSection'
import { IntegratedStructureSection } from '@/components/programme/IntegratedStructureSection'
import { CtaSection } from '@/components/programme/CtaSection'
import { juniorKindergarten } from '@/lib/programmes'

export default function JuniorKindergarten() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection title={juniorKindergarten.title} />
        <ProgrammeNav current={juniorKindergarten.slug} />
        <ModulesSection modules={juniorKindergarten.modules} />
        <IntegratedStructureSection structure={juniorKindergarten.structure} />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
