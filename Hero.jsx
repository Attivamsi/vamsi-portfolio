import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center h-screen text-center px-4">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}>
        Vamsi Atti
      </motion.h1>
      <motion.p 
        className="mt-4 text-xl md:text-2xl text-gray-300"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}>
        Java Developer | Full Stack Learner | GDSC Coordinator
      </motion.p>
      <motion.div 
        className="mt-6 space-x-4"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }}>
        {/* <button className="bg-blue-600 px-4 py-2 rounded text-white"><a href="/resume_2(2).pdf"></a> Download Resume</button> */}
        <a href="/resume.pdf" download className="bg-blue-600 px-4 py-2 rounded text-white inline-block">
  Download Resume
</a>
        {/* <button className="border px-4 py-2 rounded text-white">Contact Me</button> */}
        <a href="mailto:vamsivamsia7@gmail.com" className="border px-4 py-2 rounded text-white inline-block">
  Contact Me
</a>

      </motion.div>
    </section>
  );
}
