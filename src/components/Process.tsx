
import { useRef } from "react";
import { cn } from "@/lib/utils";

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS", 
  "Framer Motion", "Shopify", "Webflow", "Firebase", "AWS", "MongoDB", 
  "PostgreSQL", "Redux", "Zustand", "React Query", "Jest", "Cypress",
  "Docker", "Kubernetes", "Stripe", "Vercel", "Netlify", "Auth0",
  "Storybook", "Figma", "Adobe XD", "Sketch", "Postman", "Git",
];

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and project requirements through in-depth consultation."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Based on the discovery, we create a comprehensive strategy outlining the technical approach and project roadmap."
  },
  {
    number: "03",
    title: "Design",
    description: "Our designers create high-fidelity mockups and prototypes that align with your brand and user experience goals."
  },
  {
    number: "04",
    title: "Development",
    description: "We build your solution using modern technologies and best practices for performance, security, and maintainability."
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous QA processes ensure your product works flawlessly across all devices and edge cases."
  },
  {
    number: "06",
    title: "Launch",
    description: "We deploy your solution and provide training to ensure a smooth transition and successful adoption."
  },
  {
    number: "07",
    title: "Support",
    description: "Our relationship continues with ongoing maintenance, updates, and strategic guidance for future growth."
  },
];

const Process = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="process" className="section-spacing relative overflow-hidden">
      {/* Tech stack marquee */}
      <div className="py-12 bg-gradient-to-r from-accent/10 to-primary/10 overflow-hidden">
        <div className="marquee-container" ref={marqueeRef}>
          <div className="marquee-content">
            {techStack.map((tech, index) => (
              <div key={index} className="flex-none mx-4 py-2 px-6 glass-card rounded-full">
                {tech}
              </div>
            ))}
          </div>
          <div className="marquee-content">
            {techStack.map((tech, index) => (
              <div key={`dup-${index}`} className="flex-none mx-4 py-2 px-6 glass-card rounded-full">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-container mt-20">
        <div className="text-center mb-16">
          <span className="text-sm text-accent">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Process</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We follow a structured approach to deliver exceptional results, ensuring transparency and efficiency at every stage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={cn(
                "glass-card p-8 rounded-xl transition-all duration-300 hover:translate-y-[-5px]",
                "border-t-2 border-t-accent/50"
              )}
            >
              <span className="text-3xl text-accent font-bold">{step.number}</span>
              <h3 className="text-xl font-semibold my-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
