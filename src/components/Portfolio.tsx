import { useRef, useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";

const Portfolio = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
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
        <DialogContent className="max-w-6xl p-0 bg-card border border-white/10 overflow-hidden max-h-[90vh]">
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col lg:flex-row w-full h-full overflow-auto"
              >
                {/* Left side - Image display with navigation */}
                <div className="lg:w-1/2 p-6 flex flex-col">
                  <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-xl mb-4">
                    <img 
                      src={selectedProject.images[currentImageIndex]} 
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        // Fallback to gradient background if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.className += ' bg-gradient-to-br from-violet-500/20 to-purple-700/20 h-64 flex items-center justify-center';
                          parent.innerHTML = '<span class="text-white/50">Project Image</span>';
                        }
                      }}
                    />
                    
                    {/* Image navigation arrows */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Image indicators */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex justify-center gap-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={cn(
                            "w-2 h-2 rounded-full transition-colors",
                            index === currentImageIndex ? "bg-accent" : "bg-white/30"
                          )}
                        />
                      ))}
                    </div>
                  )}
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
  return (
    <div className="flex-none w-[320px] md:w-[420px]">
      <div 
        className={cn(
          "glass-card rounded-xl overflow-hidden h-[420px] md:h-[480px] flex flex-col",
          "transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(255,255,255,0.1)]"
        )}
      >
        <div className="h-[220px] md:h-[260px] w-full relative overflow-hidden">
          {project.thumbnailImage ? (
            <img 
              src={project.thumbnailImage} 
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to gradient background if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.className += ' bg-gradient-to-br from-violet-500/20 to-purple-700/20 flex items-center justify-center';
                  parent.innerHTML = '<span class="text-white/50">Project Image</span>';
                }
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-violet-500/20 to-purple-700/20 flex items-center justify-center">
              <span className="text-white/50">Project Image</span>
            </div>
          )}
          {/* Add reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        <div className="flex flex-col flex-1 p-6">
          <span className="text-xs text-accent mb-2">{project.category}</span>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
          {/* View Case Study button commented out as requested
          <button 
            onClick={onViewCaseStudy}
            className="mt-auto text-sm font-medium text-primary flex items-center hover:text-accent transition-colors"
          >
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
