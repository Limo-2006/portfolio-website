import React from "react";
import { Code, Monitor, Server } from "lucide-react";

const About = () => {
  return (
    <section id="about" className=" bg-[#0b0f14] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">
          About Me<span className="text-purple-600">.</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Services */}
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-800 rounded-full">
                <Monitor className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-lg">Frontend Web Development</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-800 rounded-full">
                <Code className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-lg">React & UI Development</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-800 rounded-full">
                <Server className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-lg">Website Deployment & Git</span>
            </div>
          </div>

          {/* Right: About Text + Stats */}
          <div className="lg:w-2/3">
            <p className="mb-8 text-gray-400 leading-relaxed">
              I am a freelance-focused frontend web developer who enjoys
              building clean, responsive, and user-friendly interfaces.
              I work mainly with modern technologies like React and Tailwind
              CSS, focusing on performance and usability.
              <br /><br />
              I am currently building real-world projects and preparing
              professional workflows for freelance platforms like Upwork
              and Fiverr.
            </p>

            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-purple-600">10+</p>
                <p className="text-gray-400">Portfolio Projects</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-purple-600">1+</p>
                <p className="text-gray-400">Year Learning & Practice</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-purple-600">100%</p>
                <p className="text-gray-400">Focus on Quality UI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
