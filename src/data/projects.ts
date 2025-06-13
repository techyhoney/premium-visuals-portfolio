export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[]; // Array of image URLs/paths for multiple images
  thumbnailImage?: string; // Main thumbnail for the card view
  gifUrl?: string; // Optional GIF for preview
  techStack: string[];
  challenges: string;
  solutions: string;
  outcome: string;
  projectUrl?: string; // Live project URL
  githubUrl?: string; // GitHub repository URL
  featured: boolean; // Whether to show in featured projects
}

export const projects: Project[] = [
  {
    id: 1,
    title: "LoanOptions.ai- Ai powered loan recommendation platform",
    category: "Web Application", 
    description: "LoanOptions.ai is an AI-powered loan recommendation platform that helps users find the best loan options based on their financial situation.",
    images: [
      "/images/projects/fintech/image.png",
      "/images/projects/fintech/analytics-view.jpg",
      "/images/projects/fintech/mobile-responsive.jpg"
    ],
    thumbnailImage: "/images/projects/fintech/image.png",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHJhd3Z5aWdjbjBrZThpaGw3NXR1dzJuejVqaW1pOGNzbXI0a2g5MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    challenges: "Creating intuitive data visualization components while ensuring real-time updates without performance degradation.",
    solutions: "Implemented optimized React components with memoization and leveraged WebSockets for efficient real-time data transfer.",
    outcome: "50% increase in user engagement and 30% reduction in analysis time for financial advisors using the platform.",
    projectUrl: "https://fintech-dashboard.example.com",
    githubUrl: "https://github.com/username/fintech-dashboard",
    featured: true
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Shopify",
    description: "Custom Shopify solution with advanced product filtering and checkout.",
    images: [
      "/images/projects/ecommerce/ecommerce.png",
      "/images/projects/ecommerce/product-page.jpg",
      "/images/projects/ecommerce/checkout-flow.jpg",
      "/images/projects/ecommerce/admin-dashboard.jpg"
    ],
    thumbnailImage: "/images/projects/ecommerce/ecommerce.png",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTRrN3V6b2dzbzdqZ3NucGdkaGprOG1qemFmbmJnaGJoY2hrbmxqZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vn9QTgaRhQTF8QWIir/giphy.gif",
    techStack: ["Shopify Liquid", "JavaScript", "CSS", "Shopify APIs", "GraphQL"],
    challenges: "Building a custom filtering system that maintained performance with large inventory catalogs.",
    solutions: "Created a client-side filtering algorithm with intelligent caching and pagination to handle thousands of products efficiently.",
    outcome: "Conversion rate improved by 25% and average order value increased by 15% after implementation.",
    projectUrl: "https://ecommerce-store.example.com",
    featured: true
  },

  {
    id: 3,
    title: "MediCare- Healthcare Portal",
    category: "Web Application",
    description: "MediCare is a healthcare portal that allows users to manage their health and schedule appointments with doctors.",
    images: [
      "/images/projects/healthcare/image.png",
      "/images/projects/healthcare/scheduling.jpg",
      "/images/projects/healthcare/telehealth-interface.jpg"
    ],
    thumbnailImage: "/images/projects/healthcare/image.png",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjN1emlibXU5Z2I4bjdvaHlnODNncmd5ajlycW41ejN4aWc2ODR3dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JmJMzYQvOGRTJnFnDw/giphy.gif",
    techStack: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "HIPAA Compliance Tools"],
    challenges: "Ensuring HIPAA compliance while creating a seamless telehealth experience with reliable video streaming.",
    solutions: "Implemented end-to-end encryption and secure data storage alongside optimized WebRTC connections for various network conditions.",
    outcome: "Enabled the clinic to serve 200% more patients during the pandemic with a 98% satisfaction rate for telehealth visits.",
    featured: true
  },
  {
    id: 5,
    title: "Real Estate Marketplace",
    category: "No-Code Solution",
    description: "Property listing platform built with no-code tools and custom integrations.",
    images: [
      "/images/projects/real-estate/image.png",
      "/images/projects/real-estate/property-details.jpg",
      "/images/projects/real-estate/search-filters.jpg"
    ],
    thumbnailImage: "/images/projects/real-estate/image.png",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHJ3dTYyNGl1bXQ2dTM0NjU1NmZ4MzBzNWVrcmR2ZWxvY2dodGRqYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlTU9KcSYkXmtyg/giphy.gif",
    techStack: ["Webflow", "Zapier", "Airtable", "Make.com", "Custom JavaScript"],
    challenges: "Creating advanced search functionality and integrating with MLS listings within no-code constraints.",
    solutions: "Developed custom JavaScript modules to enhance the no-code platform capabilities and built automated workflows for data synchronization.",
    outcome: "Reduced development costs by 70% while launching in 4 weeks instead of the original 3-month timeline.",
    projectUrl: "https://real-estate-marketplace.example.com",
    featured: true
  },

  {
    id: 6,
    title: "Tailor Track- Order Management System",
    category: "Web Application",
    description: "Order management system for a tailor shop. It allows the tailor to manage their orders and customers.",
    images: [
      "/images/projects/order-management/SCR-20250529-jxve.png",
      "/images/projects/real-estate/property-details.jpg",
      "/images/projects/real-estate/search-filters.jpg"
    ],
    thumbnailImage: "/images/projects/order-management/SCR-20250529-jxve.png",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHJ3dTYyNGl1bXQ2dTM0NjU1NmZ4MzBzNWVrcmR2ZWxvY2dodGRqYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlTU9KcSYkXmtyg/giphy.gif",
    techStack: ["Webflow", "Zapier", "Airtable", "Make.com", "Custom JavaScript"],
    challenges: "Creating advanced search functionality and integrating with MLS listings within no-code constraints.",
    solutions: "Developed custom JavaScript modules to enhance the no-code platform capabilities and built automated workflows for data synchronization.",
    outcome: "Reduced development costs by 70% while launching in 4 weeks instead of the original 3-month timeline.",
    projectUrl: "https://real-estate-marketplace.example.com",
    featured: true
  },
  {
    id: 7,
    title: "Course Selling Platform",
    category: "Web Application",
    description: "Course selling platform for a course creator. It allows the course creator to sell their courses to their customers.",
    images: [
      "/images/projects/lms/lms.png",
      "/images/projects/real-estate/property-details.jpg",
      "/images/projects/real-estate/search-filters.jpg"
    ],
    thumbnailImage: "/images/projects/lms/lms.png",
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHJ3dTYyNGl1bXQ2dTM0NjU1NmZ4MzBzNWVrcmR2ZWxvY2dodGRqYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlTU9KcSYkXmtyg/giphy.gif",
    techStack: ["Webflow", "Zapier", "Airtable", "Make.com", "Custom JavaScript"],
    challenges: "Creating advanced search functionality and integrating with MLS listings within no-code constraints.",
    solutions: "Developed custom JavaScript modules to enhance the no-code platform capabilities and built automated workflows for data synchronization.",
    outcome: "Reduced development costs by 70% while launching in 4 weeks instead of the original 3-month timeline.",
    projectUrl: "https://real-estate-marketplace.example.com",
    featured: true
  }

];

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category.toLowerCase() === category.toLowerCase());
};

// Helper function to get project by ID
export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
}; 