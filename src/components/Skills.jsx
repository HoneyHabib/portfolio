import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "HTML/CSS"],
  },
  {
    category: "Frontend",
    items: ["React", "Angular", "Tailwind CSS","Angular Material"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Flask", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub","GCP","AWS","SonarQube"],
  },
];

export default function Skills() {
  return (
    <section className="py-24 bg-neutral-800/95" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-12"
        >
          Skills & <span className="text-red-400">Technologies</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-neutral-800/95 border border-white/10 rounded-xl p-6 hover:border-red-500 transition"
            >
              <h3 className="text-lg font-semibold text-neutral-400 mb-4">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-neutral-700 text-gray-300 border border-white/10 hover:border-red-400 hover:text-red-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
