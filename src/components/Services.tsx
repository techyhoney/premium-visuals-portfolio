import { Code, ShoppingBag, Laptop, Cpu, Bot } from "lucide-react";
import { motion } from "framer-motion";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const services = [
  {
    Icon: Code,
    name: "Custom Web Development",
    description: "We build scalable, high-performance applications with modern tech stacks tailored to your specific needs.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "GraphQL"],
    href: "#contact",
    cta: "Get started",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    Icon: Laptop,
    name: "No-Code Solutions",
    description: "Fast-track your digital presence with no-code platforms that offer flexibility without sacrificing quality.",
    technologies: ["Webflow", "Bubble", "Airtable", "Zapier", "Memberstack"],
    href: "#contact",
    cta: "Learn more",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    Icon: ShoppingBag,
    name: "Shopify Development",
    description: "Custom e-commerce experiences that drive conversions with beautiful UX and optimized performance.",
    technologies: ["Shopify", "Liquid", "Hydrogen", "Oxygen", "Headless"],
    href: "#contact",
    cta: "Explore options",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    Icon: Bot,
    name: "Business Chatbots",
    description: "Intelligent conversational AI systems that engage customers, answer queries, and streamline support operations.",
    technologies: ["GPT-4", "DialogFlow", "Rasa", "Botpress", "NLP"],
    href: "#contact",
    cta: "Get a demo",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    Icon: Cpu,
    name: "AI Automation",
    description: "Integrate cutting-edge AI solutions to automate workflows and create intelligent user experiences.",
    technologies: ["GPT-4", "Computer Vision", "NLP", "Machine Learning", "Chatbots"],
    href: "#contact",
    cta: "Discover AI",
    className: "md:col-span-1 md:row-span-1"
  },
];

const Services = () => {
  return (
    <section id="services" className="section-spacing relative">
      <div className="max-container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-accent">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Services we offer</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our comprehensive suite of services is designed to address all your digital needs with a premium touch.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            className="md:col-span-1 h-[46rem] md:h-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <BentoCard
              {...services[0]}
              background={
                <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/40 to-vivid-purple/10 opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
              }
            />
          </motion.div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                className="h-[22rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <BentoCard
                  {...services[1]}
                  background={
                    <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/40 to-vivid-purple/10 opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                  }
                />
              </motion.div>
              
              <motion.div
                className="h-[22rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <BentoCard
                  {...services[2]}
                  background={
                    <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/40 to-vivid-purple/10 opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                  }
                />
              </motion.div>
              
              <motion.div
                className="h-[22rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <BentoCard
                  {...services[3]}
                  background={
                    <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/40 to-vivid-purple/10 opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                  }
                />
              </motion.div>
              
              <motion.div
                className="h-[22rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <BentoCard
                  {...services[4]}
                  background={
                    <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/40 to-vivid-purple/10 opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                  }
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
