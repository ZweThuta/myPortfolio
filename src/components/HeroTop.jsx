import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.jpg";

import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";

const HeroTop = () => {
  const [text, setText] = useState("");
  const fullText = "Zwe Thuta Min Thein";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="h-auto flex items-center justify-center relative ">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main content */}
          <motion.div variants={itemVariants} className="mb-1">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-44 h-44 mx-auto mb-10 relative"
            >
              <div className="absolute inset-0 bg-background rounded-full flex items-center justify-center">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-full"
              />
            </motion.div>

            <h1 className="text-xl font-thin text-white tracking-tight lg:mt-16 md:text-4xl">
              <span className="text-white">{text}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-primary"
              >
                |
              </motion.span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1.5 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mb-6 mx-auto max-w-md"
            />
            <motion.span
              variants={itemVariants}
              className="inline-block text-lg text-gradient md:text-3xl tracking-tight text-transparent mb-6"
            >
              Full Stack Developer
            </motion.span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* Action buttons */}
          {/* <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-white font-semibold px-8 py-4 text-lg"
            >
              <span className="mr-2">View My Work</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-primary/30 hover:border-primary hover:bg-primary/10 font-semibold px-8 py-4 text-lg"
            >
              <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </Button>
          </motion.div> */}

          {/* Social links */}
          {/* <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-16"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-300 group"
              >
                <social.icon className="w-5 h-5 text-primary group-hover:text-primary/80" />
              </motion.a>
            ))}
          </motion.div> */}

          {/* Scroll indicator */}
          {/* <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-muted-foreground mb-4">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-8 rounded-full border-2 border-primary/50 flex items-center justify-center cursor-pointer hover:border-primary transition-colors"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <ChevronDown className="w-4 h-4 text-primary" />
            </motion.div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroTop;
