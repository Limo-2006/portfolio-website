import React from "react";
import { Github, ExternalLink } from "lucide-react";

import ecommerceLogo from "../assets/ecommerce.png"
// import coffeeLogo from "../assets/coffee.png"

// import ecommerce from "../assets/projects/ecommerce.png";
// import coffee from "../assets/projects/coffee.png";
// import restaurant from "../assets/projects/restaurant.png";
// import landing from "../assets/projects/landing.png";
// import portfolio from "../assets/projects/portfolio.png";
// import quiz from "../assets/projects/quiz.png";
// import calculator from "../assets/projects/calculator.png";

const projects = [
  {
    title: "E-commerce Website UI",
    image: ecommerceLogo,
    description:
      "Modern e-commerce frontend with product listing, filtering and cart UI.",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Coffee Shop Website",
    image: ecommerceLogo,
    description:
      "Clean and elegant coffee shop website with responsive design.",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Food Restaurant Website",
    image: ecommerceLogo,
    description:
      "Restaurant website focused on menu presentation and UX.",
    tech: ["HTML", "Tailwind"],
  },
  {
    title: "Landing Page",
    image: ecommerceLogo,
    description:
      "Conversion-focused landing page with modern UI layout.",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Portfolio Single Page",
    image: ecommerceLogo,
    description:
      "Personal portfolio single page with smooth sections.",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Quiz App",
    image: ecommerceLogo,
    description:
      "Interactive quiz application with score tracking.",
    tech: ["JavaScript", "React"],
  },
  {
    title: "Calculator App",
    image: ecommerceLogo,
    description:
      "Basic calculator app for practicing JavaScript logic.",
    tech: ["JavaScript"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Projects<span className="text-purple-400">.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:scale-[1.02] transition"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-gray-700 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-gray-300">
                  <span className="flex items-center gap-1">
                    <Github size={16} /> Code
                  </span>
                  <span className="flex items-center gap-1">
                    <ExternalLink size={16} /> Live
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
