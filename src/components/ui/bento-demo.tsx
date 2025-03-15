import { Code, ShoppingBag, Laptop, Cpu, Bot } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const services = [
  {
    Icon: Code,
    name: "Custom Web Development",
    description: "We build scalable, high-performance applications with modern tech stacks tailored to your specific needs.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "GraphQL"],
    href: "#contact",
    cta: "Get started",
    className: "md:col-span-1 md:row-span-2 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/40 to-vivid-purple/10 opacity-30 group-hover:opacity-40 transition-opacity duration-300">
        <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-accent/20 blur-[80px] opacity-70"></div>
      </div>
    )
  },
  {
    Icon: Laptop,
    name: "No-Code Solutions",
    description: "Fast-track your digital presence with no-code platforms that offer flexibility without sacrificing quality.",
    technologies: ["Webflow", "Bubble", "Airtable", "Zapier", "Memberstack"],
    href: "#contact",
    cta: "Learn more",
    className: "md:col-span-1 md:row-span-1 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/40 to-vivid-purple/10 opacity-30 group-hover:opacity-40 transition-opacity duration-300">
        <div className="absolute -left-16 -bottom-16 w-32 h-32 rounded-full bg-primary/20 blur-[80px] opacity-70"></div>
      </div>
    )
  },
  {
    Icon: ShoppingBag,
    name: "Shopify Development",
    description: "Custom e-commerce experiences that drive conversions with beautiful UX and optimized performance.",
    technologies: ["Shopify", "Liquid", "Hydrogen", "Oxygen", "Headless"],
    href: "#contact",
    cta: "Explore options",
    className: "md:col-span-1 md:row-span-1 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/40 to-vivid-purple/10 opacity-30 group-hover:opacity-40 transition-opacity duration-300">
        <div className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full bg-accent/20 blur-[80px] opacity-70"></div>
      </div>
    )
  },
  {
    Icon: Bot,
    name: "Business Chatbots",
    description: "Intelligent conversational AI systems that engage customers, answer queries, and streamline support operations.",
    technologies: ["GPT-4", "DialogFlow", "Rasa", "Botpress", "NLP"],
    href: "#contact",
    cta: "Get a demo",
    className: "md:col-span-1 md:row-span-1 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/40 to-vivid-purple/10 opacity-30 group-hover:opacity-40 transition-opacity duration-300">
        <div className="absolute -left-16 -top-16 w-32 h-32 rounded-full bg-primary/20 blur-[80px] opacity-70"></div>
      </div>
    )
  },
  {
    Icon: Cpu,
    name: "AI Automation",
    description: "Integrate cutting-edge AI solutions to automate workflows and create intelligent user experiences.",
    technologies: ["GPT-4", "Computer Vision", "NLP", "Machine Learning", "Chatbots"],
    href: "#contact",
    cta: "Discover AI",
    className: "md:col-span-1 md:row-span-1 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/40 to-vivid-purple/10 opacity-30 group-hover:opacity-40 transition-opacity duration-300">
        <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-accent/20 blur-[80px] opacity-70"></div>
      </div>
    )
  },
];

function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-2">
      {services.map((service) => (
        <BentoCard key={service.name} {...service} />
      ))}
    </BentoGrid>
  );
}

export { BentoDemo, services }; 