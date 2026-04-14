"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-sm uppercase tracking-[0.5em] font-bold text-white/40">
            Profile_01
          </h2>
          <h3 className="text-5xl font-playfair font-bold leading-tight">
            Specializing in AI, ML, and Data-Driven Design.
          </h3>
          <p className="text-xl text-white/60 leading-relaxed font-light">
            I am an MCA graduate with strong analytical and problem-solving skills. My experience spans from building automated data pipelines to developing highly intuitive Web UI/UX interfaces. I bridge the gap between complex backend logic and seamless frontend interaction.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <div className="text-4xl font-bold mb-2">2026</div>
              <div className="text-xs uppercase tracking-widest text-white/40">Completion Date</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-xs uppercase tracking-widest text-white/40">Projects Built</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square border border-white/10 bg-grid p-12 flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="text-center space-y-4">
            <div className="text-6xl font-black text-outline">ARTIFICIAL</div>
            <div className="text-6xl font-black italic">INTELLIGENCE</div>
            <div className="text-6xl font-black text-white/20">DATA SCIENCE</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
