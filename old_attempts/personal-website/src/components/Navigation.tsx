"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  User,
  Briefcase,
  FileText,
  Mail,
  Palette,
  Github,
  Linkedin,
} from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "/", label: "About", icon: User },
    { href: "/portfolio", label: "Portfolio", icon: Briefcase },
    { href: "/resume", label: "Resume", icon: FileText },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const toggleTheme = () => {
    setTheme(theme === "professional" ? "fun" : "professional");
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full bg-professional-background/80 dark:bg-fun-background/80 backdrop-blur-md border-b border-professional-secondary/20 dark:border-fun-secondary/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-professional-primary dark:text-fun-primary hover:scale-105 transition-transform duration-200"
          >
            Your Name
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-professional-primary dark:bg-fun-primary text-white"
                      : "text-professional-text dark:text-fun-text hover:bg-professional-surface dark:hover:bg-fun-surface"
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-professional-secondary/20 dark:border-fun-secondary/20">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-professional-muted dark:text-fun-muted hover:text-professional-primary dark:hover:text-fun-primary transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-professional-muted dark:text-fun-muted hover:text-professional-primary dark:hover:text-fun-primary transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-professional-surface dark:bg-fun-surface text-professional-text dark:text-fun-text hover:bg-professional-secondary/10 dark:hover:bg-fun-secondary/10 transition-all duration-200"
              aria-label={`Switch to ${
                theme === "professional" ? "fun" : "professional"
              } mode`}
            >
              <Palette size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-professional-surface dark:bg-fun-surface"
              aria-label="Toggle theme"
            >
              <Palette size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-professional-surface dark:bg-fun-surface"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-professional-background dark:bg-fun-background border-t border-professional-secondary/20 dark:border-fun-secondary/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-professional-primary dark:bg-fun-primary text-white"
                        : "text-professional-text dark:text-fun-text hover:bg-professional-surface dark:hover:bg-fun-surface"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-professional-secondary/20 dark:border-fun-secondary/20">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-professional-muted dark:text-fun-muted hover:text-professional-primary dark:hover:text-fun-primary transition-colors duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-professional-muted dark:text-fun-muted hover:text-professional-primary dark:hover:text-fun-primary transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}