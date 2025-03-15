"use client";

import { ReactNode } from "react";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface CosmicCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  technologies?: string[];
  cta?: string;
  href?: string;
  className?: string;
}

export function CosmicCard({
  title,
  description,
  icon,
  technologies,
  cta = "Learn more",
  href = "#",
  className,
}: CosmicCardProps) {
  return (
    <div
      className={cn(
        "group relative h-full rounded-xl overflow-hidden",
        "glass-card border border-white/10 backdrop-blur-xl transition-all duration-300",
        className
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
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/40 to-vivid-purple/10 opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
      
      <div className="relative z-10 flex flex-col h-full p-6">
        <div className="flex-1">
          <div className="relative mb-4 w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative text-primary group-hover:scale-105 transition-transform duration-300">
              {icon}
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground group-hover:text-white/80 transition-colors">
            {description}
          </p>
          
          {technologies && (
            <div className="flex flex-wrap gap-2 mt-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs py-1 px-3 rounded-full bg-white/5 text-muted-foreground group-hover:bg-white/10 group-hover:text-white/90 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {cta && (
          <div className="mt-6 pt-4 border-t border-white/10">
            <Button
              variant="ghost"
              asChild
              size="sm"
              className="text-white hover:text-white hover:bg-white/10 p-0"
            >
              <a href={href}>
                {cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
} 