import React from "react";
import { Briefcase, Code, Users } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience"
      className="bg-[#0b0f14] text-white px-6 py-16 overflow-x-hidden"
    >
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Experience<span className="text-purple-400">.</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-sm">
          My journey as a freelance-focused frontend developer, building
          real-world projects and client-ready web solutions.
        </p>
      </header>

      {/* Cards */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card */}
        <div className="bg-[#10151c] p-6 rounded-xl border border-transparent 
                        hover:border-purple-500/40 
                        hover:shadow-lg hover:shadow-purple-500/10 
                        transition duration-300">
          <div className="flex items-center mb-3">
            <Briefcase size={18} className="text-purple-400 mr-2" />
            <h2 className="text-lg font-semibold">
              Freelance Frontend Developer
            </h2>
          </div>

          <p className="text-xs text-purple-300 mb-3">2024 – Present</p>

          <p className="text-gray-400 text-base mb-4 leading-relaxed">
            Building responsive and client-ready websites using modern frontend
            technologies.
          </p>

          <ul className="space-y-2 text-gray-300 text-base list-disc list-inside">
            <li>HTML, CSS, JavaScript & React</li>
            <li>E-commerce UI & landing pages</li>
            <li>Cart, filtering & search</li>
            <li>Git & GitHub workflow</li>
          </ul>
        </div>

        {/* Card */}
        <div className="bg-[#10151c] p-6 rounded-xl border border-transparent 
                        hover:border-purple-500/40 
                        hover:shadow-lg hover:shadow-purple-500/10 
                        transition duration-300">
          <div className="flex items-center mb-3">
            <Code size={18} className="text-purple-400 mr-2" />
            <h2 className="text-lg font-semibold">
              Project-Based Experience
            </h2>
          </div>

          <p className="text-xs text-purple-300 mb-3">2023 – 2024</p>

          <p className="text-gray-400 text-base mb-4 leading-relaxed">
            Hands-on practice through real-world projects to strengthen frontend
            and UI skills.
          </p>

          <ul className="space-y-2 text-gray-300 text-base list-disc list-inside">
            <li>Calculator, Quiz & checker apps</li>
            <li>Music & product landing pages</li>
            <li>Responsive & mobile-first UI</li>
            <li>Reusable components</li>
          </ul>
        </div>

        {/* Card */}
        <div className="bg-[#10151c] p-6 rounded-xl border border-transparent 
                        hover:border-purple-500/40 
                        hover:shadow-lg hover:shadow-purple-500/10 
                        transition duration-300">
          <div className="flex items-center mb-3">
            <Users size={18} className="text-purple-400 mr-2" />
            <h2 className="text-lg font-semibold">
              Client-Focused Workflow
            </h2>
          </div>

          <p className="text-xs text-purple-300 mb-3">
            Freelancing Preparation
          </p>

          <p className="text-gray-400 text-base mb-4 leading-relaxed">
            Refining professional workflow and communication for freelance
            projects.
          </p>

          <ul className="space-y-2 text-gray-300 text-base list-disc list-inside">
            <li>Client-first UI mindset</li>
            <li>Clean structure & docs</li>
            <li>Performance-focused delivery</li>
            <li>Upwork & Fiverr ready</li>
          </ul>
        </div>

      </main>
    </section>
  );
};

export default Experience;
