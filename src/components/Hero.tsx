import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

// Real user avatar data with images
const userAvatars = [
  { image: "https://originui.com/avatar-80-03.jpg" },
  { image: "https://originui.com/avatar-80-04.jpg" },
  { image: "https://originui.com/avatar-80-05.jpg" },
  { image: "https://originui.com/avatar-80-06.jpg" },
];

// Short reviews
const shortReviews = [
  { text: "Exceeded our expectations", rating: 5 },
  { text: "Remarkable UI design", rating: 5 },
  { text: "Outstanding support team", rating: 4 },
];

const Hero = () => {
  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
  };

  // Text to animate
  const headingText = "We build digital products that empower businesses";
  
  return (
    <section className="min-h-screen pt-40 pb-16 relative overflow-hidden flex items-center">
      {/* Cosmic backdrop */}
      <div className="absolute inset-0 bg-[#080A16] bg-opacity-10 -z-20" />
      
      {/* Central illumination glow - adding purple tublight effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[500px] bg-vivid-purple/30 blur-[120px] rounded-full opacity-90 -z-10" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[250px] bg-white/20 blur-[80px] rounded-full opacity-60 -z-10" />
      
      {/* Nebula-like effects with varying intensities */}
      <div className="absolute top-20 right-[5%] w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-pulse-soft -z-10" />
      <div className="absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-pulse-soft delay-700 -z-10" />
      <div className="absolute bottom-40 right-[15%] w-60 h-60 rounded-full bg-accent/15 blur-[90px] animate-pulse-soft delay-500 -z-10" />
      
      {/* Reflective glass elements */}
      <div className="absolute top-1/4 left-[15%] w-32 h-32 rotate-45 bg-white/5 rounded-xl blur-xl -z-10" />
      <div className="absolute bottom-1/4 right-[15%] w-24 h-24 rotate-12 bg-white/5 rounded-xl blur-xl -z-10" />
      
      <div className="max-container flex flex-col items-center text-center">
        {/* Short Reviews at the top */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {shortReviews.map((review, index) => (
            <div 
              key={index} 
              className="glass-card py-2 px-4 rounded-full flex items-center gap-2 bg-white/5 backdrop-blur-md"
            >
              <span className="text-sm text-white">{review.text}</span>
              <div className="flex">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Premium Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="backdrop-blur-sm"
        >
          <span className="inline-block py-1.5 px-4 rounded-full border border-accent/20 text-sm font-medium text-accent/90 bg-accent/5 shadow-[0_0_15px_rgba(146,118,255,0.1)] backdrop-blur-sm">
            oncefor-code once, works forever
          </span>
        </motion.div>
        
        {/* Main Heading with Text Animation and Glowing Effect */}
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight max-w-4xl hero-text-glow"
        >
          We build{" "}
          <span className="text-gradient relative inline-block">
            digital products
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"></span>
          </span>
          {" "}that empower businesses
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-lg text-white/80 max-w-2xl leading-relaxed"
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
          <div className="flex flex-col items-center">
            <Button className="glass-button h-14 px-10 text-md relative overflow-hidden group rainbow-border-glow rounded-full bg-white/10 hover:bg-white/15 border-violet-300/20">
              <PhoneCall className="mr-2 h-4 w-4 relative z-10" />
              <span className="relative z-10">Book a Call</span>
              <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
            <span className="text-xs text-white mt-2 font-medium">It's free!</span>
          </div>
          <Button 
            variant="link" 
            className="text-white/80 hover:text-white transition-colors duration-300"
          >
            <a href="#services">Learn about our services</a>
          </Button>
        </motion.div>
        
        {/* Testimonial Avatars Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-16"
        >
          <div className="flex flex-col items-center gap-4">
            {/* Avatar Stack */}
            <div className="flex -space-x-4 relative">
              {userAvatars.map((avatar, index) => (
                <motion.div
                  key={index}
                  className={`relative z-[${10 - index}] w-14 h-14 rounded-full border-2 border-background overflow-hidden shadow-lg`}
                  whileHover={{ scale: 1.15, translateY: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <img 
                    src={avatar.image} 
                    alt={`User avatar ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-70" 
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 30%)" }}></div>
                </motion.div>
              ))}
              
              {/* More users indicator */}
              <motion.div
                className="relative z-0 w-14 h-14 rounded-full border-2 border-background overflow-hidden glass-card flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.15, translateY: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xs font-medium">+60</span>
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50" 
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 30%)" }}></div>
              </motion.div>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-white">4.8/5</p>
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <p className="text-sm text-white/70">rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
