import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/programme/HeroSection'
import { ProgrammeNav } from '@/components/programme/ProgrammeNav'
import { ModulesSection } from '@/components/programme/ModulesSection'
import { IntegratedStructureSection } from '@/components/programme/IntegratedStructureSection'
import { CtaSection } from '@/components/programme/CtaSection'
import { seniorKindergarten } from '@/lib/programmes'

export default function SeniorKindergarten() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection title={seniorKindergarten.title} />
        <ProgrammeNav current={seniorKindergarten.slug} />
        <ModulesSection modules={seniorKindergarten.modules} />
        <IntegratedStructureSection structure={seniorKindergarten.structure} />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
