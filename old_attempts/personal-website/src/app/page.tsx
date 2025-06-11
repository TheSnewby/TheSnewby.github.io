"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, MapPin, Calendar } from "lucide-react";

export default function HomePage() {
  const skills = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "PostgreSQL",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                >
                  Hi, I'm{" "}
                  <span className="text-professional-primary dark:text-fun-primary">
                    Your Name
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl sm:text-2xl text-professional-muted dark:text-fun-muted"
                >
                  Full Stack Developer & UI/UX Enthusiast
                </motion.p>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-professional-secondary dark:text-fun-secondary leading-relaxed"
              >
                I'm passionate about creating beautiful, functional, and
                user-centered digital experiences. With expertise in modern web
                technologies, I bring ideas to life through clean code and
                thoughtful design.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/portfolio" className="btn-primary group">
                  View My Work
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
                <Link href="/resume" className="btn-secondary group">
                  <Download size={20} className="mr-2" />
                  Download Resume
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex items-center space-x-6 text-sm text-professional-muted dark:text-fun-muted"
              >
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>Available for hire</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-professional-primary to-professional-secondary dark:from-fun-primary dark:to-fun-secondary p-1">
                  <div className="w-full h-full rounded-full bg-professional-background dark:bg-fun-background p-2">
                    <Image
                      src="/profile-photo.jpg" // Add your photo to public folder
                      alt="Your Name"
                      width={300}
                      height={300}
                      className="w-full h-full rounded-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-professional-primary dark:bg-fun-primary rounded-full flex items-center justify-center text-white font-bold text-xl"
                >
                  👋
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-professional-surface dark:bg-fun-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technologies I Love
            </h2>
            <p className="text-lg text-professional-muted dark:text-fun-muted max-w-2xl mx-auto">
              I'm always learning and exploring new technologies to stay at the
              forefront of web development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="card text-center py-8 hover:shadow-lg transition-all duration-200"
              >
                <span className="text-lg font-semibold">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-lg text-professional-secondary dark:text-fun-secondary leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 5 years of
                experience building web applications that solve real-world
                problems. My journey in tech started with a curiosity about how
                websites work, and it has evolved into a deep love for creating
                digital experiences that make a difference.
              </p>
              <p>
                When I'm not coding, you can find me exploring new coffee shops,
                hiking local trails, or experimenting with new recipes in the
                kitchen. I believe that diverse experiences outside of tech make
                me a better developer and problem solver.
              </p>
              <p>
                I'm always excited to collaborate on interesting projects and
                meet fellow developers. Feel free to reach out if you'd like to
                chat about tech, share ideas, or explore potential
                collaborations!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}