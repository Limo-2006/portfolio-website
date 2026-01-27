import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div
      className="bg-[#0b0f14] text-white px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-purple-600">Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have a project in mind or want to work together?  
            Feel free to reach out.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-purple-600" />
              <p className="text-gray-300">akhialam42218@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-purple-600" />
              <p className="text-gray-300">+880 1821835963</p>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-purple-600" />
              <p className="text-gray-300">Bangladesh</p>
            </div>

            <p className="text-gray-400 leading-relaxed">
              I’m a junior frontend developer focused on building clean,
              responsive and user-friendly websites using React & Tailwind CSS.
            </p>
          </div>

          {/* Right form */}
          <form className="bg-[#111827] p-2 rounded-xl space-y-2 shadow-md max-w-sm mx-auto">
  <input
    type="text"
    placeholder="Your Name"
    className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-400"
  />

  <input
    type="email"
    placeholder="Your Email"
    className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-purplr-400"
  />

  <textarea
    rows="4"
    placeholder="Your Message"
    className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-400 resize-none"
  ></textarea>

  <button
    type="submit"
    className="w-full bg-purple-500 hover:bg-purple-600 transition py-2.5 rounded-lg font-semibold"
  >
    Send Message
  </button>
</form>


        </div>
      </div>
    </div>
  );
};

export default Contact;
