import { ReactNode } from "react";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  technologies,
}: {
  name: string;
  className: string;
  background?: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
  technologies?: string[];
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl h-full",
      // cosmic theme styles
      "glass-card border border-white/10 backdrop-blur-xl group-hover:border-white/20 transition-all duration-300",
      // dark styles
      "transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    {/* Glowing effect */}
    <GlowingEffect
      spread={40}
      glow={false}
      disabled={false}
      proximity={64}
      inactiveZone={0.01}
      borderWidth={2}
      variant="default"
    />
    
    {/* Premium reflection effect */}
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    <div className="absolute left-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
    <div className="absolute right-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
    
    {/* Background */}
    {background ? (
      <div className="absolute inset-0 z-0">{background}</div>
    ) : (
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/40 to-vivid-purple/10 opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
    )}
    
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-3 p-8 transition-all duration-300 group-hover:-translate-y-10">
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        <Icon className="h-10 w-10 text-primary origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-105" />
      </div>
      <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors">
        {name}
      </h3>
      <p className="text-muted-foreground group-hover:text-white/80 transition-colors">{description}</p>
      
      {technologies && (
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="text-xs py-1 px-3 rounded-full bg-white/5 text-muted-foreground group-hover:bg-white/10 group-hover:text-white/90 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto text-white hover:text-white hover:bg-white/10">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-accent/5" />
  </div>
);

export { BentoCard, BentoGrid }; 