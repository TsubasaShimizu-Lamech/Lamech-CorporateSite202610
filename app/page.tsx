import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StrengthsSection } from "@/components/strengths-section"
import { RepresentativeSection } from "@/components/representative-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HeroSection />
        <StrengthsSection />
        <RepresentativeSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
