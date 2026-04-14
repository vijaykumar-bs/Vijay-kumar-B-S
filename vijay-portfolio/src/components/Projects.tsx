"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CYBERSECURITY DASHBOARD",
      category: "Security & AI",
      desc: "Python-based dashboard integrating OWASP ZAP API to detect XSS and SQL Injection vulnerabilities in real time.",
      tags: ["Python", "OWASP ZAP", "Matplotlib"],
      link: "#",
    },
    {
      title: "UNIVERSITY ECOSYSTEM",
      category: "Full-Stack Development",
      desc: "Full-stack website using Next.js, Node.js, and PostgreSQL with scalable architecture and modern UI/UX design.",
      tags: ["Next.js", "PostgreSQL", "Tailwind"],
      link: "#",
    },
    {
      title: "EMPLOYEE ATTRITION ML",
      category: "Machine Learning",
      desc: "Prediction model using Logistic Regression and Random Forest with interactive HR analytics dashboard.",
      tags: ["Python", "ML", "MySQL"],
      link: "#",
    },
    {
      title: "JARVIS AI ASSISTANT",
      category: "AI & Automation",
      desc: "Voice assistant with speech recognition and hands-free interaction for real-time task automation.",
      tags: ["Python", "Speech API", "Automation"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-20">
          <div>
            <h2 className="text-sm uppercase tracking-[0.5em] font-bold text-white/40 mb-6">
              Gallery_04
            </h2>
            <h3 className="text-7xl font-playfair font-black tracking-tighter">
              FEATURED <br /> WORK
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-muted/20 border border-white/5 p-12 overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4 block">
                  {project.category}
                </span>
                <h4 className="text-4xl font-playfair font-black mb-6 tracking-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-white/50 font-light leading-relaxed mb-8 max-w-md">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest border border-white/10 px-3 py-1 bg-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-6">
                  <a href={project.link} className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold hover:text-white transition-colors">
                    <span>Live Project</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors">
                    <span>Source</span>
                    <Github className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Geometric Decoration */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rotate-45 group-hover:scale-125 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
