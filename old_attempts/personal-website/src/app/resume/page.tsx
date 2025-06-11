"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Mail, Phone, Globe, Calendar, Award } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa?: string;
  honors?: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: [
      "Led development of a microservices architecture serving 100K+ daily active users",
      "Mentored junior developers and established coding standards and best practices",
      "Reduced application load time by 40% through performance optimization",
      "Collaborated with product and design teams to deliver user-centric features",
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    location: "San Francisco, CA",
    period: "2020 - 2022",
    description: [
      "Developed and maintained multiple client-facing web applications",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Built RESTful APIs and integrated third-party services",
      "Participated in agile development processes and code reviews",
    ],
    technologies: ["Vue.js", "Python", "Django", "MySQL", "Redis"],
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2019 - 2020",
    description: [
      "Created responsive web applications using modern JavaScript frameworks",
      "Collaborated with UX designers to implement pixel-perfect designs",
      "Optimized applications for maximum speed and scalability",
      "Participated in user testing and feedback implementation",
    ],
    technologies: ["React", "TypeScript", "Sass", "Webpack"],
  },
];

const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of California, Berkeley",
    location: "Berkeley, CA",
    period: "2015 - 2019",
    gpa: "3.8/4.0",
    honors: ["Magna Cum Laude", "Dean's List (6 semesters)"],
  },
];

const skills = {
  "Frontend": ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS"],
  "Backend": ["Node.js", "Python", "Django", "Express.js", "GraphQL"],
  "Database": ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  "DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Nginx"],
  "Tools": ["Git", "Figma", "Postman", "Jest", "Webpack"],
};

export default function ResumePage() {
  const handleDownload = () => {
    // Replace with your actual resume file path
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'YourName_Resume.pdf';
    link.click();
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-professional-surface dark:bg-fun-surface">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="text-professional-primary dark:text-fun-primary">Resume</span>
            </h1>
            <p className="text-lg text-professional-muted dark:text-fun-muted max-w-2xl mx-auto">
              Download my resume or view my experience and qualifications below.
            </p>
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group"
            >
              <Download size={20} className="mr-2 group-hover:animate-bounce" />
              Download PDF Resume
            </motion.button>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Info */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 p-6 bg-professional-surface dark:bg-fun-surface rounded-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-professional-primary dark:text-fun-primary" />
              <span>your.email@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-professional-primary dark:text-fun-primary" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-professional-primary dark:text-fun-primary" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe size={16} className="text-professional-primary dark:text-fun-primary" />
              <span>yourname.com</span>
            </div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <div className="w-8 h-8 bg-professional-primary dark:bg-fun-primary rounded-full flex items-center justify-center mr-3">
              <Award size={16} className="text-white" />
            </div>
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-professional-primary/20 dark:border-fun-primary/20"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-professional-primary dark:bg-fun-primary rounded-full"></div>
                
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <div className="flex items-center text-sm text-professional-muted dark:text-fun-muted">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="text-professional-primary dark:text-fun-primary font-medium">
                    {exp.company} • {exp.location}
                  </div>
                  
                  <ul className="space-y-2 text-professional-secondary dark:text-fun-secondary">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-professional-primary dark:bg-fun-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-professional-primary/10 dark:bg-fun-primary/10 text-professional-primary dark:text-fun-primary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <div className="w-8 h-8 bg-professional-primary dark:bg-fun-primary rounded-full flex items-center justify-center mr-3">
              <Award size={16} className="text-white" />
            </div>
            Education
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <div className="flex items-center text-sm text-professional-muted dark:text-fun-muted">
                    <Calendar size={14} className="mr-1" />
                    {edu.period}
                  </div>
                </div>
                
                <div className="text-professional-primary dark:text-fun-primary font-medium mb-2">
                  {edu.school} • {edu.location}
                </div>
                
                {edu.gpa && (
                  <div className="text-professional-secondary dark:text-fun-secondary mb-2">
                    GPA: {edu.gpa}
                  </div>
                )}
                
                {edu.honors && (
                  <div className="flex flex-wrap gap-2">
                    {edu.honors.map((honor) => (
                      <span
                        key={honor}
                        className="px-2 py-1 bg-professional-accent/10 dark:bg-fun-accent/10 text-professional-accent dark:text-fun-accent rounded text-sm font-medium"
                      >
                        {honor}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <div className="w-8 h-8 bg-professional-primary dark:bg-fun-primary rounded-full flex items-center justify-center mr-3">
              <Award size={16} className="text-white" />
            </div>
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-lg font-semibold mb-4 text-professional-primary dark:text-fun-primary">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-professional-surface dark:bg-fun-surface border border-professional-secondary/20 dark:border-fun-secondary/20 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}