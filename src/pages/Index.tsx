
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft text-foreground relative overflow-hidden">
      {/* Add subtle reflections */}
      <div className="absolute top-1/4 left-1/3 reflection-dot" style={{ top: '20%', left: '25%' }}></div>
      <div className="absolute bottom-1/4 right-1/3 reflection-glow" style={{ bottom: '15%', right: '15%' }}></div>
      <div className="absolute top-1/2 right-1/5 reflection-dot" style={{ top: '45%', right: '20%' }}></div>
      <div className="absolute bottom-1/3 left-1/4 reflection-glow" style={{ bottom: '30%', left: '10%' }}></div>
      
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Comparison />
      <About />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
