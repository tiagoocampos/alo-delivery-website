import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Segments } from "@/components/Segments";
import { Pricing } from "@/components/Pricing";
import { LocalSection } from "@/components/LocalSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorks />
        <Segments />
        <Pricing />
        <LocalSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
