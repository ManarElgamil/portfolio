import { Project, Skill, Experience, Achievement } from '@/types';

export const personalInfo = {
  name: "Manar Elgamil",
  title: "Cloud and Application Specialist",
  subtitle: "Designing secure, automated, and business-aligned solutions",
  bio: "Passionate Cloud and Application Specialist with expertise in AWS, serverless architectures, and full-stack development. I design and deliver production-ready systems that drive business value and operational efficiency.",
  email: "gamilmanar15@gmail.com", // Update with actual email
  phone: "+1 (902) 412-6836", // Update with actual phone
  location: "Bedford, NS, Canada", // Update with actual location
  resumeUrl: "/manar_resume_updated.pdf", // Resume PDF
  social: {
    github: "https://github.com/ManarElgamil",
    linkedin: "https://www.linkedin.com/in/manar-elgamil-83099222a/", // Update
    twitter: "https://x.com/ManarMo67071549", // Update
    website: "https://manar-elgamil.dev" // Update
  }
};

export const skills: Skill[] = [
  // Cloud & DevOps
  { name: "AWS", level: 5, category: "devops", icon: "☁️" },
  { name: "AWS Lambda", level: 5, category: "devops", icon: "⚡" },
  { name: "AWS S3", level: 5, category: "devops", icon: "🪣" },
  { name: "AWS Step Functions", level: 4, category: "devops", icon: "🔄" },
  { name: "Amazon API Gateway", level: 4, category: "devops", icon: "🚪" },
  { name: "Amazon SNS", level: 4, category: "devops", icon: "📢" },
  { name: "Amazon Rekognition", level: 4, category: "devops", icon: "👁️" },
  { name: "Amazon VPC", level: 4, category: "devops", icon: "🌐" },
  { name: "AWS EC2", level: 4, category: "devops", icon: "💻" },
  { name: "Docker", level: 5, category: "devops", icon: "🐳" },
  { name: "GitHub Actions", level: 4, category: "devops", icon: "🔄" },
  { name: "Azure", level: 3, category: "devops", icon: "🔵" },
  { name: "GitOps", level: 4, category: "devops", icon: "📚" },
  
  // Backend & APIs
  { name: "Python", level: 5, category: "backend", icon: "🐍" },
  { name: "Flask", level: 4, category: "backend", icon: "🌶️" },
  { name: "boto3", level: 4, category: "backend", icon: "🐍" },
  { name: "Node.js", level: 4, category: "backend", icon: "🟢" },
  { name: "Express.js", level: 4, category: "backend", icon: "🚂" },
  { name: "Microsoft Graph API", level: 4, category: "backend", icon: "🔗" },
  { name: "REST APIs", level: 5, category: "backend", icon: "🔗" },
  
  // Database
  { name: "DynamoDB", level: 5, category: "database", icon: "⚡" },
  { name: "Oracle EBS", level: 4, category: "database", icon: "🗄️" },
  { name: "Amazon Aurora", level: 4, category: "database", icon: "🗄️" },
  { name: "SQL", level: 5, category: "database", icon: "📊" },
  { name: "PL/SQL", level: 4, category: "database", icon: "🔧" },
  { name: "MongoDB", level: 3, category: "database", icon: "🍃" },
  
  // Frontend
  { name: "React", level: 4, category: "frontend", icon: "⚛️" },
  { name: "Streamlit", level: 4, category: "frontend", icon: "📊" },
  { name: "JavaScript", level: 4, category: "frontend", icon: "🟨" },
  { name: "HTML/CSS", level: 4, category: "frontend", icon: "🌐" },
  { name: "Tailwind CSS", level: 3, category: "frontend", icon: "🎨" },
  
  // Data & ML
  { name: "Machine Learning", level: 3, category: "data", icon: "🤖" },
  { name: "Natural Language Processing", level: 3, category: "data", icon: "💬" },
  { name: "Data Analysis", level: 4, category: "data", icon: "📈" },
];

export const projects: Project[] = [
  {
    id: "image-processing-app",
    title: "Image Processing Application",
    description: "Serverless image processing application using AWS Rekognition with microservice architecture",
    longDescription: "Implemented a serverless image processing application using AWS Rekognition to analyze images instantaneously. The system automatically notifies users upon completion using Amazon SNS, increasing team efficiency by 20%. Features comprehensive security analysis with IAM permissions and principle of least privilege.",
    image: "/images/image-processing.png", //why is this not working?
    technologies: ["AWS S3", "AWS Lambda", "AWS Step Functions", "Amazon API Gateway", "Amazon SNS", "Amazon Rekognition", "Python", "boto3", "JSON", "REST APIs"],
    githubUrl: "https://github.com/ManarElgamil/Image-Processing-Application",
    liveUrl: "https://www.youtube.com/watch?v=p056SV1m-cA",
    featured: true,
    category: "backend"
  },
  {
    id: "secure-application",
    title: "Secure Web Application",
    description: "AWS-deployed web application with VPC security and high availability",
    longDescription: "Designed and deployed a secure web application on AWS utilizing EC2 instances and Elastic IP for public-facing services. Implemented AWS VPC with private and public subnets, ACLs for traffic segregation, and secure communication between EC2 and RDS database within the VPC.",
    image: "/projects/secure-app.png",
    technologies: ["Amazon VPC", "AWS EC2", "Amazon Aurora", "Subnets", "ACLs", "Python", "Flask"],
    githubUrl: "https://github.com/ManarElgamil/secure-application",
    liveUrl: "https://your-secure-app.com",
    featured: false,
    category: "web"
  },
  {
    id: "information-retrieval-app",
    title: "Information Retrieval Application",
    description: "Multi-container Docker application with input validation and REST API communication",
    longDescription: "Implemented a multi-container application using Docker with 2 web apps packaged in separate containers. The first container validates and sanitizes user input before passing it to the second container, which retrieves information from mounted volumes. Prevents potential security risks and ensures only valid input is processed.",
    image: "/images/info-retrieval.png",
    technologies: ["Docker", "Python", "Flask", "REST APIs", "Postman", "Containerization"],
    githubUrl: "https://github.com/ManarElgamil/Information-Retrieval-Application.git",
    // liveUrl: "https://your-info-retrieval-app.com",
    featured: true,
    category: "backend"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and TypeScript",
    longDescription: "This portfolio website showcases my skills, projects, and experience. Built with Next.js, TypeScript, and Tailwind CSS, it features a modular architecture for easy content updates, interactive animations, and a contact form for client inquiries.",
    image: "/images/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/ManarElgamil/portfolio",
    liveUrl: "https://manar-elgamil.dev",
    featured: false,
    category: "web"
  }
];

export const experience: Experience[] = [
  {
    id: "vmg-cloud-specialist",
    company: "VMG Strategic Technology",
    position: "Cloud and Application Specialist",
    startDate: "2025-02",
    endDate: undefined,
    description: "Design and deliver secure, automated, and business-aligned solutions for VMG clients. Despite being a fresh graduate, entrusted with leading multiple end-to-end projects from architecture design to deployment, building production-ready systems now in use by clients and internal teams.",
    technologies: ["AWS", "Lambda", "DynamoDB", "S3", "Microsoft Graph API", "SendGrid", "Docker", "GitHub Actions", "Azure Container Apps", "Streamlit", "Python", "GitOps"],
    achievements: [
      "Led Pivotal Growth Inc. Leadership Diagnostics Platform - designed serverless AWS architecture and delivered under tight 2-month deadline, featured in official press release",
      "Built Allswater BambooHR to Accelo Integration - automated time-off synchronization improving operational efficiency",
      "Developed VMG Internal ConnectWise Streamlit Dashboard - containerized with Docker and automated deployments with GitHub Actions"
    ]
  },
  {
    id: "dalhousie-ta",
    company: "Dalhousie University",
    position: "Teaching Assistant and Marker",
    startDate: "2022-09",
    endDate: "2024-06",
    description: "Served as a TA for three high-enrollment courses, collectively supporting over 1,000 students in their foundational computer science education. Provided dedicated one-on-one and small-group mentorship to 400+ students over two years.",
    technologies: ["Python", "Java", "C++", "Data Structures", "Algorithms", "OOP"],
    achievements: [
      "Supported over 1,000 students across three high-enrollment computer science courses",
      "Provided dedicated mentorship to 400+ students, significantly improving their understanding of advanced topics",
      "Developed and delivered tutorial sessions, held office hours, and provided constructive feedback on assignments"
    ]
  },
  {
    id: "axis-coop",
    company: "AXIS Capital",
    position: "Business Technology Co-op Student",
    startDate: "2023-05",
    endDate: "2023-09",
    description: "Accelerated the financial close process by automating quarterly quota-share allocations in Oracle E-Business Suite (EBS), boosting the finance team's operational efficiency by 15%. Developed and deployed 3 critical projects to production within the 4-month co-op term.",
    technologies: ["Oracle EBS", "SQL", "PL/SQL", "DataLoader", "Oracle Web ADI", "General Ledger"],
    achievements: [
      "Boosted finance team's operational efficiency by 15% through automation of quarterly quota-share allocations",
      "Developed and deployed 3 critical projects to production within the 4-month co-op term",
      "Engineered robust data pipeline using SQL, PL/SQL, and DataLoader to automate complex financial calculations"
    ]
  },
  {
    id: "mobia-intern",
    company: "MOBIA",
    position: "Data Scientist Intern",
    startDate: "2022-05",
    endDate: "2022-08",
    description: "Developed a text-based chatbot to aid the IT help desk resolve tickets, which decreased the number of tickets generated by 20%. Analyzed requirements and presented the completed model to the President and CEO of MOBIA.",
    technologies: ["Python", "Machine Learning", "Natural Language Processing", "Data Analysis", "Canva"],
    achievements: [
      "Developed chatbot that decreased IT help desk tickets by 20%",
      "Presented completed model to President and CEO of MOBIA with positive feedback",
      "Marketed the chatbot to the company using Canva posters to drive employee adoption"
    ]
  }
];

export const achievements: Achievement[] = [
  {
    id: "award-1",
    title: "Leadership IMPACT Award",
    description: "Displayed exceptional leadership skills and fostered new opportunities for computer science students at Dalhousie University.",
    date: "Apr 2024",
    type: "award",
    issuer: "Faculty of Computer Science, Dalhousie University",
    // location: "Halifax, NS"
  },
  {
    id: "award-2",
    title: "First Place - Shiftkey's Generative AI Hackathon",
    description: "Optimized the IWK's booking user-interface by utilizing generative AI to predict high and low traffic slots based on historical booking data.",
    date: "Jan 2024",
    type: "award",
    issuer: "Shiftkey Labs",
    // location: "Halifax, NS"
  },
  {
    id: "award-3",
    title: "First Place - Shiftkey's Generative AI Hackathon",
    description: "Created an image-to-image generative AI tool that utilizes a CNN model to extract features from existing images and connects to OpenAI's public API to generate similar images. This resulted in creating cheaper test data for the salmonide and saithe fish species.",
    date: "May 2024",
    type: "award",
    issuer: "Shiftkey Labs",
    // location: "Halifax, NS"
  },
  {
    id: "award-4",
    title: "Citizenship Award",
    description: "Advocated for diversity and inclusion and contributed voluntarily to creating a welcoming community for female-identifying and non-binary students at Dalhousie University.",
    date: "Jan 2023",
    type: "award",
    issuer: "Faculty of Computer Science, Dalhousie University",
    // location: "Halifax, NS"
  }
];