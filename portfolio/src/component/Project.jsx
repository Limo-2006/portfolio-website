import React from "react";
import { Github, ExternalLink } from "lucide-react";

import ecommerceLogo from "../assets/ecommerce.png";
import coffeeLogo from "../assets/coffee.png";
import foodLogo from "../assets/food.png";
import dportfolioLogo from "../assets/dportfolio.png";
import  calculatorLogo  from "../assets/calculator.png";

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
    image: coffeeLogo,
    description:
      "Clean and elegant coffee shop website with responsive design.",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Food Restaurant Website",
    image: foodLogo,
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
    image: dportfolioLogo,
    description:
      "Personal portfolio single page with smooth sections.",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Quiz App",
    image: ecommerceLogo,
    description: "Interactive quiz application with score tracking.",
    tech: ["JavaScript", "React"],
  },
  {
    title: "Calculator App",
    image: calculatorLogo,
    description: "Basic calculator app for practicing JavaScript logic.",
    tech: ["JavaScript"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Projects <span className="text-purple-400">.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-purple-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-1 bg-gray-800 hover:bg-purple-700 px-3 py-1 rounded transition">
                    <Github size={16} /> Code
                  </button>
                  <button className="flex items-center gap-1 bg-gray-800 hover:bg-purple-700 px-3 py-1 rounded transition">
                    <ExternalLink size={16} /> Live
                  </button>
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
