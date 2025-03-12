
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
  return (
    <section id="process" className="section-spacing relative overflow-hidden">
      {/* Subtle background gradient with reflection */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-[150px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[150px] opacity-50"></div>
      
      <div className="max-container mt-20 relative z-10">
        {/* Process section content */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm text-accent">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Process</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We follow a structured approach to deliver exceptional results, ensuring transparency and efficiency at every stage.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className={cn(
                "glass-card p-8 rounded-xl transition-all duration-300 hover:translate-y-[-5px]",
                "border-t-2 border-t-accent/50"
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                boxShadow: "0 10px 25px -5px rgba(146, 118, 255, 0.1)",
                borderTopColor: "rgba(146, 118, 255, 0.7)" 
              }}
            >
              <span className="text-3xl text-accent font-bold">{step.number}</span>
              <h3 className="text-xl font-semibold my-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {/* Premium reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 20%, 0 20%)" }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
