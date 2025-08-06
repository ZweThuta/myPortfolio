import React, { useRef } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    if (videoRefs.current[index]) {
      const video = videoRefs.current[index];
      video.play();
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-10">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold text-white"
      >
        Projects
      </motion.h1>

      <div className="flex flex-col items-center">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-16 flex flex-wrap lg:flex-nowrap lg:items-center lg:justify-between w-full max-w-6xl"
          >
            {/* Video Preview */}
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:w-1/3 flex justify-center"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg sm:w-full sm:h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={project.video}
                  width={250}
                  height={160}
                  className="rounded-lg shadow-lg sm:w-full sm:h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => handlePlay(index)}
                />
              )}
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-2/3 mt-5 lg:mt-0 lg:ml-10"
            >
              <h6 className="text-xl font-semibold">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:underline hover:text-purple-400 transition-colors"
                >
                  {project.title}
                </a>
              </h6>

              <p className="mt-2 text-neutral-300">{project.description}</p>

              {/* Technologies Used */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-neutral-800 text-purple-400 text-sm py-1 px-3 rounded-lg font-medium shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
