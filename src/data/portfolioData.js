/**
 * Central Data Store for Portfolio
 * All content is centralized here for easy editing and maintenance.
 */

export const personalInfo = {
  name: "Sanket Shrikrishna Jadhav",
  shortName: "Sanket Jadhav",
  title: "Second-Year B.E. IT Student | Full Stack Learner | DSA - Java",
  tagline: "Aspiring Software Engineer | Focused on Full-Stack Development, DSA & Java",
  location: "Navi Mumbai, Maharashtra, India",
  college: "Datta Meghe College of Engineering",
  status: "Available for internships & collaborations",
  resumeUrl: "./resume.pdf",
  about:
    "I'm a second-year B.E. Information Technology student at Datta Meghe College of Engineering, focused on becoming a software engineer. I enjoy learning full-stack web development and strengthening my problem-solving through Data Structures and Algorithms in Java. I build hands-on projects to turn what I learn into real, working applications.",
  highlights: [
    { label: "Degree", value: "B.E. Information Technology" },
    { label: "Graduation", value: "Expected 2029" },
    { label: "1st Year CGPA", value: "7.56 / 10" },
    { label: "Core Focus", value: "MERN Stack & Java DSA" },
  ],
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    category: "Languages",
    description: "Core programming and query languages used for problem solving and logic.",
    skills: ["Java", "HTML", "CSS", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    description: "Building responsive, modern, and accessible user interfaces.",
    skills: ["React", "HTML5", "CSS3", "JavaScript (ES6)", "Flexbox", "CSS Grid"],
  },
  {
    category: "Backend and Database",
    description: "Developing scalable server applications, APIs, and data modeling.",
    skills: ["Node.js", "Express", "MongoDB", "SQL"],
  },
  {
    category: "Tools",
    description: "Version control, workflow efficiency, and development tooling.",
    skills: ["Git", "GitHub", "VS Code", "Vite", "Postman"],
  },
];

export const projects = [
  {
    id: "food-delivery",
    title: "Food Delivery Website",
    badge: "Solo College Project",
    category: "Full Stack (MERN)",
    description:
      "A full-stack food delivery app with user authentication, restaurant menu browsing, cart management, online ordering, and an admin panel to manage products, orders, and customers.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    githubUrl: "https://github.com/Mr-Sanket01/food-Delivery-website",
    liveDemoUrl: null, // No live demo, displays only GitHub button
    featured: true,
  },
  {
    id: "amazon-music-clone",
    title: "Amazon Music Clone",
    badge: "UI / Web App Clone",
    category: "Frontend Design",
    description:
      "A responsive, Amazon Music-inspired interface with Trending Songs and Album sections and hover effects, built with Flexbox and CSS Grid.",
    tech: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Git & GitHub"],
    githubUrl: "https://lnkd.in/dzF43GcA",
    liveDemoUrl: "https://lnkd.in/dqnRhFgX",
    featured: true,
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe Game",
    badge: "Interactive Game",
    category: "JavaScript Application",
    description:
      "An interactive two-player game with separate colors for X and O, winner and draw detection, and Restart/New Game buttons.",
    tech: ["HTML5", "CSS3", "JavaScript (ES6)"],
    githubUrl: "https://lnkd.in/dW5Ezjgg",
    liveDemoUrl: "https://lnkd.in/dMgkdqWS",
    featured: true,
  },
];

export const educationList = [
  {
    degree: "B.E. in Information Technology",
    institution: "Datta Meghe College of Engineering",
    period: "2024 - 2029 (Expected)",
    score: "1st Year CGPA: 7.56",
    status: "Currently in 2nd Year",
    details:
      "Pursuing Bachelor of Engineering with foundational coursework in Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management, Computer Architecture, and Modern Web Development.",
  },
];

export const certificatesList = [
  {
    title: "Java App Development Bootcamp",
    issuer: "Department of Information Technology, Datta Meghe College of Engineering (GITS)",
    year: "2026",
    credentialType: "Technical Training & Bootcamp",
    description:
      "Completed hands-on bootcamp focusing on Java programming fundamentals, Object-Oriented Design principles, practical application development, and problem-solving techniques.",
    skillsLearned: ["Core Java", "OOP Concepts", "App Architecture", "Problem Solving"],
  },
];

export const contactDetails = {
  email: "sanket.jadhav.1377@gmail.com",
  phone: "9321592772",
  phoneDisplay: "+91 9321592772",
  linkedin: "https://www.linkedin.com/in/mr-sanket-jadhav-1377x",
  github: "https://github.com/Mr-Sanket01",
  location: "Navi Mumbai, Maharashtra, India",
};
