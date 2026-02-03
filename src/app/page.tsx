import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import PricingApproach from "@/components/PricingApproach";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import CalBooking from "@/components/CalBooking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-luxury-black text-white selection:bg-luxury-gold selection:text-black">
      <Navigation />
      <Hero />
      <BeforeAfter />
      <Services />
      <PricingApproach />
      <Gallery />
      <FAQ />
      <CalBooking />
      <Footer />
    </main>
  );
}
