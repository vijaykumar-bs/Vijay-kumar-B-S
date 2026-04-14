"use client";

import React from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          VIJAY KUMAR B S
        </motion.div>
        
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:text-white/60 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="mailto:vijayappugowda@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="px-6 py-2 border border-accent hover:bg-accent hover:text-background transition-all text-sm font-bold uppercase tracking-widest"
        >
          Contact
        </motion.a>
      </div>
    </nav>
  );
};

export default Navigation;
