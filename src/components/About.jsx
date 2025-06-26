import React from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full border-b border-neutral-800  py-20 px-6 flex flex-col items-center text-white">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-bold text-center mb-8 relative"
      >
        About <span className="text-transparent text-gradient">Me</span>
        <motion.div
          className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-200 rounded-full mt-2 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          style={{ transformOrigin: "left" }}
        />
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full max-w-4xl lg:w-3/4 p-10 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-[16px]  overflow-hidden group"
      >
        <div className="absolute inset-0 rounded-3xl pointer-events-none before:absolute before:inset-0 before:rounded-3xl before:animate-pulse before:bg-gradient-to-tr before:from-blue-500/10 before:via-purple-500/10 before:to-indigo-500/10" />

        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute w-1/2 h-full bg-white/10 blur-lg rotate-12 translate-x-[-100%] group-hover:translate-x-full transition-transform duration-[1800ms] ease-in-out"></div>
        </div>

        <svg
          className="absolute top-0 left-0 w-full h-full rounded-3xl pointer-events-none opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 400 400"
        >
          <defs>
            <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="400" height="400" fill="url(#shine)" />
        </svg>

        <p className="relative z-10 text-sm md:text-lg text-gray-200 leading-relaxed text-center md:text-justify tracking-wide">
          {ABOUT_TEXT}
        </p>
      </motion.div>
    </section>
  );
};

export default About;
