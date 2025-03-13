
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
    <div className="min-h-screen cosmic-bg text-foreground relative overflow-hidden">
      {/* Cosmic background effects */}
      <div className="absolute inset-0 cosmic-gradient -z-50"></div>
      
      {/* Nebula effect - central glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-300/10 blur-[120px] cosmic-glow -z-40"></div>
      
      {/* Secondary glow points */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-400/10 blur-[80px] -z-40"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-500/10 blur-[100px] -z-40"></div>
      
      {/* Star-like dots scattered around */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div 
          key={i}
          className="absolute bg-white/70 rounded-full cosmic-star"
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5 + 0.2,
            animation: `pulse-soft ${Math.random() * 3 + 2}s infinite alternate`
          }}
        ></div>
      ))}
      
      {/* Reflective mist effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-indigo-900/10 backdrop-blur-[1px] -z-30"></div>
      
      {/* Add subtle reflections */}
      <div className="absolute top-1/4 left-1/3 reflection-dot" style={{ top: '20%', left: '25%' }}></div>
      <div className="absolute bottom-1/4 right-1/3 reflection-glow" style={{ bottom: '15%', right: '15%' }}></div>
      <div className="absolute top-1/2 right-1/5 reflection-dot" style={{ top: '45%', right: '20%' }}></div>
      <div className="absolute bottom-1/3 left-1/4 reflection-glow" style={{ bottom: '30%', left: '10%' }}></div>
      
      <Navbar />
      <Hero />
      <Services />
      
      {/* Portfolio Section with Enhanced Reflections */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-accent/10 -z-20"></div>
        <Portfolio />
      </div>
      
      <Process />
      <Comparison />
      
      {/* Tech Stack Section - Moved below Comparison */}
      <section className="py-20 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-background to-indigo-900/30 -z-20"></div>
        <div className="text-center mb-10 max-w-7xl mx-auto px-4">
          <span className="text-sm text-accent">Our Technology Stack</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Powered by Modern Technologies</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We leverage cutting-edge tools and frameworks to build robust, scalable solutions.
          </p>
        </div>
        <TechStackScroll />
      </section>
      
      {/* Apply subtle background gradients to all remaining sections */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-800/10 via-background to-purple-800/10 -z-20"></div>
        <About />
      </div>
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-700/10 via-background to-violet-700/10 -z-20"></div>
        <Pricing />
      </div>
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-800/10 via-background to-purple-800/10 -z-20"></div>
        <Testimonials />
      </div>
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-700/10 via-background to-violet-700/10 -z-20"></div>
        <FAQ />
      </div>
      
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-800/10 via-background to-purple-800/10 -z-20"></div>
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
