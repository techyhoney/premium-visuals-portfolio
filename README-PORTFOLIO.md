# Portfolio Management Guide

This guide explains how to add, edit, or remove projects from the portfolio section of the website.

## Project Data Structure

All project data is stored in the `src/data/portfolioData.ts` file. Each project has the following structure:

```typescript
{
  id: number;              // Unique identifier for the project
  title: string;           // Project title
  category: string;        // Category (e.g., "Web Application", "Shopify", "SaaS Platform")
  image: string;           // Tailwind CSS gradient background class (used as fallback)
  staticImageUrl: string;  // URL to static image (shown when not hovering)
  description: string;     // Short project description
  gifUrl: string;          // URL to GIF that plays on hover
  techStack: string[];     // Array of technologies used
  challenges: string;      // Description of project challenges
  solutions: string;       // Description of solutions implemented
  outcome: string;         // Description of project outcomes/results
}
```

## How to Add a New Project

### Method 1: Edit the File Directly

1. Open `src/data/portfolioData.ts`
2. Add a new project object to the `projects` array
3. Make sure to give it a unique `id` (typically increment the highest existing ID by 1)

Example:

```typescript
{
  id: 6,
  title: "Mobile Fitness App",
  category: "Mobile Application",
  image: "bg-gradient-to-br from-pink-500/20 to-purple-600/20",
  staticImageUrl: "https://via.placeholder.com/420x260/EC4899/FFFFFF?text=Fitness+App",
  description: "A comprehensive fitness tracking application with personalized workout plans.",
  gifUrl: "https://media.giphy.com/your-gif-url-here.gif",
  techStack: ["React Native", "TypeScript", "Firebase", "Redux"],
  challenges: "Creating a seamless offline experience while maintaining data synchronization.",
  solutions: "Implemented robust local storage with background sync capabilities.",
  outcome: "Achieved 100,000+ downloads with a 4.8-star average rating across app stores."
}
```

### Method 2: Use the Helper Function

You can also use the `addProject` helper function in your code:

```typescript
import { addProject } from '@/data/portfolioData';

// Add a new project
const newProject = addProject({
  title: "Mobile Fitness App",
  category: "Mobile Application",
  image: "bg-gradient-to-br from-pink-500/20 to-purple-600/20",
  staticImageUrl: "https://via.placeholder.com/420x260/EC4899/FFFFFF?text=Fitness+App",
  description: "A comprehensive fitness tracking application with personalized workout plans.",
  gifUrl: "https://media.giphy.com/your-gif-url-here.gif",
  techStack: ["React Native", "TypeScript", "Firebase", "Redux"],
  challenges: "Creating a seamless offline experience while maintaining data synchronization.",
  solutions: "Implemented robust local storage with background sync capabilities.",
  outcome: "Achieved 100,000+ downloads with a 4.8-star average rating across app stores."
});

console.log('Added new project with ID:', newProject.id);
```

## Tips for Project Images and GIFs

### Static Images

For static images, you can use:
- Placeholder services like `https://via.placeholder.com/` (as shown in examples)
- Your own hosted images
- Image hosting services

### GIFs

For GIFs, consider:
- Using Giphy or other GIF hosting services
- Keeping GIFs under 2MB for better performance
- Using compressed GIFs with reasonable dimensions (around 420x260px)
- Making sure GIFs clearly demonstrate the project functionality

### Background Gradients

The `image` property uses Tailwind CSS gradient classes as a fallback. You can customize these gradients by using Tailwind's gradient utilities:

```
bg-gradient-to-br from-[color]/20 to-[color]/20
```

Where:
- `gradient-to-br` means the gradient goes from top-left to bottom-right
- `from-[color]/20` sets the starting color with 20% opacity
- `to-[color]/20` sets the ending color with 20% opacity

## Editing or Removing Projects

To edit a project, simply update its properties in the `projects` array.

To remove a project, delete its object from the `projects` array or filter it out:

```typescript
// Remove a project with ID 3
const updatedProjects = projects.filter(project => project.id !== 3);
```

## Hover-to-Play GIF Feature

The portfolio includes a feature where GIFs only play when hovering over a project card. This:
- Improves performance by not playing all GIFs simultaneously
- Creates a more interactive user experience
- Reduces visual distraction

The GIFs are preloaded in the background for a smooth transition when hovering. 