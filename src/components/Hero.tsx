
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden flex items-center">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-[#080A16] bg-opacity-95 -z-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/5 -z-10" />
      
      {/* Decorative elements with premium reflections */}
      <div className="absolute top-20 right-[5%] w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-pulse -z-10" />
      <div className="absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-pulse delay-700 -z-10" />
      
      {/* Glass reflections */}
      <div className="absolute top-1/4 left-[15%] w-32 h-32 rotate-45 bg-white/5 rounded-xl blur-xl -z-10" />
      <div className="absolute bottom-1/4 right-[15%] w-24 h-24 rotate-12 bg-white/5 rounded-xl blur-xl -z-10" />
      
      <div className="max-container flex flex-col items-center text-center">
        {/* Premium Badge */}
        <div 
          className="animate-fade-in opacity-0 backdrop-blur-sm"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full border border-accent/20 text-sm font-medium text-accent/90 bg-accent/5 shadow-[0_0_15px_rgba(146,118,255,0.1)] backdrop-blur-sm">
            Premium Software Agency
          </span>
        </div>
        
        {/* Main Heading */}
        <h1 
          className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight max-w-4xl animate-fade-in opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          We build <span className="text-gradient relative">
            digital products
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"></span>
          </span> that empower businesses
        </h1>
        
        {/* Description */}
        <p 
          className="mt-8 text-lg text-muted-foreground max-w-2xl animate-fade-in opacity-0 leading-relaxed"
          style={{ animationDelay: "0.5s" }}
        >
          Custom web development, no-code solutions, Shopify expertise, and AI automation. 
          We bring your ideas to life with premium quality and exceptional attention to detail.
        </p>
        
        {/* CTA Buttons */}
        <div 
          className="mt-12 flex flex-col sm:flex-row gap-6 items-center animate-fade-in opacity-0"
          style={{ animationDelay: "0.7s" }}
        >
          <Button className="glass-button h-12 px-8 text-md relative overflow-hidden group">
            <span className="relative z-10">View Our Work</span>
            <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
            <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Button>
          <Button 
            variant="link" 
            className="text-muted-foreground hover:text-white transition-colors duration-300"
          >
            Learn about our services
          </Button>
        </div>
        
        {/* Social Proof */}
        <div 
          className="mt-24 animate-fade-in opacity-0"
          style={{ animationDelay: "0.9s" }}
        >
          <p className="text-sm text-muted-foreground mb-6">Trusted by forward-thinking companies</p>
          <div className="flex flex-wrap justify-center gap-8">
            {['Company A', 'Company B', 'Company C', 'Company D'].map((company, index) => (
              <div 
                key={index} 
                className="h-12 flex items-center justify-center glass-card px-8 py-2"
              >
                <span className="text-sm text-muted-foreground">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
