
import { useRef } from 'react';
import { cn } from "@/lib/utils";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Working with this agency has been transformative for our business. The team delivered a beautifully designed platform that exceeded our expectations and has significantly increased our conversions.",
    rating: 5,
    image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
  },
  {
    name: "David Chen",
    role: "Marketing Director, GrowthHQ",
    content: "The attention to detail and commitment to quality really sets this team apart. Our website not only looks stunning but performs exceptionally well, leading to a 40% increase in engagement.",
    rating: 5,
    image: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20"
  },
  {
    name: "Maya Patel",
    role: "Founder, StyleBox",
    content: "As a Shopify-based business, we needed specialized expertise. This agency delivered a custom theme that perfectly represents our brand and has significantly improved our customer experience.",
    rating: 5,
    image: "bg-gradient-to-br from-rose-500/20 to-pink-500/20"
  },
  {
    name: "Thomas Wright",
    role: "CTO, DataSphere",
    content: "The AI integration capabilities of this team are outstanding. They built us a sophisticated system that automates our workflow and has saved us countless hours of manual work.",
    rating: 5,
    image: "bg-gradient-to-br from-amber-500/20 to-orange-500/20"
  },
  {
    name: "Elena Rodriguez",
    role: "Product Manager, InnovateCo",
    content: "From the first discovery call to the final launch, the process was smooth and transparent. The team is responsive, collaborative, and delivered our complex project on time and on budget.",
    rating: 5,
    image: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20"
  }
];

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = direction === 'left' ? -400 : 400;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };
  
  return (
    <section id="testimonials" className="section-spacing relative">
      <div className="max-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-sm text-accent">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">What Clients Say</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Hear from our clients about their experience working with us and the results we've delivered.
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full glass-button flex items-center justify-center"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full glass-button flex items-center justify-center"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-scroll scrollbar-none pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 px-4 md:px-0 md:ml-[calc((100vw-1280px)/2)]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="flex-none w-[300px] md:w-[400px]">
      <div 
        className={cn(
          "glass-card p-8 rounded-xl h-full flex flex-col",
          "transition-all duration-300 hover:translate-y-[-5px]"
        )}
      >
        <div className="flex items-center mb-4">
          <div className={cn(
            "w-12 h-12 rounded-full overflow-hidden mr-4",
            testimonial.image
          )}>
            {/* Placeholder for client image */}
          </div>
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
        
        <div className="flex mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
          ))}
        </div>
        
        <p className="text-muted-foreground italic">"{testimonial.content}"</p>
      </div>
    </div>
  );
};

export default Testimonials;
