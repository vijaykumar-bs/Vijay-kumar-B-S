"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-32 pb-12 px-6 bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-sm uppercase tracking-[0.5em] font-bold text-white/40 mb-12">
              Connect_06
            </h2>
            <h3 className="text-[clamp(2.5rem,8vw,5rem)] font-playfair font-black leading-[0.9] tracking-tighter mb-12">
              LET&apos;S BUILD <br /> SOMETHING <br /> REMARKABLE.
            </h3>
            
            <motion.a
              href="mailto:vijayappugowda@gmail.com"
              whileHover={{ x: 20 }}
              className="inline-flex items-center space-x-6 text-2xl font-light hover:text-accent transition-colors group"
            >
              <span>vijayappugowda@gmail.com</span>
              <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform" />
            </motion.a>
          </div>

          <div className="grid sm:grid-cols-2 gap-12 self-end">
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-widest font-bold text-white/30">Location</h4>
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span className="font-light text-white/70">Bangalore, Karnataka <br /> India</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-widest font-bold text-white/30">Contact</h4>
              <a 
                href="https://wa.me/919513057757" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-4 group hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 text-accent mt-1 group-hover:scale-110 transition-transform" />
                <span className="font-light text-white/70 tracking-widest">+91 9513057757</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-[0.5em] text-white/20">
            &copy; 2026 VIJAY KUMAR B S. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-8 text-[10px] uppercase tracking-[0.3em] font-bold">
            <a href="https://www.linkedin.com/in/vijay-kumar-b-s/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="https://github.com/vijayappugowda" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
            <a href="https://wa.me/919513057757" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
