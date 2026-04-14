"use client";

import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Application",
      school: "S-VYASA Deemed-to-be University",
      period: "2024 – Present",
      status: "Pursuing",
      location: "Bengaluru",
    },
    {
      degree: "Bachelor of Computer Applications",
      school: "Bengaluru Institute Management Studies",
      period: "2021 – 2024",
      status: "73.11%",
      location: "Bengaluru",
    },
    {
      degree: "Pre-University",
      school: "Government PU-college",
      period: "2019 – 2021",
      status: "71%",
      location: "Bengaluru",
    },
    {
      degree: "SSLC",
      school: "Government High School",
      period: "2018 – 2019",
      status: "73.92%",
      location: "Bengaluru",
    },
  ];

  return (
    <section id="education" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.5em] font-bold text-white/40 mb-20">
          Academic_05
        </h2>
        
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background p-12 border border-border/50 hover:border-accent/40 transition-colors group"
            >
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-accent font-bold px-3 py-1 border border-accent/20">
                  {edu.period}
                </span>
              </div>
              <h3 className="text-3xl font-playfair font-bold mb-4 leading-tight group-hover:translate-x-1 transition-transform">
                {edu.degree}
              </h3>
              <p className="text-white/60 font-medium uppercase tracking-widest text-xs mb-6">
                {edu.school}
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-border/20">
                <span className="text-xs uppercase tracking-widest text-white/30">{edu.location}</span>
                <span className="text-lg font-bold font-mono">{edu.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
