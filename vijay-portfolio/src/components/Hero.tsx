"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center relative overflow-hidden bg-grid">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm uppercase tracking-[0.3em] font-medium text-white/50 mb-6 block">
            MCA Graduate | Full Stack Developer | AI & ML | Data Analytics | UI/UX
          </span>
          <h1 className="text-[clamp(3rem,12vw,8rem)] font-playfair font-black leading-[0.9] tracking-tighter mb-8">
            VIJAY <br /> KUMAR B S
          </h1>
          <p className="max-w-2xl text-xl text-white/70 font-light leading-relaxed mb-12">
            Passionate about leveraging AI technologies to solve real-world challenges through data-driven solutions and intuitive digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <motion.a
              href="#projects"
              whileHover={{ x: 10 }}
              className="flex items-center space-x-4 bg-white text-black px-10 py-5 font-bold uppercase tracking-widest group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.a>
            <motion.a
              href="mailto:vijayappugowda@gmail.com"
              className="flex items-center space-x-4 border border-white/20 hover:border-white px-10 py-5 font-bold uppercase tracking-widest transition-all"
            >
              <span>Connect</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-20 top-0 w-px h-full bg-border opacity-20 hidden lg:block" />
      <div className="absolute left-20 bottom-0 w-px h-64 bg-border opacity-20 hidden lg:block" />
    </section>
  );
};

export default Hero;
