import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/programme/HeroSection'
import { ProgrammeNav } from '@/components/programme/ProgrammeNav'
import { ModulesSection } from '@/components/programme/ModulesSection'
import { IntegratedStructureSection } from '@/components/programme/IntegratedStructureSection'
import { CtaSection } from '@/components/programme/CtaSection'
import { preSchool } from '@/lib/programmes'

export default function PreSchool() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection title={preSchool.title} />
        <ProgrammeNav current={preSchool.slug} />
        <ModulesSection modules={preSchool.modules} />
        <IntegratedStructureSection structure={preSchool.structure} />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
