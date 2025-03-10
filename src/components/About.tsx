
import { cn } from "@/lib/utils";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-spacing relative">
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm text-accent">About Founder</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Meet the Visionary</h2>
            <p className="text-muted-foreground mt-6">
              With over a decade of experience in software development, our founder has worked with startups and Fortune 500 companies alike, bringing a wealth of knowledge and expertise to every project.
            </p>
            <p className="text-muted-foreground mt-4">
              After leading teams at major tech companies, they founded StellarDev with a mission to deliver premium digital solutions that combine technical excellence with exceptional design.
            </p>
            <p className="text-muted-foreground mt-4">
              Their approach blends cutting-edge technology with human-centered design principles, ensuring that every product not only looks beautiful but delivers tangible business results.
            </p>
            
            <div className="mt-8 flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
            
            <div className="mt-8">
              <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
                Read full story <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square w-full max-w-[400px] mx-auto">
              <div className={cn(
                "w-full h-full rounded-2xl overflow-hidden",
                "bg-gradient-to-br from-accent/30 to-primary/30"
              )}>
                {/* Placeholder for founder image */}
                <div className="w-full h-full flex items-center justify-center text-white/30">
                  Founder Image
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-6 max-w-[240px]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">80+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">25+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">12+</p>
                  <p className="text-sm text-muted-foreground">Awards Won</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
