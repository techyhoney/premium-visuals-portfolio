import { useRef, useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/portfolioData";

const Portfolio = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

  const openModal = (project: Project) => {
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
            {/* First set of projects */}
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onViewCaseStudy={() => openModal(project)}
              />
            ))}
            
            {/* Duplicate projects for infinite scroll */}
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

      {/* Case Study Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl p-0 bg-card border border-white/10 overflow-hidden max-h-[90vh]">
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col lg:flex-row w-full h-full overflow-auto"
              >
                {/* Left side - GIF display */}
                <div className="lg:w-1/2 p-6 flex items-center justify-center">
                  <div className="rounded-lg overflow-hidden border border-white/10 shadow-xl">
                    <img 
                      src={selectedProject.gifUrl} 
                      alt={`${selectedProject.title} preview`} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Right side - Case study details */}
                <div className="lg:w-1/2 p-6 lg:pl-0 flex flex-col h-full overflow-y-auto">
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
                  
                  <div className="space-y-6">
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
                  
                  <div className="mt-auto pt-6">
                    <Button variant="default" className="w-full">
                      See Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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
  project: Project;
  onViewCaseStudy: () => void;
};

const ProjectCard = ({ project, onViewCaseStudy }: ProjectCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [imageUrl, setImageUrl] = useState(project.staticImageUrl);
  const [isGifLoaded, setIsGifLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Preload the GIF when component mounts
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = project.gifUrl;
    preloadImage.onload = () => {
      setIsGifLoaded(true);
    };
  }, [project.gifUrl]);
  
  // Handle hover state to control GIF playback with smooth transition
  useEffect(() => {
    if (isHovering && isGifLoaded) {
      setIsTransitioning(true);
      // Short delay before changing the image to allow for fade transition
      const timer = setTimeout(() => {
        setImageUrl(project.gifUrl);
        setIsTransitioning(false);
      }, 150);
      return () => clearTimeout(timer);
    } else if (!isHovering) {
      setIsTransitioning(true);
      // Short delay before changing back to static image
      const timer = setTimeout(() => {
        setImageUrl(project.staticImageUrl);
        setIsTransitioning(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isHovering, isGifLoaded, project.gifUrl, project.staticImageUrl]);

  return (
    <div className="flex-none w-[320px] md:w-[420px]">
      <div 
        className={cn(
          "glass-card rounded-xl overflow-hidden h-[420px] md:h-[480px] flex flex-col",
          "transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(255,255,255,0.1)]"
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div 
          className={cn(
            "h-[220px] md:h-[260px] w-full relative overflow-hidden",
            !imageUrl && project.image
          )}
        >
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={project.title}
              className={cn(
                "w-full h-full object-cover",
                isTransitioning ? "opacity-50 transition-opacity duration-300" : "opacity-100 transition-opacity duration-300"
              )}
              loading="lazy"
            />
          )}
          
          {/* Add reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/40 to-transparent"></div>
          
          {/* Play indicator that appears when hovering and GIF is loaded */}
          {isHovering && isGifLoaded && (
            <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-80 animate-fade-in">
              GIF Playing
            </div>
          )}
          
          {/* Loading indicator if GIF isn't loaded yet */}
          {isHovering && !isGifLoaded && (
            <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-80 animate-pulse">
              Loading GIF...
            </div>
          )}
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
