
import { motion } from "framer-motion";
import { useState } from "react";

// Tech stack type definition
type TechStack = {
  name: string;
  icon: string;
  color: string;
};

// Real tech stack brands with high-quality logos
const techStack: TechStack[] = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#ffffff" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", color: "#092E20" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", color: "#E535AB" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", color: "#4FC08D" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", color: "#DD0031" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
  { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", color: "#CC6699" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "#38B2AC" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "#FF9900" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#FFCA28" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", color: "#DC382D" },
];

// Duplicate stack for seamless infinite scrolling
const duplicatedStack = [...techStack, ...techStack, ...techStack];

export const TechStackScroll = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full overflow-hidden py-14">
      <div className="relative">
        {/* Enhanced subtle glow effects */}
        <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-accent/20 blur-[100px] -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-primary/20 blur-[100px] -translate-y-1/2"></div>
        
        {/* Primary row - scrolling left to right */}
        <motion.div
          className="flex gap-12 mb-12"
          animate={{ x: [0, -1 * techStack.length * 180] }}
          transition={{
            x: {
              duration: 70, // Increased duration for slower scroll
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <div
              key={`primary-${index}`}
              className="flex-shrink-0"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="glass-card flex flex-col items-center justify-center h-32 w-44 rounded-xl overflow-hidden relative"
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div className="mb-4 h-14 w-14 flex items-center justify-center">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="h-12 w-12 object-contain" 
                    style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.25))" }}
                  />
                </div>
                
                {/* Name */}
                <p className="text-sm font-medium text-white">{tech.name}</p>
                
                {/* Enhanced reflection effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent opacity-60"></div>
                <div className="absolute top-0 left-0 right-0 h-1/5 bg-gradient-to-b from-white/10 to-transparent opacity-30"></div>
                
                {/* Hover glow effect - enhanced */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.25 }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      background: `radial-gradient(circle at center, ${tech.color}80 0%, transparent 70%)`,
                      filter: "blur(10px)"
                    }}
                  />
                )}
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Secondary row - scrolling right to left */}
        <motion.div
          className="flex gap-12"
          animate={{ x: [-1 * techStack.length * 180, 0] }}
          transition={{
            x: {
              duration: 80, // Increased duration for slower scroll
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
        >
          {duplicatedStack.reverse().map((tech, index) => (
            <div
              key={`secondary-${index}`}
              className="flex-shrink-0"
              onMouseEnter={() => setHoveredIndex(index + duplicatedStack.length)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="glass-card flex flex-col items-center justify-center h-32 w-44 rounded-xl overflow-hidden relative"
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div className="mb-4 h-14 w-14 flex items-center justify-center">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="h-12 w-12 object-contain" 
                    style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.25))" }}
                  />
                </div>
                
                {/* Name */}
                <p className="text-sm font-medium text-white">{tech.name}</p>
                
                {/* Enhanced reflection effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent opacity-60"></div>
                <div className="absolute top-0 left-0 right-0 h-1/5 bg-gradient-to-b from-white/10 to-transparent opacity-30"></div>
                
                {/* Hover glow effect - enhanced */}
                {hoveredIndex === index + duplicatedStack.length && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.25 }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      background: `radial-gradient(circle at center, ${tech.color}80 0%, transparent 70%)`,
                      filter: "blur(10px)"
                    }}
                  />
                )}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
