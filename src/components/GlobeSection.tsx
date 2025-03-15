"use client"

import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";

const GlobeSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradients - removed black gradient and adjusted to blend with cosmic theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-purple/10 to-deep-purple/30 pointer-events-none"></div>
      
      {/* Cosmic particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-white animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-white animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-white animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      {/* Additional cosmic glow for better blending */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-vivid-purple/20 blur-[120px] opacity-30"></div>
      </div>
      
      <div className="max-container relative">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm text-accent">Global Presence</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Serving clients worldwide</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our team collaborates with businesses across the globe, delivering exceptional digital solutions regardless of location.
          </p>
        </motion.div>
        
        <div className="relative h-[500px] md:h-[600px]">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Globe />
          </motion.div>
          
          {/* Enhanced cosmic glow effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_30%)]"></div>
          
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-vivid-purple to-bright-orange bg-clip-text text-transparent text-6xl md:text-8xl font-bold">
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