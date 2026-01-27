import React, { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaFigma, FaGitAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Home = () => {

  const [title, setTitle] = useState("Developer");

useEffect(() => {
  const interval = setInterval(() => {
    setTitle((prev) => (prev === "developer" ? "Dev" : "developer"));
  }, 1000);

  return () => clearInterval(interval);
}, []);


  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">

      {/* Navbar */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">
        <h1 className="text-2xl font-bold font-serif">
          Limo<span className="text-purple-600">/</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-400">
         <NavLink to='about'> <li className="text-purple-600 border-b-2 border-purple-600 pb-1">About</li></NavLink>
        <NavLink to='experience'> <li className="hover:text-white cursor-pointer">Experience</li></NavLink>
         <NavLink to='project'> <li className="hover:text-white cursor-pointer">Projects</li></NavLink>
         <NavLink to='contact'> <li className="hover:text-white cursor-pointer">Contact</li></NavLink>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center mt-16">

        {/* Left Box */}
        <div className="relative w-72 h-72 border-2 border-purple-600 rounded-md flex items-end justify-end">
          <span className="absolute -bottom-6 -right-6 text-purple-600 text-5xl font-bold">
            {"</>"}
          </span>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl font-bold">
            Hi, I’m Limo<span className="text-purple-600">.</span>
          </h2>

          <h3 className="text-4xl text-purple-600 font-bold mt-2 transition-all duration-500">
  Frontend {title}
</h3>


          {/* Icons */}
          <div className="flex gap-5 text-3xl text-gray-400 mt-6">
            <FaHtml5 />
            <FaCss3Alt />
            <FaJsSquare />
            <FaReact />
            <FaFigma />
            <FaGitAlt />
          </div>

          {/* CTA Buttons */}
<div className="flex gap-4 mt-11 ml-8">
  <NavLink to="/contact">
    <button className="
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
">
  Contact Me
</button>

  </NavLink>

  <NavLink to="/project">
    <button className="
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
">
  Projects
</button>

  </NavLink>
</div>

      </div>

      </section>

      {/* Skills Strip */}
      <div className="mt-30 border-t border-gray-700 py-6">
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 tracking-widest text-sm">
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
        <div className="py-6">
        <p className="border-t border-gray-700 py-6"></p>
        </div>
      </div>

    </div>
  );
};

export default Home;
