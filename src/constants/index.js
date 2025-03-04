

import pj1 from "../assets/projects/TrendHaven_Ecom.mp4";
import pj2 from "../assets/projects/portfolio.png";
export const HERO_CONTENT = `"I am a passionate Full Stack Developer with a strong dedication to building dynamic and user-friendly websites. I specialize in modern web technologies, primarily working with React.js for the frontend and Node.js with Express.js for the backend, along with MongoDB for efficient database management. With a keen eye for design and functionality, I strive to create seamless digital experiences that are both visually appealing and highly performant."`;

export const ABOUT_TEXT = `"I am passionate about building modern, user-friendly websites with creative UI designs. I started learning programming in 2020 and have since worked with a variety of technologies, including React, Node.js, Express.js, MySQL, and MongoDB. With strong critical thinking and problem-solving skills, I enjoy tackling complex challenges and optimizing performance. In addition to web development, I expanded my skills into graphic design last year. Currently, I am working on a game development project for my college, featuring adaptive artificial intelligence opponents."`;

export const EDUCATION = [
  {
    year: "2023 - Present",
    role: "Higher National Diploma (HND)",
    company: "Info Myanmar College",
    description: `During my Higher National Diploma (HND) studies at Info Myanmar College, I deepened my understanding of full-stack development, specializing in the MERN stack while also exploring data science, programming, and big data visualization. I am currently developing an e-commerce website using React.js for the frontend, PHP for the backend API, and MySQL for data management. Beyond web development, I have expanded into game development, where I am working on a role-playing game (RPG) featuring AI-driven opponents.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Higher National Certificate (HNC)",
    company: "Info Myanmar College",
    description: `My journey into computer science and web development deepened during my studies at Info Myanmar College, where I pursued a Higher National Certificate (HNC). I started with HTML, CSS, JavaScript, and Java, focusing on front-end development to build visually appealing and user-friendly web applications.Through hands-on projects and coursework, I developed a strong foundation in UI/UX design, responsive web development, and interactive user experiences. This experience not only enhanced my technical skills but also ignited my passion for crafting seamless and functional digital solutions.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2020 - 2022",
    role: "Self Learning in Programming ",
    // company: "Info Myanmar University",
    description: `In 2022, I began my journey into programming through self-learning, starting with HTML, CSS, and JavaScript. I leveraged YouTube tutorials, free online courses, and hands-on projects to build a strong foundation in web development. As I progressed, I explored more advanced topics, including responsive design, modern UI frameworks, and backend development.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2017 - 2020",
    role: "Architecture",
    company: "Technology University, Hmawbi",
    description: `I pursued a three-year program in Architecture at Technology University, Hmawbi, where I gained expertise in AutoCAD and SketchUp for designing home structures, along with Lumion for high-quality 3D rendering. My studies allowed me to develop a strong eye for design, spatial awareness, and attention to detail. However, during the COVID-19 pandemic, my academic journey took an unexpected turn when the university was forced to close. This challenge led me to explore the world of programming, where I discovered my passion for web development.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "TrendHaven Online Marketplace E-commerce Website",
    video: pj1,
    description:
      "A fully-featured e-commerce platform which is designed for both sellers and buyers. It includes essential functionalities like product listings, a dynamic shopping cart, an intuitive admin panel and easy product management for sellers.",
    technologies: [
      "React.js",
      "PHP",
      "MySql",
      "React Router Dom",
      "Tailwind",
      "Xampp",
    ],
    demoLink: "https://github.com/ZweThuta/MarketPlace-Website",
  },
  {
    title: "Portfolio Website",
    image: pj2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Javascript", "React", "Tailwind"],
    demoLink: "/",
  },
  
];

export const CONTACT = {
  address: "Mingaladon, Yangon",
  phoneNo: "09 766135388 ",
  email: "zwethuta1998@gmail.com",
};
