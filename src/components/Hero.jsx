import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.jpg";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Hey there! I'm Zwe Thuta Min Thein";
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className="border-b border-neutral-700 pb-4 pt-4 lg:pt-4 lg:mb-35">
      <div className="flex flex-wrap flex-row">
        <div className="w-full lg:w-1/2 lg:pl-20 lg:pt-10">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-4xl font-thin text-white tracking-tight lg:mt-16 md:text-4xl"
            >
              {text}
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-gradient text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-3 font-light tracking-tight text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              width={350}
              className="rounded-2xl pb-20"
              alt="profile picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
