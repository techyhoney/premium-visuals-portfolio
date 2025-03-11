
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
import { TechStackScroll } from "@/components/TechStackScroll";

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
      
      {/* Tech Stack Section - Full Width */}
      <section className="py-20 w-full bg-gradient-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
        <div className="text-center mb-10 max-w-7xl mx-auto px-4">
          <span className="text-sm text-accent">Our Technology Stack</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Powered by Modern Technologies</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We leverage cutting-edge tools and frameworks to build robust, scalable solutions.
          </p>
        </div>
        <TechStackScroll />
      </section>
      
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
