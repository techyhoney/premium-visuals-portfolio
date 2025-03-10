
import { Code, ShoppingBag, Laptop, Cpu, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

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
            <div 
              key={index}
              className={cn(
                "glass-card p-8 rounded-xl transition-all duration-300 hover:translate-y-[-5px]",
                "group cursor-pointer"
              )}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs py-1 px-3 rounded-full bg-white/5 text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
