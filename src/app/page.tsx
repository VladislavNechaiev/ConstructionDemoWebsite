import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import PricingApproach from "@/components/PricingApproach";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import CalBooking from "@/components/CalBooking";
import Footer from "@/components/Footer";
import { getServices, getProjects, getFaqs } from "../../sanity/lib/queries";

export default async function Home() {
  const [services, projects, faqs] = await Promise.all([
    getServices(),
    getProjects(),
    getFaqs(),
  ]);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-teal-600 selection:text-black">
      <Navigation />
      <Hero />
      <BeforeAfter />
      <Services sanityServices={services} />
      <PricingApproach />
      <Gallery sanityProjects={projects} />
      <FAQ sanityFaqs={faqs} />
      <CalBooking />
      <Footer />
    </main>
  );
}

