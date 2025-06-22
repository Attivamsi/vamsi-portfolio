import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300 max-w-4xl">
          I'm a Computer Science student at Mohan Babu University with a CGPA of 9.78.
          I love building efficient, beautiful web experiences and solving problems with Java and SQL.
          As a GDSC Coordinator, I’ve led workshops on Web Dev, ML, and Cloud that impacted 400+ students.
        </p>
      </motion.div>
    </section>
  );
}
