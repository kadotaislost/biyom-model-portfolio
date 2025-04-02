import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import MeasurementsSection from "@/components/measurements-section"
import BrandsSection from "@/components/brands-section"
import AchievementsSection from "@/components/achievements-section"
import RunwaysSection from "@/components/runways-section"
import GallerySection from "@/components/gallery-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MeasurementsSection />
      <BrandsSection />
      <AchievementsSection />
      <RunwaysSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}

