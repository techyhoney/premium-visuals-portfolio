
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Code, Database, Server, Github, Figma, 
  Chrome, Globe, Monitor, Cpu, Layers
} from "lucide-react";

type TechIcon = {
  icon: React.ReactNode;
  name: string;
  color: string;
};

const techIcons: TechIcon[] = [
  { icon: <Code size={28} />, name: "React", color: "#61DAFB" },
  { icon: <Globe size={28} />, name: "Next.js", color: "#FFFFFF" },
  { icon: <Code size={28} />, name: "TypeScript", color: "#3178C6" },
  { icon: <Database size={28} />, name: "PostgreSQL", color: "#336791" },
  { icon: <Server size={28} />, name: "Node.js", color: "#8CC84B" },
  { icon: <Github size={28} />, name: "GitHub", color: "#FFFFFF" },
  { icon: <Figma size={28} />, name: "Figma", color: "#F24E1E" },
  { icon: <Code size={28} />, name: "GraphQL", color: "#E535AB" },
  { icon: <Chrome size={28} />, name: "PWA", color: "#5A0FC8" },
  { icon: <Layers size={28} />, name: "Tailwind", color: "#38B2AC" },
  { icon: <Monitor size={28} />, name: "Responsive", color: "#FF6B6B" },
  { icon: <Cpu size={28} />, name: "AI Tools", color: "#FF9F1C" },
];

// Duplicate icons to ensure smooth looping
const duplicatedIcons = [...techIcons, ...techIcons];

export const TechStackScroll = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4 overflow-hidden">
      <div className="relative">
        {/* Primary row - scrolling left to right */}
        <motion.div
          className="flex gap-8 mb-8"
          animate={{ x: [0, -2000] }}
          transition={{
            x: {
              duration: 50,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
        >
          {duplicatedIcons.map((tech, index) => (
            <div
              key={`primary-${index}`}
              className="relative flex-shrink-0"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="glass-card flex flex-col items-center justify-center h-24 w-32 rounded-xl overflow-hidden relative"
                animate={hoveredIndex === index ? { y: -5, scale: 1.05 } : { y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div 
                  className="mb-2 text-white"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
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

        {/* Secondary row - scrolling right to left (for visual interest) */}
        <motion.div
          className="flex gap-8"
          animate={{ x: [-2000, 0] }}
          transition={{
            x: {
              duration: 60, // Slightly slower than the primary row
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
        >
          {duplicatedIcons.reverse().map((tech, index) => (
            <div
              key={`secondary-${index}`}
              className="relative flex-shrink-0"
              onMouseEnter={() => setHoveredIndex(index + duplicatedIcons.length)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="glass-card flex flex-col items-center justify-center h-24 w-32 rounded-xl overflow-hidden relative"
                animate={hoveredIndex === index + duplicatedIcons.length ? { y: -5, scale: 1.05 } : { y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div 
                  className="mb-2 text-white"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>
                
                {/* Name */}
                <p className="text-sm font-medium text-white">{tech.name}</p>
                
                {/* Reflection effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white/10 to-transparent opacity-50"></div>
                
                {/* Hover glow effect */}
                {hoveredIndex === index + duplicatedIcons.length && (
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
