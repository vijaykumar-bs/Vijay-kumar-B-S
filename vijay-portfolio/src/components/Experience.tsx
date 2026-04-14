"use client";

import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "S-VYASA Deemed-to-be University",
      period: "2026 – Present",
      location: "Bengaluru",
      highlights: [
        "Building responsive, user-centric web interfaces and UI/UX Designer.",
        "Developed a multi-language supported website, improving accessibility.",
        "Enhanced UX through intuitive design and modern UI principles."
      ],
    },
    {
      role: "Python Developer Intern",
      company: "Saiket Systems",
      period: "April 2024",
      location: "Bengaluru",
      highlights: [
        "Deployed Python-based backend applications focusing on automation.",
        "Implemented web scraping using BeautifulSoup for structured data extraction.",
        "Integrated external APIs for real-time data retrieval (e.g., currency conversion).",
        "Optimized and debugged code for improved performance and maintainability."
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.5em] font-bold text-white/40 mb-20 text-center">
          Timeline_03
        </h2>
        
        <div className="space-y-px bg-border">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-4 bg-background p-12 gap-8 items-start hover:bg-muted/30 transition-colors"
            >
              <div className="lg:col-span-1">
                <span className="text-accent font-bold tracking-widest text-sm uppercase block mb-2">{exp.period}</span>
                <span className="text-white/40 text-xs uppercase tracking-widest">{exp.location}</span>
              </div>
              
              <div className="lg:col-span-1">
                <h3 className="text-3xl font-playfair font-bold leading-none mb-2">{exp.role}</h3>
                <h4 className="text-white/60 font-medium uppercase tracking-widest text-xs">{exp.company}</h4>
              </div>
              
              <div className="lg:col-span-2 space-y-4">
                <ul className="space-y-3">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start text-white/50 font-light leading-relaxed">
                      <span className="mr-4 mt-2 w-1 h-1 bg-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
