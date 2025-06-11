"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and Stripe. Features include user authentication, product management, shopping cart, order tracking, and admin dashboard.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    liveUrl: "https://your-ecommerce-demo.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    date: "2024",
    featured: true,
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    longDescription:
      "A modern task management application with drag-and-drop functionality, real-time collaboration, team management, and progress tracking.",
    image: "/projects/taskmanager.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "https://your-taskmanager-demo.com",
    githubUrl: "https://github.com/yourusername/task-manager",
    date: "2024",
    featured: true,
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts",
    longDescription:
      "An elegant weather dashboard that provides detailed weather information, forecasts, and beautiful visualizations based on user location or search.",
    image: "/projects/weather.jpg",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "CSS3"],
    liveUrl: "https://your-weather-demo.com",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    date: "2023",
    featured: false,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "This very website you're looking at!",
    longDescription:
      "A modern, responsive portfolio website built with Next.js 14, featuring theme switching, smooth animations, and accessibility features.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    liveUrl: "https://yourname.com",
    githubUrl: "https://github.com/yourusername/portfolio",
    date: "2024",
    featured: false,
  },
];

export default function PortfolioPage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="text-professional-primary dark:text-fun-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-professional-muted dark:text-fun-muted max-w-3xl mx-auto">
              A collection of projects that showcase my skills in web development,
              UI/UX design, and problem-solving. Each project represents a unique
              challenge and learning experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-professional-surface dark:bg-fun-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-professional-muted dark:text-fun-muted">
              My most impactful and comprehensive projects
            </p>
          </motion.div>

          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                featured={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Other Projects</h2>
            <p className="text-lg text-professional-muted dark:text-fun-muted">
              Additional projects and experiments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                featured={false}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  featured: boolean;
}

function ProjectCard({ project, index, featured }: ProjectCardProps) {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {/* Image */}
        <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-professional-primary dark:bg-fun-primary rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-80 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>

        {/* Content */}
        <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
          <div className="flex items-center space-x-4 text-sm text-professional-muted dark:text-fun-muted">
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Tag size={16} />
              <span>Featured</span>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold">{project.title}</h3>
          <p className="text-lg text-professional-secondary dark:text-fun-secondary leading-relaxed">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-professional-primary/10 dark:bg-fun-primary/10 text-professional-primary dark:text-fun-primary rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <ExternalLink size={18} className="mr-2" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                <Github size={18} className="mr-2" />
                View Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card group hover:shadow-xl transition-all duration-300"
    >
      <div className="relative mb-6">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-professional-primary dark:bg-fun-primary rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-professional-muted dark:text-fun-muted">
          <Calendar size={14} />
          <span>{project.date}</span>
        </div>

        <h3 className="text-xl font-bold group-hover:text-professional-primary dark:group-hover:text-fun-primary transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-professional-secondary dark:text-fun-secondary">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-professional-primary/10 dark:bg-fun-primary/10 text-professional-primary dark:text-fun-primary rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-professional-secondary/10 dark:bg-fun-secondary/10 text-professional-secondary dark:text-fun-secondary rounded text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex space-x-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-professional-primary dark:text-fun-primary hover:text-professional-accent dark:hover:text-fun-accent transition-colors duration-200"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={18} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-professional-primary dark:text-fun-primary hover:text-professional-accent dark:hover:text-fun-accent transition-colors duration-200"
              aria-label={`View ${project.title} source code`}
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}