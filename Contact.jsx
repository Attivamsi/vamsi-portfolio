import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-20 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="text-gray-300 mb-4">
        I'm currently open to internships and entry-level opportunities!
      </p>
      <div className="flex justify-center space-x-6 text-2xl">
        <a href="mailto:vamsivamsia7@gmail.com" className="hover:text-blue-400"><FaEnvelope /></a>
        <a href="https://github.com/Attivamsi" target="_blank" rel="noreferrer" className="hover:text-gray-400"><FaGithub /></a>
        <a href="https://linkedin.com/in/atti-vamsi-29aa67260" target="_blank" rel="noreferrer" className="hover:text-blue-600"><FaLinkedin /></a>
      </div>
    </section>
  );
}
