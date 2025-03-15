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
    <div className="min-h-screen bg-[#0F172A] text-foreground relative overflow-hidden">
      {/* Cosmic star dots */}
      <div className="absolute top-0 right-0 left-0 bottom-0 stars-container -z-20"></div>
      
      {/* Main cosmic backdrop for navbar and hero */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A] via-vivid-purple/10 to-accent/20 -z-30"></div>
      
      {/* Central illumination glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-vivid-purple/20 blur-[150px] opacity-70 -z-20"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-white/10 blur-[100px] opacity-60 -z-20"></div>
      
      {/* Reflective elements */}
      <div className="absolute top-1/4 left-1/5 w-32 h-32 rounded-full bg-accent/10 blur-[60px] opacity-70 animate-pulse-soft -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-primary/15 blur-[80px] opacity-60 animate-pulse-soft delay-700 -z-10"></div>
      
      <Navbar />
      <Hero />
      
      {/* Rest of the content with regular gradient backgrounds and consistent spacing */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A] to-[#0F172A] -z-20"></div>
        <Services />
      </div>
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-[#0F172A] to-accent/10 -z-20"></div>
        <Portfolio />
      </div>
      
      <div className="relative overflow-hidden mt-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-[#0F172A] to-primary/5 -z-20"></div>
        <Process />
      </div>
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-[#0F172A] to-accent/5 -z-20"></div>
        <Comparison />
      </div>
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-[#0F172A] to-primary/5 -z-20"></div>
        <About />
      </div>
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-[#0F172A] to-accent/5 -z-20"></div>
        <Pricing />
      </div>
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-[#0F172A] to-primary/5 -z-20"></div>
        <Testimonials />
      </div>
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-[#0F172A] to-accent/5 -z-20"></div>
        <FAQ />
      </div>
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-[#0F172A] to-primary/5 -z-20"></div>
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
