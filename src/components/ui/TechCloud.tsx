
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

const TechIcon = ({ name, size = 40, className }: TechIconProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center px-4 py-2 m-2 glass-card rounded-lg transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 cursor-pointer",
        className
      )}
      style={{ width: size * 2.5, height: size * 1.5 }}
    >
      <span className="text-sm font-medium whitespace-nowrap">{name}</span>
      <div className="absolute bottom-0 left-1/2 w-4/5 h-[1px] bg-white/10 -translate-x-1/2 blur-[1px] opacity-70 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

interface TechCloudProps {
  technologies: string[];
  className?: string;
}

const TechCloud = ({ technologies, className }: TechCloudProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [items, setItems] = useState<Array<{ x: number; y: number; z: number; name: string; }>>([]);
  
  // Set container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  
  // Initialize tech items with random positions
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;
    
    const newItems = technologies.map((tech) => {
      const radius = Math.min(dimensions.width, dimensions.height) * 0.35;
      const theta = Math.random() * Math.PI * 2; // Random angle
      const phi = Math.random() * Math.PI; // Random angle
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      return { x, y, z, name: tech };
    });
    
    setItems(newItems);
  }, [technologies, dimensions]);
  
  // Animate the cloud
  useEffect(() => {
    if (items.length === 0) return;
    
    let animationId: number;
    const speed = 0.001;
    
    const animate = () => {
      setItems(prevItems => {
        return prevItems.map(item => {
          // Rotate around Y axis
          const cosY = Math.cos(speed);
          const sinY = Math.sin(speed);
          
          const newX = item.x * cosY - item.z * sinY;
          const newZ = item.x * sinY + item.z * cosY;
          
          return {
            ...item,
            x: newX,
            z: newZ,
          };
        });
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [items.length]);
  
  return (
    <div 
      ref={containerRef} 
      className={cn("relative w-full h-[400px] flex items-center justify-center perspective-[1000px]", className)}
    >
      <div className="relative w-full h-full transform-style-3d">
        {items.map((item, index) => {
          // Scale based on z position for perspective effect
          const scale = (item.z + dimensions.width * 0.5) / (dimensions.width * 0.5);
          const opacity = 0.5 + 0.5 * (item.z / (dimensions.width * 0.5));
          
          return (
            <div
              key={index}
              className="absolute transition-transform duration-100 ease-linear"
              style={{
                transform: `translate3d(${item.x}px, ${item.y}px, ${item.z}px)`,
                opacity: Math.max(0.4, Math.min(1, opacity)),
                zIndex: Math.round((item.z + dimensions.width * 0.5) * 100),
              }}
            >
              <TechIcon 
                name={item.name} 
                size={40 * Math.max(0.6, Math.min(1.2, scale))}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechCloud;
