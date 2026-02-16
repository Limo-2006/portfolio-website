import React from "react";
import { Github, ExternalLink } from "lucide-react";
import blogLogo from "../assets/blog.png";
import ecommerceLogo from "../assets/ecommerce.png";
import coffeeLogo from "../assets/coffee.png";
import foodLogo from "../assets/food.png";
import  calculatorLogo  from "../assets/calculator.png";

const projects = [
  {
    title: "E-commerce Website UI",
    image: ecommerceLogo,
    description:
      "Modern e-commerce frontend with product listing, filtering and cart UI.",
    tech: ["React", "Tailwind"],
     url: "https://e-commerce-ui-5r22.vercel.app/",
     github: "https://github.com/Limo-2006/E-commerceUI.git" ,
  },
  {
    title: "Blog & Dashboard UI",
    image: blogLogo,
    description:
      "Clean blog and dashboard UI with card-based articles and interactive analytics.",
    tech: ["React", "Tailwind"],
     url: "https://blog-ui-blush.vercel.app/" ,
     github:"https://github.com/Limo-2006/Blog-UI.git" , 
  },
  {
    title: "Coffee Shop Website UI",
    image: coffeeLogo,
    description:
      "Clean and elegant coffee shop website with responsive design.",
    tech: ["HTML", "CSS"],
    url: "https://coffee-website-coffee.vercel.app/" ,
    github: "https://github.com/Limo-2006/coffee-website-coffee.git" ,
  },
  {
    title: "Food Restaurant Website UI",
    image: foodLogo,
    description:
      "Restaurant website focused on menu presentation and UX.",
    tech: ["HTML", "Tailwind"],
    url:"https://food-website-three-chi.vercel.app/",
    github: "https://github.com/Limo-2006/food-website.git" ,
  },
  
  
  {
    title: "Calculator App",
    image: calculatorLogo,
    description: "Basic calculator app for practicing JavaScript logic.",
    tech: ["JavaScript"],
    url: "https://calculator-ui-six.vercel.app/" ,
    github: "https://github.com/Limo-2006/calculator-UI.git" ,
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
                      className="px-3 py-1 
                  border border-purple-500/40 
                  text-purple-600 text-sm font-semibold 
                  rounded-md
                  
                  "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
   <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 bg-gray-800 hover:bg-purple-700 px-3 py-1 rounded transition"
  >
    <Github size={16} /> Code
  </a>

  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 bg-gray-800 hover:bg-purple-700 px-3 py-1 rounded transition"
  >
    <ExternalLink size={16} /> Live
  </a>
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
