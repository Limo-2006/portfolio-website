import React, { useEffect, useState } from "react";
import Projects from "./Projects";
import Contact from "./Contact";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ProfileLogo from "../assets/profile.jpg";

const Home = () => {
  const [title, setTitle] = useState("Developer");

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle((prev) => (prev === "developer" ? "Dev." : "developer"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="bg-[#0b0f14] text-white pt-10">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center mt-8 md:mt-20 text-center md:text-left">
        
        {/* Left Box */}
        <div className="relative w-70 md:h-70  h-66 border-2 border-purple-600 rounded-md overflow-hidden mx-auto md:ml-auto">
          <img
            src={ProfileLogo}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mt-0">
            Hi, I’m Limo<span className="text-purple-600">.</span>
          </h2>

          <h3 className="text-3xl md:text-4xl text-purple-600 font-bold mt-2 transition-all duration-500">
            Frontend {title}
          </h3>
          

         <div className="text-gray-400 text-sm md:text-base md:mt-7 mt-3 max-w-md leading-relaxed text-center md:text-left">
  I build high-performance React E-commerce sites and business landing pages that help your business grow.
</div>


          {/* Icons */}
          <div className="flex justify-center md:justify-start gap-5 md:text-3xl text-2xl text-gray-400 md:mt-6 mt-3">
            <FaHtml5 />
            <FaCss3Alt />
            <FaJsSquare />
            <FaReact />
            <FaFigma />
            <FaGitAlt />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-5 md:mt-11 md:ml-8">
            <a href="#contact">
              <button
                className="
                  px-5 py-2.5 
                  border border-purple-500/40 
                  text-purple-600 text-sm font-semibold 
                  rounded-md
                  shadow-purple-500/10
                  transition duration-300
                  hover:text-white
                  hover:bg-purple-600
                  hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]
                  focus:outline-none
                  focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                "
              >
                Contact Me
              </button>
            </a>

            <a href="#projects">
              <button
                className="
                  px-5 py-2.5 
                  border border-purple-500/40 
                  text-purple-600 text-sm font-semibold 
                  rounded-md
                  shadow-purple-500/10
                  transition duration-300
                  hover:text-white
                  hover:bg-purple-600
                  hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]
                  focus:outline-none
                  focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                  cursor-pointer
                "
              >
                Projects
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-30 border-t border-gray-700 pt-5 pb-3 px-3 md:px-0">
  <div className="
    flex flex-wrap 
    justify-center 
    gap-x-3 gap-y-1.5 
    md:gap-6 
    text-[11px] md:text-sm
    text-gray-400 
    tracking-wider md:tracking-widest
  ">
    <span>WEB</span>
    <span>/</span>
    <span>PROGRAMMING</span>
    <span>/</span>
    <span>DEVELOPMENT</span>
    <span>/</span>
    <span>REACT</span>
    <span>/</span>
    <span>JAVASCRIPT</span>
    <span>/</span>
    <span>CSS</span>
    <span>/</span>
    <span>FIGMA</span>
    <span>/</span>
    <span>GIT</span>
    <span>/</span>
    <span>HTML.</span>
  </div>

  <div className="pt-4 md:block px-4 md:px-0">
    <p className="border-t border-gray-700"></p>
  </div>
</div>

    </section>
  );
};

export default Home;
