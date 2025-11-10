import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PropertySlider } from "@/components/property-slider"
import { ContactFormSection } from "@/components/contact-form-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PropertySlider />
      <ContactFormSection />
      <Footer />
      <WhatsAppFloatButton />
    </main>
  )
}
