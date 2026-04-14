"use client";

import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "NextJS", "ReactJS"],
    },
    {
      title: "Data & Analytics",
      skills: ["Excel", "Power BI", "SQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Backend",
      skills: ["NodeJS", "FastAPI", "Python", "Java", "R Programming"],
    },
    {
      title: "Design & Process",
      skills: ["Figma", "Relume", "Visily", "Miro", "GitHub"],
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-sm uppercase tracking-[0.5em] font-bold text-white/40 mb-6">
              Expertise_02
            </h2>
            <h3 className="text-6xl font-playfair font-black leading-[0.9]">
              TECHNICAL <br /> STACK
            </h3>
          </div>
          <p className="max-w-md text-white/50 text-right font-light">
            A comprehensive toolkit designed for building scalable, intelligent, and user-centric digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background p-10 space-y-6 hover:bg-muted/50 transition-colors"
            >
              <h4 className="text-xs uppercase tracking-widest font-bold text-accent">
                {category.title}
              </h4>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-xl font-light hover:translate-x-2 transition-transform cursor-default">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
