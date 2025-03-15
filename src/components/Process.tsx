"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { Search, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and project requirements through in-depth consultation.",
    icon: Search,
    color: "bg-accent"
  },
  {
    number: 2,
    title: "Design",
    description: "Our designers create high-fidelity mockups and prototypes that align with your brand and user experience goals.",
    icon: Palette,
    color: "bg-accent"
  },
  {
    number: 3,
    title: "Development",
    description: "Our engineers build your solution using modern technologies and best practices for performance, security, and scalability.",
    icon: Code,
    color: "bg-accent"
  },
  {
    number: 4,
    title: "Launch",
    description: "We deploy your solution and provide training to ensure a smooth transition and successful adoption.",
    icon: Rocket,
    color: "bg-vivid-purple"
  }
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1); // Default to the first step (Discovery)

  // Handle step click
  const handleStepClick = (stepNumber: number) => {
    setActiveStep(stepNumber);
  };

  return (
    <section id="process" className="section-spacing relative overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-[150px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[150px] opacity-50"></div>
      
      <div className="max-container relative z-10" ref={containerRef}>
        {/* Process section content */}
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm text-accent">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Our Process</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We follow a structured approach to deliver exceptional results for every project.
          </p>
        </motion.div>
        
        {/* Process steps */}
        <div className="relative mx-auto max-w-5xl">
          {/* Steps indicators - mobile view */}
          <div className="flex md:hidden flex-col items-center space-y-8 mb-8">
            {steps.map((step, index) => {
              // Determine step state
              const isCompleted = step.number < activeStep;
              const isActive = step.number === activeStep;
              const isFuture = step.number > activeStep;
              
              return (
                <div key={step.number} className="w-full">
                  <button 
                    onClick={() => handleStepClick(step.number)}
                    className="flex items-center w-full focus:outline-none group transition-all"
                    aria-label={`Go to ${step.title} step`}
                  >
                    <div className="relative mr-4">
                      <div className={cn(
                        "flex items-center justify-center w-12 h-12 rounded-full text-white transition-all duration-300",
                        isCompleted ? "bg-accent" : isActive ? "bg-vivid-purple" : "bg-deep-purple/50",
                        isActive || isCompleted ? "shadow-[0_0_15px_rgba(139,92,246,0.3)]" : "opacity-70"
                      )}>
                        {isCompleted ? (
                          <CheckIcon className="w-5 h-5" />
                        ) : (
                          <span className="text-lg font-semibold">{step.number}</span>
                        )}
                        <motion.div 
                          className="absolute -inset-2 rounded-full bg-vivid-purple/20 blur-md -z-10"
                          animate={{ 
                            opacity: isActive ? [0.3, 0.7, 0.3] : 0,
                            scale: isActive ? [0.9, 1.1, 0.9] : 1,
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                      
                      {/* Vertical connector line */}
                      {index < steps.length - 1 && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-white/10">
                          <div className={cn(
                            "w-full transition-all duration-500",
                            step.number < activeStep ? "bg-accent/70 h-full" : "h-0"
                          )}></div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 text-left">
                      <h3 className={cn(
                        "text-lg font-semibold transition-all duration-300",
                        isActive || isCompleted ? "text-white" : "text-white/50"
                      )}>
                        {step.title}
                      </h3>
                      <p className={cn(
                        "text-sm mt-1",
                        isActive ? "text-white/90" : isCompleted ? "text-white/80" : "text-white/60"
                      )}>
                        {step.description}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
          
          {/* Desktop view - Matching the screenshot exactly */}
          <div className="hidden md:block">
            {/* Steps with numbers and titles */}
            <div className="flex justify-center mb-12">
              {steps.map((step, index) => {
                // Determine step state
                const isCompleted = step.number < activeStep;
                const isActive = step.number === activeStep;
                
                return (
                  <div key={step.number} className="flex items-center">
                    <div className="flex flex-col items-center">
                      {/* Step circle with number */}
                      <button
                        onClick={() => handleStepClick(step.number)}
                        className="focus:outline-none transition-all hover:scale-105 mb-3"
                        aria-label={`Go to ${step.title} step`}
                      >
                        <div className={cn(
                          "flex items-center justify-center w-12 h-12 rounded-full text-white transition-all duration-300",
                          isCompleted ? "bg-accent" : isActive ? "bg-vivid-purple" : "bg-deep-purple/50",
                          isActive || isCompleted ? "shadow-[0_0_15px_rgba(139,92,246,0.3)]" : "opacity-70"
                        )}>
                          {isCompleted ? (
                            <CheckIcon className="w-5 h-5" />
                          ) : (
                            <span className="text-lg font-semibold">{step.number}</span>
                          )}
                        </div>
                      </button>
                      
                      {/* Step title */}
                      <h3 className={cn(
                        "text-base font-semibold transition-all duration-300 whitespace-nowrap",
                        isActive ? "text-white" : isCompleted ? "text-white" : "text-white/50"
                      )}>
                        {step.title}
                      </h3>
                    </div>
                    
                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <div className="w-16 md:w-24 lg:w-32 h-0.5 bg-white/10 mx-2 md:mx-4 mt-6">
                        <div className={cn(
                          "h-full transition-all duration-500",
                          step.number < activeStep ? "bg-accent/70 w-full" : "w-0"
                        )}></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Step descriptions - in a grid directly below each step */}
            <div className="grid grid-cols-4 gap-8 px-4 mt-8">
              {steps.map((step, index) => {
                const isCompleted = step.number < activeStep;
                const isActive = step.number === activeStep;
                
                return (
                  <div
                    key={step.number}
                    className={cn(
                      "text-center transition-all duration-300",
                      isActive ? "opacity-100" : isCompleted ? "opacity-80" : "opacity-50"
                    )}
                  >
                    <p className={cn(
                      "text-sm leading-relaxed",
                      isActive ? "text-white/90" : isCompleted ? "text-white/80" : "text-white/60"
                    )}>
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
