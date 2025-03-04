import { RiReactjsLine, RiJavascriptFill, RiJavaFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { FaPhp, FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const techStacks = [
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl lg:text-7xl text-cyan-300" />, duration: 2.5 },
  { name: "JavaScript", icon: <RiJavascriptFill className="text-5xl lg:text-7xl text-yellow-400" />, duration: 3 },
  { name: "Java", icon: <RiJavaFill className="text-5xl lg:text-7xl text-neutral-50" />, duration: 2 },
  { name: "PHP", icon: <FaPhp className="text-5xl lg:text-7xl text-blue-700" />, duration: 6 },
];

const backendStacks = [
  { name: "React.js", icon: <RiReactjsLine className="text-5xl lg:text-7xl text-cyan-400" />, duration: 4 },
  { name: "Node.js", icon: <FaNodeJs className="text-5xl lg:text-7xl text-green-400" />, duration: 2.5 },
  { name: "Express.js", icon: <SiExpress className="text-5xl lg:text-7xl text-white" />, duration: 1.5 },
  { name: "MongoDB", icon: <SiMongodb className="text-5xl lg:text-7xl text-green-500" />, duration: 5 },
  { name: "MySQL", icon: <GrMysql className="text-5xl lg:text-7xl text-blue-500" />, duration: 1.5 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 2 }}
        className="my-20 text-center text-4xl text-white"
      >
        Tech Stacks
      </motion.h1>

      {/* First Row */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2 }}
        className="flex flex-wrap items-center justify-center lg:gap-20 gap-6"
      >
        {techStacks.map((stack, index) => (
          <motion.div
            key={index}
            variants={iconVarients(stack.duration)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center"
          >
            <div className="rounded-2xl border-4 border-neutral-800 p-4">{stack.icon}</div>
            <p className="mt-2 text-sm text-gray-400">{stack.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Second Row */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 2 }}
        className="flex flex-wrap items-center justify-center lg:gap-20 gap-6 mt-10"
      >
        {backendStacks.map((stack, index) => (
          <motion.div
            key={index}
            variants={iconVarients(stack.duration)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center"
          >
            <div className="rounded-2xl border-4 border-neutral-800 p-4">{stack.icon}</div>
            <p className="mt-2 text-sm text-gray-400">{stack.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
