import { EDUCATION } from "../constants";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Education = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 25%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const headingY = useTransform(scrollYProgress, [0, 1], [30, -10]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-neutral-800 py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-16 top-20 h-52 w-52 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-16 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <motion.div style={{ y: headingY }}>
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-center text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Edu
            <span className="text-gradient text-transparent">cation</span>
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.7 }}
            className="mx-auto mt-4 max-w-2xl text-center text-sm text-neutral-300 sm:text-base"
          >
            My learning path from self-study foundations to advanced computer
            science and production-focused full stack development.
          </motion.p>
        </motion.div>

        <div className="relative mt-14 sm:mt-16">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-neutral-700/60 sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            className="absolute left-3 top-0 w-px bg-gradient-to-b from-cyan-400 via-violet-500 to-fuchsia-400 sm:left-1/2 sm:-translate-x-1/2"
            style={{ height: lineHeight }}
          />

          <div className="space-y-7 sm:space-y-10">
            {EDUCATION.map((education, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.article
                  key={`${education.role}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 45,
                    scale: 0.95,
                    filter: "blur(6px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`relative pl-10 sm:pl-0 ${
                    isEven ? "sm:pr-[52%]" : "sm:pl-[52%]"
                  }`}
                >
                  <div className="absolute left-[7px] top-7 h-3.5 w-3.5 rounded-full border-2 border-neutral-950 bg-cyan-300 shadow-[0_0_0_6px_rgba(14,165,233,0.12)] sm:left-1/2 sm:-translate-x-1/2" />

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:border-cyan-300/40 hover:bg-white/10 sm:p-6">
                    <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="inline-flex w-fit items-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-cyan-200">
                        {education.year}
                      </p>
                      {education.company && (
                        <p className="text-sm text-violet-300">
                          {education.company}
                        </p>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                      {education.role}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-200 sm:text-[15px]">
                      {education.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
