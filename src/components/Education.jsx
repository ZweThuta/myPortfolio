import { EDUCATION } from "../constants";
import { motion } from "motion/react";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Edu
        <span className="text-transparent text-gradient">cation</span>
        <motion.div
          className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-200 rounded-full mt-2 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          style={{ transformOrigin: "left" }}
        />
      </motion.h1>

      <div>
        {EDUCATION.map((education, index) => (
          <div
            key={index}
            className="mb-20 flex flex-wrap lg:justify-center text-justify"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:3/4"
            >
              <h6 className="mb-2 text-xl font-semibold text-white flex flex-col">
                {education.role}
                <span className="mb-2 text-sm text-purple-500 hover:underline">
                  {education.company}
                </span>
              </h6>
              <p className="text-sm">{education.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
