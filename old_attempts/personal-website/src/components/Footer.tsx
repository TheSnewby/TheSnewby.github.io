"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:your.email@example.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { href: "/", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-professional-surface dark:bg-fun-surface border-t border-professional-secondary/20 dark:border-fun-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link
              href="/"
              className="text-2xl font-bold text-professional-primary dark:text-fun-primary hover:scale-105 transition-transform duration-200 inline-block"
            >
              Your Name
            </Link>
            <p className="text-professional-muted dark:text-fun-muted max-w-sm">
              Full Stack Developer passionate about creating beautiful, 
              functional, and user-centered digital experiences.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-professional-muted dark:text-fun-muted hover:text-professional-primary dark:hover:text-fun-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-professional-background dark:bg-fun-background border border-professional-secondary/20 dark:border-fun-secondary/20 rounded-lg flex items-center justify-center text-professional-muted dark:text-fun-muted hover:text-professional-primary dark:hover:text-fun-primary hover:border-professional-primary dark:hover:border-fun-primary transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-professional-secondary/20 dark:border-fun-secondary/20 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <div className="text-sm text-professional-muted dark:text-fun-muted">
            © {currentYear} Your Name. All rights reserved.
          </div>
          <div className="flex items-center space-x-1 text-sm text-professional-muted dark:text-fun-muted">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 animate-pulse" />
            <span>and lots of coffee</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}