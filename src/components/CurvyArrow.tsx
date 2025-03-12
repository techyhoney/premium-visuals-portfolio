
import { motion } from "framer-motion";

const CurvyArrow = () => {
  return (
    <motion.svg 
      width="50" 
      height="50" 
      viewBox="0 0 50 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -right-20 top-10"
      animate={{ 
        y: [0, -5, 0],
        opacity: [0.7, 1, 0.7]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <path 
        d="M30 40C20 37 15 25 25 20" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round"
        fill="none"
      />
      <path 
        d="M25 20L20 18" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M25 20L24 15" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default CurvyArrow;
