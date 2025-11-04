import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PropertySlider } from "@/components/property-slider"
import { ContactFormSection } from "@/components/contact-form-section"
import { VideoSection } from "@/components/video-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PropertySlider />
      <ContactFormSection />
      <VideoSection />
      <Footer />
    </main>
  )
}
