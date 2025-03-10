
import { useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "Web Application",
    image: "bg-gradient-to-br from-violet-500/20 to-purple-700/20",
    description: "A comprehensive financial management platform with real-time analytics."
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Shopify",
    image: "bg-gradient-to-br from-blue-500/20 to-cyan-600/20",
    description: "Custom Shopify solution with advanced product filtering and checkout."
  },
  {
    id: 3,
    title: "AI Content Creator",
    category: "SaaS Platform",
    image: "bg-gradient-to-br from-emerald-500/20 to-green-600/20",
    description: "AI-powered platform for generating marketing content at scale."
  },
  {
    id: 4,
    title: "Healthcare Portal",
    category: "Web Application",
    image: "bg-gradient-to-br from-red-500/20 to-rose-600/20",
    description: "Patient management system with scheduling and telehealth features."
  },
  {
    id: 5,
    title: "Real Estate Marketplace",
    category: "No-Code Solution",
    image: "bg-gradient-to-br from-amber-500/20 to-yellow-600/20",
    description: "Property listing platform built with no-code tools and custom integrations."
  }
];

const Portfolio = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };
    
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };
    
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      cancelAnimationFrame(animationId);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  return (
    <section id="portfolio" className="section-spacing relative overflow-hidden">
      <div className="max-container mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-sm text-accent">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Explore our portfolio of successful projects delivered with exceptional quality and attention to detail.
            </p>
          </div>
          <Button className="glass-button self-start md:self-end">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-scroll scrollbar-none pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 px-4 md:px-0 md:ml-[calc((100vw-1280px)/2)]">
            {/* First set of projects */}
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            
            {/* Duplicate projects for infinite scroll */}
            {projects.map((project) => (
              <ProjectCard key={`dup-${project.id}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="flex-none w-[280px] md:w-[380px]">
      <div 
        className={cn(
          "glass-card rounded-xl overflow-hidden h-[400px] md:h-[450px] flex flex-col",
          "transition-all duration-300 hover:translate-y-[-5px]"
        )}
      >
        <div 
          className={cn(
            "h-[200px] md:h-[250px] w-full",
            project.image
          )}
        ></div>
        <div className="flex flex-col flex-1 p-6">
          <span className="text-xs text-accent mb-2">{project.category}</span>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
          <a href="#" className="mt-auto text-sm font-medium text-primary flex items-center">
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
