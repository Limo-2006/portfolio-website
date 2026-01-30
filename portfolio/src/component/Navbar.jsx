import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass =
    "text-gray-300 hover:text-teal-400 transition cursor-pointer";

  return (
    <nav className="fixed top-0 w-full bg-[#0b0f14]  z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-white">
          Limo<span className="text-teal-400">.</span>
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          <a href="#home" className={linkClass}>Home</a>
          <a href="#about" className={linkClass}>About</a>
          <a href="#experience" className={linkClass}>Experience</a>
          <a href="#projects" className={linkClass}>Projects</a>
          <a href="#contact" className={linkClass}>Contact</a>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-[#0b0f14]">
          <a href="#home" onClick={() => setOpen(false)} className={linkClass}>Home</a>
          <a href="#about" onClick={() => setOpen(false)} className={linkClass}>About</a>
          <a href="#experience" onClick={() => setOpen(false)} className={linkClass}>Experience</a>
          <a href="#projects" onClick={() => setOpen(false)} className={linkClass}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)} className={linkClass}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
