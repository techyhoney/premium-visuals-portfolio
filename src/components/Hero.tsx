
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background -z-10"></div>
      
      {/* Decorative circle */}
      <div className="absolute top-32 right-[10%] w-80 h-80 rounded-full bg-accent/5 blur-[100px] -z-10"></div>
      <div className="absolute bottom-32 left-[10%] w-60 h-60 rounded-full bg-primary/5 blur-[80px] -z-10"></div>
      
      <div className="max-container flex flex-col items-center text-center">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
          <span className="inline-block py-1 px-3 rounded-full border border-accent/20 text-sm text-accent/90 mb-4 backdrop-blur-sm">
            Premium Software Agency
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight max-w-4xl animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
          We build <span className="text-gradient">digital products</span> that empower businesses
        </h1>
        
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
          Custom web development, no-code solutions, Shopify expertise, and AI automation. 
          We bring your ideas to life with premium quality and exceptional attention to detail.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center animate-fade-in opacity-0" style={{ animationDelay: "0.7s" }}>
          <Button className="glass-button h-12 px-6 text-md">
            View Our Work <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="link" className="text-muted-foreground hover:text-white">
            Learn about our services
          </Button>
        </div>
        
        <div className="mt-20 animate-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
          <p className="text-sm text-muted-foreground mb-4">Trusted by forward-thinking companies</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {/* Placeholder for company logos */}
            {['Company A', 'Company B', 'Company C', 'Company D'].map((company, index) => (
              <div key={index} className="h-8 flex items-center justify-center">
                <div className="w-24 h-8 bg-white/5 rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
