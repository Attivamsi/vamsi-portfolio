import React from "react";

export default function Skills() {
  const skills = [
    "Java", "SQL", "HTML, CSS, JS", "Bootstrap",
    "MySQL", "VS Code", "Git & GitHub"
  ];

  return (
    <section className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
        {skills.map((skill, i) => (
          <div key={i} className="bg-gray-800 rounded-xl p-4">{skill}</div>
        ))}
      </div>
    </section>
  );
}
