import { useState } from "react";
import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import reactjs from "../assets/tech/reactjs.png";
import nextjs from "../assets/tech/nextjs.png";
import tailwindcss from "../assets/tech/tailwind-css.png";
import nodejs from "../assets/tech/nodejs.png";
import expressjs from "../assets/tech/expressjs.png";
import java from "../assets/tech/java.png";
import php from "../assets/tech/PHP.png";
import python from "../assets/tech/python.png";
import mongodb from "../assets/tech/mongo-db.png";
import mysql from "../assets/tech/mysql.png";
import postgresql from "../assets/tech/sql.png";
import figma from "../assets/tech/figma.png";
import git from "../assets/tech/git.png";
import github from "../assets/tech/github.png";
import intellij from "../assets/tech/intellij.png";
import vscode from "../assets/tech/vscode.png";
import postman from "../assets/tech/postman.png";

import {
  Code2,
  Database,
  Server,
  Globe,
  GitBranch,
  Palette,
  Brain,
  Heart,
  Lightbulb,
  Target,
  Users,
  Zap,
  Wrench,
} from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: [
      {
        name: "JavaScript",
        level: 90,
        icon: javascript,
        color: "from-yellow-400 to-yellow-600",
      },
      {
        name: "TypeScript",
        level: 70,
        icon: typescript,
        color: "from-blue-400 to-blue-600",
      },
      {
        name: "React",
        level: 90,
        icon: reactjs,
        color: "from-cyan-400 to-cyan-600",
      },
      {
        name: "Next.js",
        level: 80,
        icon: nextjs,
        color: "from-gray-700 to-gray-900",
      },
      {
        name: "Tailwind CSS",
        level: 95,
        icon: tailwindcss,
        color: "from-teal-400 to-teal-600",
      },
    ],
    backend: [
      {
        name: "Node.js",
        level: 90,
        icon: nodejs,
        color: "from-green-400 to-green-600",
      },
      {
        name: "Express",
        level: 85,
        icon: expressjs,
        color: "from-gray-600 to-gray-800",
      },
      {
        name: "Java",
        level: 70,
        icon: java,
        color: "from-gray-200 to-gray-300",
      },
      {
        name: "PHP",
        level: 50,
        icon: php,
        color: "from-purple-400 to-purple-600",
      },
      {
        name: "Python",
        level: 40,
        icon: python,
        color: "from-blue-500 to-blue-700",
      },
    ],
    database: [
      {
        name: "MongoDB",
        level: 85,
        icon: mongodb,
        color: "from-green-500 to-green-700",
      },
      {
        name: "MySQL",
        level: 80,
        icon: mysql,
        color: "from-orange-400 to-orange-600",
      },
      {
        name: "PostgreSQL",
        level: 45,
        icon: postgresql,
        color: "from-blue-600 to-blue-800",
      },
    ],
    tools: [
      {
        name: "Git",
        level: 93,
        icon: git, // replace with image or keep icon
        color: "from-red-400 to-red-600",
      },
      {
        name: "GitHub",
        level: 92,
        icon: github, // e.g., ../assets/tech/github.png
        color: "from-gray-800 to-black",
      },
      {
        name: "VS Code",
        level: 95,
        icon: vscode,
        color: "from-blue-500 to-indigo-600",
      },
      {
        name: "IntelliJ IDEA",
        level: 88,
        icon: intellij,
        color: "from-indigo-600 to-purple-700",
      },
      {
        name: "Postman",
        level: 90,
        icon: postman,
        color: "from-orange-400 to-orange-600",
      },
      //   {
      //     name: "Docker",
      //     level: 85,
      //     icon: docker,
      //     color: "from-sky-500 to-blue-700",
      //   },
      {
        name: "Figma",
        level: 88,
        icon: figma,
        color: "from-pink-500 to-purple-500",
      },
      //   {
      //     name: "Firebase",
      //     level: 87,
      //     icon: firebase,
      //     color: "from-yellow-400 to-orange-500",
      //   },
    ],

    soft: [
      {
        name: "Problem Solving",
        level: 98,
        icon: Lightbulb,
        color: "from-yellow-400 to-orange-500",
      },
      {
        name: "Communication",
        level: 94,
        icon: Users,
        color: "from-blue-400 to-indigo-500",
      },
      {
        name: "Creativity",
        level: 90,
        icon: Palette,
        color: "from-pink-400 to-rose-500",
      },
      {
        name: "Adaptability",
        level: 96,
        icon: Zap,
        color: "from-green-400 to-emerald-500",
      },
      {
        name: "Empathy",
        level: 89,
        icon: Heart,
        color: "from-red-400 to-pink-500",
      },
      {
        name: "Goal-Oriented",
        level: 95,
        icon: Target,
        color: "from-indigo-400 to-purple-500",
      },
    ],
  };

  const categories = [
    { key: "frontend", label: "Frontend", icon: Globe },
    { key: "backend", label: "Backend", icon: Server },
    { key: "database", label: "Database", icon: Database },
    { key: "tools", label: "Tools", icon: Wrench },
    // { key: "soft", label: "Soft Skills", icon: Heart },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Tech Arsenal</span>
          </h2>
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive blend of cutting-edge technologies and human-like
            qualities that power modern digital experiences.
          </p> */}
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Navigation */}
          <div className="flex justify-center mb-12">
            <div className="glass dark:glass-dark rounded-2xl p-2">
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.key}
                      onClick={() => setActiveCategory(category.key)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeCategory === category.key
                          ? "gradient-primary text-white shadow-lg scale-105"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/10"
                      }`}
                    >
                      <IconComponent size={18} />
                      <span className="font-medium">{category.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeCategory].map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group glass dark:glass-dark rounded-2xl p-6 hover:scale-105 transition-all duration-300 animate-scale-in border border-white/20 hover:border-white/40"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-20 te20-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {/* <IconComponent size={24} /> */}
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-20 h-20 rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{skill.name}</h4>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${skill.color} shadow-sm`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div
                      className="absolute -top-1 transition-all duration-1000 ease-out"
                      style={{ left: `${skill.level}%` }}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-gradient-to-r ${skill.color} shadow-lg border-2 border-white transform -translate-x-1/2`}
                      ></div>
                    </div>
                  </div>

                  {/* Skill Level Indicator */}
                  <div className="mt-4 flex justify-between items-center text-xs text-muted-foreground">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Summary */}
          {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center glass dark:glass-dark rounded-xl p-6">
              <div className="text-2xl font-bold text-gradient mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center glass dark:glass-dark rounded-xl p-6">
              <div className="text-2xl font-bold text-gradient mb-2">5+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center glass dark:glass-dark rounded-xl p-6">
              <div className="text-2xl font-bold text-gradient mb-2">100+</div>
              <div className="text-sm text-muted-foreground">
                Projects Built
              </div>
            </div>
            <div className="text-center glass dark:glass-dark rounded-xl p-6">
              <div className="text-2xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Availability</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
