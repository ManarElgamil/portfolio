import { Project, Skill, Experience, Achievement } from '@/types';

export const personalInfo = {
  name: "Manar Elgamil",
  title: "Full Stack Developer",
  subtitle: "Building exceptional digital experiences",
  bio: "Passionate full-stack developer with expertise in modern web technologies. I love creating innovative solutions that make a difference.",
  email: "manar@example.com", // Update with actual email
  phone: "+1 (555) 123-4567", // Update with actual phone
  location: "Your Location", // Update with actual location
  resumeUrl: "/resume.pdf", // Add actual resume PDF
  social: {
    github: "https://github.com/ManarElgamil",
    linkedin: "https://linkedin.com/in/your-profile", // Update
    twitter: "https://twitter.com/your-handle", // Update
    website: "https://your-website.com" // Update
  }
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 5, category: "frontend", icon: "⚛️" },
  { name: "Next.js", level: 4, category: "frontend", icon: "▲" },
  { name: "TypeScript", level: 4, category: "frontend", icon: "🔷" },
  { name: "JavaScript", level: 5, category: "frontend", icon: "🟨" },
  { name: "HTML/CSS", level: 5, category: "frontend", icon: "🌐" },
  { name: "Tailwind CSS", level: 4, category: "frontend", icon: "🎨" },
  
  // Backend
  { name: "Node.js", level: 4, category: "backend", icon: "🟢" },
  { name: "Python", level: 4, category: "backend", icon: "🐍" },
  { name: "Express.js", level: 4, category: "backend", icon: "🚂" },
  { name: "Django", level: 3, category: "backend", icon: "🎸" },
  
  // Database
  { name: "MongoDB", level: 4, category: "database", icon: "🍃" },
  { name: "PostgreSQL", level: 4, category: "database", icon: "🐘" },
  { name: "MySQL", level: 3, category: "database", icon: "🗄️" },
  
  // DevOps
  { name: "Docker", level: 3, category: "devops", icon: "🐳" },
  { name: "AWS", level: 3, category: "devops", icon: "☁️" },
  { name: "Git", level: 5, category: "devops", icon: "📚" },
];

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and TypeScript",
    longDescription: "This portfolio website showcases my skills, projects, and experience. Built with Next.js, TypeScript, and Tailwind CSS, it features a modular architecture for easy content updates, interactive animations, and a contact form for client inquiries.",
    image: "/projects/portfolio.jpg", // Add actual image
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/ManarElgamil/portfolio",
    liveUrl: "https://your-portfolio.vercel.app", // Update with actual URL
    featured: true,
    category: "web"
  },
  // Add more projects here
];

export const experience: Experience[] = [
  {
    id: "current-role",
    company: "Your Company", // Update
    position: "Full Stack Developer",
    startDate: "2023-01",
    description: "Developing and maintaining web applications using modern technologies.",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
    achievements: [
      "Increased application performance by 40%",
      "Led team of 3 developers",
      "Implemented CI/CD pipeline"
    ]
  },
  // Add more experience
];

export const achievements: Achievement[] = [
  {
    id: "cert-1",
    title: "AWS Certified Developer",
    description: "Amazon Web Services Certified Developer - Associate",
    date: "2023-06",
    type: "certification",
    issuer: "Amazon Web Services",
    credentialUrl: "https://aws.amazon.com/certification/"
  },
  // Add more achievements
];