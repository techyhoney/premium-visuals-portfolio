"use client"

import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";

const GlobeSection = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background gradients - adjusted to be more subtle and reduce space */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-purple/10 to-deep-purple/30 pointer-events-none"></div>
      
      {/* Cosmic particles - reduced number for better performance */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-white animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-white animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      </div>
      
      {/* Additional cosmic glow for better blending - reduced size */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-vivid-purple/20 blur-[100px] opacity-30"></div>
      </div>
      
      <div className="max-container relative px-4">
        <motion.div 
          className="text-center mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm text-accent">Global Presence</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 md:mt-2">Serving clients worldwide</h2>
          <p className="text-muted-foreground mt-2 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Our team collaborates with businesses across the globe, delivering exceptional digital solutions regardless of location.
          </p>
        </motion.div>
        
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] -mx-4 sm:mx-0">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Globe className="max-w-[300px] sm:max-w-[400px] md:max-w-[500px]" />
          </motion.div>
          
          {/* Enhanced cosmic glow effects - reduced intensity */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_30%)]"></div>
          
          {/* Text overlay - adjusted for better responsiveness */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-vivid-purple to-bright-orange bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                Global
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobeSection; 