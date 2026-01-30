import React, { useEffect, useState } from "react";
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
      setTitle((prev) => (prev === "developer" ? "Dev" : "developer"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="bg-[#0b0f14] text-white pt-10">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center mt-10 md:mt-16 text-center md:text-left">
        
        {/* Left Box */}
        <div className="relative w-70 h-70 border-2 border-purple-600 rounded-md overflow-hidden mx-auto md:ml-auto">
          <img
            src={ProfileLogo}
            alt="Profile"
            className="w-full h-full object-cover"
          />

          <span className="absolute -bottom-5 -right-5 text-purple-600 text-5xl font-bold">
            {"</>"}
          </span>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Hi, I’m Limo<span className="text-purple-600">.</span>
          </h2>

          <h3 className="text-3xl md:text-4xl text-purple-600 font-bold mt-2 transition-all duration-500">
            Frontend {title}
          </h3>

          {/* Icons */}
          <div className="flex justify-center md:justify-start gap-5 text-3xl text-gray-400 mt-6">
            <FaHtml5 />
            <FaCss3Alt />
            <FaJsSquare />
            <FaReact />
            <FaFigma />
            <FaGitAlt />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8 md:mt-11 md:ml-8">
            <NavLink to="/contact">
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
            </NavLink>

            <NavLink to="/project">
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
            </NavLink>
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

  <div className="pt-4 hidden md:block px-4 md:px-0">
    <p className="border-t border-gray-700"></p>
  </div>
</div>

    </section>
  );
};

export default Home;
