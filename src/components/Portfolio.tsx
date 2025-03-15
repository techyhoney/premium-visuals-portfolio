import { useRef, useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "Web Application",
    image: "bg-gradient-to-br from-violet-500/20 to-purple-700/20",
    description: "A comprehensive financial management platform with real-time analytics.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHJhd3Z5aWdjbjBrZThpaGw3NXR1dzJuejVqaW1pOGNzbXI0a2g5MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    challenges: "Creating intuitive data visualization components while ensuring real-time updates without performance degradation.",
    solutions: "Implemented optimized React components with memoization and leveraged WebSockets for efficient real-time data transfer.",
    outcome: "50% increase in user engagement and 30% reduction in analysis time for financial advisors using the platform."
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Shopify",
    image: "bg-gradient-to-br from-blue-500/20 to-cyan-600/20",
    description: "Custom Shopify solution with advanced product filtering and checkout.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTRrN3V6b2dzbzdqZ3NucGdkaGprOG1qemFmbmJnaGJoY2hrbmxqZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vn9QTgaRhQTF8QWIir/giphy.gif",
    techStack: ["Shopify Liquid", "JavaScript", "CSS", "Shopify APIs", "GraphQL"],
    challenges: "Building a custom filtering system that maintained performance with large inventory catalogs.",
    solutions: "Created a client-side filtering algorithm with intelligent caching and pagination to handle thousands of products efficiently.",
    outcome: "Conversion rate improved by 25% and average order value increased by 15% after implementation."
  },
  {
    id: 3,
    title: "AI Content Creator",
    category: "SaaS Platform",
    image: "bg-gradient-to-br from-emerald-500/20 to-green-600/20",
    description: "AI-powered platform for generating marketing content at scale.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanZwNnJkY3djbDJuYWYxYWV4MWl3NmE2dzhhdzYxczFnYnNuN2xzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif",
    techStack: ["Next.js", "Python", "OpenAI API", "AWS Lambda", "PostgreSQL"],
    challenges: "Balancing generation quality with response time while managing API costs at scale.",
    solutions: "Developed a hybrid caching system with pre-generation of common content types and intelligent request batching.",
    outcome: "Content creation time reduced by 85% for marketing teams while maintaining high quality and brand consistency."
  },
  {
    id: 4,
    title: "Healthcare Portal",
    category: "Web Application",
    image: "bg-gradient-to-br from-red-500/20 to-rose-600/20",
    description: "Patient management system with scheduling and telehealth features.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjN1emlibXU5Z2I4bjdvaHlnODNncmd5ajlycW41ejN4aWc2ODR3dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JmJMzYQvOGRTJnFnDw/giphy.gif",
    techStack: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "HIPAA Compliance Tools"],
    challenges: "Ensuring HIPAA compliance while creating a seamless telehealth experience with reliable video streaming.",
    solutions: "Implemented end-to-end encryption and secure data storage alongside optimized WebRTC connections for various network conditions.",
    outcome: "Enabled the clinic to serve 200% more patients during the pandemic with a 98% satisfaction rate for telehealth visits."
  },
  {
    id: 5,
    title: "Real Estate Marketplace",
    category: "No-Code Solution",
    image: "bg-gradient-to-br from-amber-500/20 to-yellow-600/20",
    description: "Property listing platform built with no-code tools and custom integrations.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHJ3dTYyNGl1bXQ2dTM0NjU1NmZ4MzBzNWVrcmR2ZWxvY2dodGRqYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlTU9KcSYkXmtyg/giphy.gif",
    techStack: ["Webflow", "Zapier", "Airtable", "Make.com", "Custom JavaScript"],
    challenges: "Creating advanced search functionality and integrating with MLS listings within no-code constraints.",
    solutions: "Developed custom JavaScript modules to enhance the no-code platform capabilities and built automated workflows for data synchronization.",
    outcome: "Reduced development costs by 70% while launching in 4 weeks instead of the original 3-month timeline."
  }
];

const Portfolio = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
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
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onViewCaseStudy={() => openModal(project)}
              />
            ))}
            
            {projects.map((project) => (
              <ProjectCard 
                key={`dup-${project.id}`} 
                project={project} 
                onViewCaseStudy={() => openModal(project)}
              />
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl p-0 bg-deep-purple/90 border border-white/10 overflow-hidden max-h-[90vh] w-[90%] sm:w-[85%]">
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col lg:flex-row w-full h-full overflow-auto"
              >
                <div className="lg:w-1/2 p-4 sm:p-6 flex items-center justify-center">
                  <div className="rounded-lg overflow-hidden border border-white/10 shadow-xl">
                    <img 
                      src={selectedProject.gifUrl} 
                      alt={`${selectedProject.title} preview`} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                <div className="lg:w-1/2 p-4 sm:p-6 lg:pl-0 flex flex-col h-full overflow-y-auto">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs text-accent">{selectedProject.category}</span>
                      <h3 className="text-2xl font-bold mt-1">{selectedProject.title}</h3>
                    </div>
                    <DialogClose className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/10">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </DialogClose>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Project Description</h4>
                      <p className="text-foreground">{selectedProject.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, index) => (
                          <span key={index} className="px-2 py-1 text-xs rounded-full bg-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Challenges</h4>
                      <p className="text-foreground">{selectedProject.challenges}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Solutions</h4>
                      <p className="text-foreground">{selectedProject.solutions}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Outcome</h4>
                      <p className="text-foreground">{selectedProject.outcome}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

type ProjectCardProps = {
  project: typeof projects[0];
  onViewCaseStudy: () => void;
};

const ProjectCard = ({ project, onViewCaseStudy }: ProjectCardProps) => {
  return (
    <div className="flex-none w-[320px] md:w-[420px]">
      <div 
        className={cn(
          "glass-card rounded-xl overflow-hidden h-[420px] md:h-[480px] flex flex-col",
          "transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(255,255,255,0.1)]"
        )}
      >
        <div 
          className={cn(
            "h-[220px] md:h-[260px] w-full relative overflow-hidden",
            project.image
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        <div className="flex flex-col flex-1 p-6">
          <span className="text-xs text-accent mb-2">{project.category}</span>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
          <button 
            onClick={onViewCaseStudy}
            className="mt-auto text-sm font-medium text-primary flex items-center hover:text-accent transition-colors"
          >
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
