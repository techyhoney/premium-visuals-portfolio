
import { Code, ShoppingBag, Laptop, Cpu, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Custom Web Development",
    description: "We build scalable, high-performance applications with modern tech stacks tailored to your specific needs.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "GraphQL"]
  },
  {
    icon: <Laptop className="h-10 w-10 text-primary" />,
    title: "No-Code Solutions",
    description: "Fast-track your digital presence with no-code platforms that offer flexibility without sacrificing quality.",
    technologies: ["Webflow", "Bubble", "Airtable", "Zapier", "Memberstack"]
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-primary" />,
    title: "Shopify Development",
    description: "Custom e-commerce experiences that drive conversions with beautiful UX and optimized performance.",
    technologies: ["Shopify", "Liquid", "Hydrogen", "Oxygen", "Headless"]
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "Business Chatbots",
    description: "Intelligent conversational AI systems that engage customers, answer queries, and streamline support operations.",
    technologies: ["GPT-4", "DialogFlow", "Rasa", "Botpress", "NLP"]
  },
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: "AI Automation",
    description: "Integrate cutting-edge AI solutions to automate workflows and create intelligent user experiences.",
    technologies: ["GPT-4", "Computer Vision", "NLP", "Machine Learning", "Chatbots"]
  },
];

const ServicesCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="absolute inset-0 bg-accent/5 rounded-xl blur-xl group-hover:bg-accent/10 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
      <div className="glass-card p-8 rounded-xl relative overflow-hidden border border-white/10 backdrop-blur-xl group-hover:border-white/20 transition-all duration-300">
        {/* Premium reflection effect */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute left-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute right-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        
        {/* Icon with enhanced glow */}
        <motion.div 
          className="mb-4 relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          {service.icon}
        </motion.div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">{service.title}</h3>
        <p className="text-muted-foreground mb-6 group-hover:text-white/80 transition-colors">{service.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="text-xs py-1 px-3 rounded-full bg-white/5 text-muted-foreground group-hover:bg-white/10 group-hover:text-white/90 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-spacing relative">
      <div className="max-container">
        <div className="text-center mb-16">
          <span className="text-sm text-accent">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Services we offer</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our comprehensive suite of services is designed to address all your digital needs with a premium touch.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServicesCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
