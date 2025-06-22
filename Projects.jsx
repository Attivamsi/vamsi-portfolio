import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "To-Do List Web App",
      tech: "HTML, CSS, JavaScript",
      desc: "Responsive app with add/edit/delete and local storage for persistent tasks.",
    },
    {
      title: "Weather App (API)",
      tech: "JavaScript, OpenWeather API",
      desc: "Fetches and displays real-time weather info based on city input.",
    },
    {
      title: "Simon Says Game",
      tech: "JavaScript, DOM Animations",
      desc: "Interactive memory game using audio, color sequences, and logic.",
    },
    {
      title: "Mini Tools",
      tech: "HTML, CSS, JavaScript",
      desc: "Created Calculator, Text-to-Voice Generator, QR Code Generator, etc.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{proj.tech}</p>
            <p className="mb-4">{proj.desc}</p>
            <div className="space-x-4">
              <button className="bg-blue-600 px-4 py-2 rounded text-white">
                Live Demo
              </button>
              {/* <button className="border px-4 py-2 rounded text-white">GitHub</button> */}
              <a
                href="https://github.com/Attivamsi"
                target="_blank"
                // rel="noopener noreferrer"
                className="border px-4 py-2 rounded text-white inline-block"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
