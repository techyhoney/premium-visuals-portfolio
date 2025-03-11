
import { motion } from "framer-motion";
import { useState } from "react";

// Tech stack type definition
type TechStack = {
  name: string;
  icon: string;
  color: string;
};

// Real tech stack brands with their logos
const techStack: TechStack[] = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#ffffff" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", color: "#092E20" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "#38B2AC" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", color: "#E535AB" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "#FF9900" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
];

// Duplicate stack for seamless infinite scrolling
const duplicatedStack = [...techStack, ...techStack, ...techStack];

export const TechStackScroll = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full overflow-hidden py-12">
      <div className="relative max-w-screen-2xl mx-auto">
        {/* Primary row - scrolling left to right */}
        <motion.div
          className="flex gap-12 mb-10"
          animate={{ x: [0, -1 * techStack.length * 150] }}
          transition={{
            x: {
              duration: 30,
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
                className="glass-card flex flex-col items-center justify-center h-28 w-40 rounded-xl overflow-hidden relative"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div className="mb-3 h-12 w-12 flex items-center justify-center">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="h-10 w-10 object-contain" 
                    style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.2))" }}
                  />
                </div>
                
                {/* Name */}
                <p className="text-sm font-medium text-white">{tech.name}</p>
                
                {/* Reflection effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white/10 to-transparent opacity-50"></div>
                
                {/* Hover glow effect */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      background: `radial-gradient(circle at center, ${tech.color}66 0%, transparent 70%)`,
                      filter: "blur(8px)"
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
          animate={{ x: [-1 * techStack.length * 150, 0] }}
          transition={{
            x: {
              duration: 35,
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
                className="glass-card flex flex-col items-center justify-center h-28 w-40 rounded-xl overflow-hidden relative"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div className="mb-3 h-12 w-12 flex items-center justify-center">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="h-10 w-10 object-contain" 
                    style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.2))" }}
                  />
                </div>
                
                {/* Name */}
                <p className="text-sm font-medium text-white">{tech.name}</p>
                
                {/* Reflection effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white/10 to-transparent opacity-50"></div>
                
                {/* Hover glow effect */}
                {hoveredIndex === index + duplicatedStack.length && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      background: `radial-gradient(circle at center, ${tech.color}66 0%, transparent 70%)`,
                      filter: "blur(8px)"
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
