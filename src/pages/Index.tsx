import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import ProgramApproach from "@/components/ProgramApproach";
import WhyItWorks from "@/components/WhyItWorks";
import BenefitsSection from "@/components/BenefitsSection";
import DigitalDelivery from "@/components/DigitalDelivery";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhoIsItForSection />
        <ProgramApproach />
        <WhyItWorks />
        <BenefitsSection />
        <DigitalDelivery />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
