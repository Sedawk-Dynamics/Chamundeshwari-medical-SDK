import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { MequbeHighlights } from '@/components/meqube-highlights'
import { MissionVision } from '@/components/mission-vision'
import { CriticalCareEquipment } from '@/components/critical-care-equipment'
import { Services } from '@/components/services'
import { Rental } from '@/components/rental'
import { WhyUs } from '@/components/why-us'
import { ExpertServices } from '@/components/expert-services'
import { Team } from '@/components/team'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Original hero — now a 3-slide carousel: Critical Care / Pre-owned Equipment / Services */}
        <Hero />
        {/* Original about — "Delivering World-Class Medical Equipment to Bangalore and Beyond" */}
        <About />
        {/* CHAMUNDESHWARI MEDICAL 360 / PROFESSIONALLY QUALIFIED / UNBEATABLE PRICE cards */}
        <MequbeHighlights />
        <MissionVision />
        {/* Products & Services — "Equipment Built for Critical Care" (ICU / NICU / OT / Services) */}
        <CriticalCareEquipment />
        <Services />
        <Rental />
        {/* Original — "Your Trusted Partner in Critical-Care Equipment" */}
        <WhyUs />
        <ExpertServices />
        {/* Original — "Meet Our Founding Directors" */}
        <Team />
        {/* Original — "Request a Quote or Product Demo" */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
