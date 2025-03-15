
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and project requirements through in-depth consultation."
  },
  {
    number: "02",
    title: "Design",
    description: "Our designers create high-fidelity mockups and prototypes that align with your brand and user experience goals."
  },
  {
    number: "03",
    title: "Launch",
    description: "We deploy your solution and provide training to ensure a smooth transition and successful adoption."
  }
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="process" className="section-spacing relative overflow-hidden">
      {/* Subtle background gradient with reflection */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-[150px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[150px] opacity-50"></div>
      
      <div className="max-container relative z-10">
        {/* Process section content */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm text-accent">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gradient-cosmic">Our Process</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Building sites, end-to-end.
          </p>
        </motion.div>
        
        <div ref={containerRef} className="relative mx-auto max-w-3xl">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/30 via-vivid-purple/50 to-primary/30"></div>
          
          {/* Moving sparkle element */}
          <motion.div 
            className="absolute left-[-8px] md:left-0 w-6 h-6 z-10 text-accent"
            style={{ 
              top: useTransform(scrollYProgress, [0, 1], ["0%", "95%"])
            }}
          >
            <Sparkles className="w-full h-full animate-pulse-soft" />
          </motion.div>
          
          {/* Timeline steps */}
          {steps.map((step, index) => (
            <TimelineStep 
              key={index}
              step={step}
              index={index}
              progress={scrollYProgress}
              total={steps.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TimelineStepProps {
  step: {
    number: string;
    title: string;
    description: string;
  };
  index: number;
  progress: any;
  total: number;
}

const TimelineStep = ({ step, index, progress, total }: TimelineStepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);
  
  // Calculate the progress threshold for this step
  const startThreshold = index / total;
  const endThreshold = (index + 1) / total;
  
  // Transform values for opacity and y position based on scroll progress
  const opacity = useTransform(
    progress, 
    [startThreshold - 0.1, startThreshold, endThreshold - 0.1, endThreshold], 
    [0.3, 1, 1, 0.3]
  );
  
  const y = useTransform(
    progress, 
    [startThreshold - 0.1, startThreshold, endThreshold, endThreshold + 0.1], 
    [20, 0, 0, -20]
  );
  
  const scale = useTransform(
    progress, 
    [startThreshold - 0.1, startThreshold, endThreshold - 0.1, endThreshold], 
    [0.95, 1, 1, 0.95]
  );

  return (
    <motion.div 
      ref={stepRef}
      className="flex items-start pl-8 md:pl-20 py-16 relative"
      style={{ opacity, y, scale }}
    >
      {/* Timeline dot */}
      <div className="absolute left-[-9px] md:left-[-1px] top-[78px] w-5 h-5 rounded-full border-2 border-vivid-purple bg-background"></div>
      
      {/* Step number */}
      <div className="mr-6">
        <div className="text-3xl font-bold bg-gradient-to-r from-accent to-vivid-purple bg-clip-text text-transparent">{step.number}</div>
      </div>
      
      {/* Step content */}
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-2 text-white">{step.title}</h3>
        <p className="text-muted-foreground max-w-lg">{step.description}</p>
      </div>
    </motion.div>
  );
};

export default Process;
