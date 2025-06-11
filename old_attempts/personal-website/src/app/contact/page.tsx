"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "https://maps.google.com/?q=San+Francisco,+CA",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "hover:text-blue-400",
    },
  ];

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
              Let's <span className="text-professional-primary dark:text-fun-primary">Connect</span>
            </h1>
            <p className="text-xl text-professional-muted dark:text-fun-muted max-w-3xl mx-auto">
              I'm always interested in hearing about new opportunities, 
              collaborations, or just having a chat about technology and design.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-professional-muted dark:text-fun-muted">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-professional-surface dark:bg-fun-surface border border-professional-secondary/20 dark:border-fun-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-professional-primary dark:focus:ring-fun-primary focus:border-transparent transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-professional-surface dark:bg-fun-surface border border-professional-secondary/20 dark:border-fun-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-professional-primary dark:focus:ring-fun-primary focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-professional-surface dark:bg-fun-surface border border-professional-secondary/20 dark:border-fun-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-professional-primary dark:focus:ring-fun-primary focus:border-transparent transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-professional-surface dark:bg-fun-surface border border-professional-secondary/20 dark:border-fun-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-professional-primary dark:focus:ring-fun-primary focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell me about your project, idea, or just say hello!"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send size={18} className="mr-2" />
                        Send Message
                      </div>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-professional-surface dark:hover:bg-fun-surface transition-colors duration-200 group"
                    >
                      <div className="w-12 h-12 bg-professional-primary/10 dark:bg-fun-primary/10 rounded-lg flex items-center justify-center group-hover:bg-professional-primary dark:group-hover:bg-fun-primary transition-colors duration-200">
                        <Icon size={20} className="text-professional-primary dark:text-fun-primary group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div>
                        <div className="text-sm text-professional-muted dark:text-fun-muted">
                          {item.label}
                        </div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-6">Follow me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 bg-professional-surface dark:bg-fun-surface border border-professional-secondary/20 dark:border-fun-secondary/20 rounded-lg flex items-center justify-center text-professional-muted dark:text-fun-muted transition-all duration-200 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="card bg-gradient-to-br from-professional-primary/5 to-professional-secondary/5 dark:from-fun-primary/5 dark:to-fun-secondary/5"
            >
              <h3 className="text-xl font-semibold mb-4">Availability</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-professional-secondary dark:text-fun-secondary">
                    Available for new projects
                  </span>
                </div>
                <div className="text-sm text-professional-muted dark:text-fun-muted">
                  I typically respond within 24 hours
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}