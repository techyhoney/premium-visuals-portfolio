export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  staticImageUrl: string;
  description: string;
  gifUrl: string;
  techStack: string[];
  challenges: string;
  solutions: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "Web Application",
    image: "bg-gradient-to-br from-violet-500/20 to-purple-700/20",
    staticImageUrl: "https://via.placeholder.com/420x260/8B5CF6/FFFFFF?text=Fintech+Dashboard",
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
    staticImageUrl: "https://via.placeholder.com/420x260/0EA5E9/FFFFFF?text=E-commerce+Platform",
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
    staticImageUrl: "https://via.placeholder.com/420x260/10B981/FFFFFF?text=AI+Content+Creator",
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
    staticImageUrl: "https://via.placeholder.com/420x260/F43F5E/FFFFFF?text=Healthcare+Portal",
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
    staticImageUrl: "https://via.placeholder.com/420x260/F59E0B/FFFFFF?text=Real+Estate+Marketplace",
    description: "Property listing platform built with no-code tools and custom integrations.",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHJ3dTYyNGl1bXQ2dTM0NjU1NmZ4MzBzNWVrcmR2ZWxvY2dodGRqYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlTU9KcSYkXmtyg/giphy.gif",
    techStack: ["Webflow", "Zapier", "Airtable", "Make.com", "Custom JavaScript"],
    challenges: "Creating advanced search functionality and integrating with MLS listings within no-code constraints.",
    solutions: "Developed custom JavaScript modules to enhance the no-code platform capabilities and built automated workflows for data synchronization.",
    outcome: "Reduced development costs by 70% while launching in 4 weeks instead of the original 3-month timeline."
  }
];

// Helper function to add a new project
export const addProject = (project: Omit<Project, 'id'>): Project => {
  const newId = Math.max(0, ...projects.map(p => p.id)) + 1;
  const newProject = { ...project, id: newId };
  projects.push(newProject);
  return newProject;
}; 