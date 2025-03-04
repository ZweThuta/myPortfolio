import React from 'react';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full border-b border-neutral-900 flex flex-col items-center  py-16 px-6">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold text-center text-white mb-10"
      >
        About <span className="text-cyan-400">Me</span>
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full lg:w-3/4 max-w-4xl bg-neutral-800 p-8 rounded-2xl shadow-lg"
      >
        <p className="text-lg text-gray-300 text-center leading-relaxed">
          {ABOUT_TEXT}
        </p>
      </motion.div>
    </section>
  );
};

export default About;
