import { motion } from "framer-motion";
import { BentoDemo } from "@/components/ui/bento-demo";

const Services = () => {
  return (
    <section id="services" className="section-spacing relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-[150px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[150px] opacity-50"></div>
      
      <div className="max-container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-accent">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Services we offer</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our comprehensive suite of services is designed to address all your digital needs with a premium touch.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BentoDemo />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
