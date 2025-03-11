
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// User avatar data - gradient backgrounds to simulate avatars
const userAvatars = [
  { gradient: "from-blue-500 to-purple-500" },
  { gradient: "from-green-500 to-teal-500" },
  { gradient: "from-rose-500 to-pink-500" },
  { gradient: "from-amber-500 to-orange-500" },
  { gradient: "from-indigo-500 to-blue-500" },
];

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
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="backdrop-blur-sm"
        >
          <span className="inline-block py-1.5 px-4 rounded-full border border-accent/20 text-sm font-medium text-accent/90 bg-accent/5 shadow-[0_0_15px_rgba(146,118,255,0.1)] backdrop-blur-sm">
            Premium Software Agency
          </span>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight max-w-4xl"
        >
          We build <span className="text-gradient relative">
            digital products
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"></span>
          </span> that empower businesses
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed"
        >
          Custom web development, no-code solutions, Shopify expertise, and AI automation. 
          We bring your ideas to life with premium quality and exceptional attention to detail.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 items-center"
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
        </motion.div>
        
        {/* Testimonial Avatars Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-24"
        >
          <p className="text-sm text-muted-foreground mb-6">Trusted by 60K+ developers</p>
          
          <div className="flex justify-center">
            {/* Avatar Stack */}
            <div className="flex -space-x-3 relative">
              {userAvatars.map((avatar, index) => (
                <motion.div
                  key={index}
                  className={`relative z-[${10 - index}] w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-gradient-to-br ${avatar.gradient}`}
                  whileHover={{ scale: 1.15, translateY: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Placeholder for actual user images */}
                  <div className="w-full h-full opacity-80"></div>
                  
                  {/* Reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-70" 
                       style={{ clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 30%)" }}></div>
                </motion.div>
              ))}
              
              {/* More users indicator */}
              <motion.div
                className="relative z-0 w-10 h-10 rounded-full border-2 border-background overflow-hidden glass-card flex items-center justify-center"
                whileHover={{ scale: 1.15, translateY: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xs font-medium">+50K</span>
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50" 
                     style={{ clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 30%)" }}></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
