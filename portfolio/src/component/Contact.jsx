// import React from "react";
// import { Mail, Phone, MapPin } from "lucide-react";

// const Contact = () => {
//   return (
//     <section id="contact"
//       className="bg-[#0b0f14] text-white px-6 py-20"
//     >
//       <div className="max-w-5xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Contact <span className="text-purple-600">Me</span>
//           </h2>
//           <p className="text-gray-400 mt-4 max-w-xl mx-auto">
//             Have a project in mind or want to work together?  
//             Feel free to reach out.
//           </p>
//         </div>

//         {/* Content */}
//         <div className="grid md:grid-cols-2 gap-10">
          
//           {/* Left info */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-4">
//   <Mail className="text-purple-600" />
//   <a
//   href="mailto:akhialam42218@gmail.com?subject=Project Inquiry&body=Hello, I want to discuss a project with you."
//   className="text-gray-300 hover:text-purple-400"
// >
//   akhialam42218@gmail.com
// </a>

// </div>


//             <div className="flex items-center gap-4">
//   <Phone className="text-purple-600" />
//   <a
//     href="https://wa.me/8801821835963"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-gray-300 hover:text-purple-400"
//   >
//     +880 1821835963 (WhatsApp)
//   </a>
// </div>

//             <div className="flex items-center gap-4">
//               <MapPin className="text-purple-600" />
//               <p className="text-gray-300">Bangladesh</p>
//             </div>

//             <p className="text-gray-400 leading-relaxed">
//                 I build high-performance React E-commerce sites and business landing pages that help your business grow.

//             </p>
//           </div>

//           {/* Right form */}
//           <form className="bg-[#111827] p-2 rounded-xl space-y-2 shadow-md max-w-sm mx-auto">
//   <input
//     type="text"
//     placeholder="Your Name"
//     className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-400"
//   />

//   <input
//     type="email"
//     placeholder="Your Email"
//     className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-purplr-400"
//   />

//   <textarea
//     rows="4"
//     placeholder="Your Message"
//     className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-400 resize-none"
//   ></textarea>

//   <button
//     type="submit"
//     className="w-full bg-purple-500 hover:bg-purple-600 transition py-2.5 rounded-lg font-semibold"
//   >
//     Send Message
//   </button>
// </form>


//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;




import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_hx67kw5",    // Replace with your EmailJS Service ID
        "template_amkkxw5",   // Replace with your Template ID
        templateParams,
        "ESzRC73xGbdL4FE8L"     // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
          setLoading(false);
        },
        (err) => {
          alert("Failed to send message. Check console.");
          setLoading(false);
        }
      );
  };

  return (
    
    <section id="contact" className="bg-[#0b0f14] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-purple-600">Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have a project in mind or want to work together? Feel free to reach out.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-purple-600" />
              <a
                href="mailto:akhialam42218@gmail.com"
                className="text-gray-300 hover:text-purple-400"
              >
                akhialam42218@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-purple-600" />
              <a
                href="https://wa.me/8801821835963"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400"
              >
                +880 1821835963 (WhatsApp)
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-purple-600" />
              <p className="text-gray-300">Bangladesh</p>
            </div>

            <p className="text-gray-400 leading-relaxed">
              I build high-performance React E-commerce sites and business landing pages that help your business grow.
            </p>
          </div>

          {/* Right form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#111827] p-4 rounded-xl space-y-4 shadow-md max-w-sm mx-auto"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-400"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-400 resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-500 hover:bg-purple-600 transition py-2.5 rounded-lg font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
