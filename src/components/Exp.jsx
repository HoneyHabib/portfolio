import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "WNS, A part of Capgemini",
    duration: "2022 – Present",
    description: [
      "Built scalable, production-grade web applications for global logistics and shipping clients, driving measurable gains in operational efficiency.",
      "Led frontend architecture and delivery of complex internal GEN AI platforms, focusing on performance, maintainability, and long-term scalability.",
      "Re-architected data-intensive systems to remove scalability bottlenecks and enable multi-client usage while reducing platform costs.",
      "Designed reusable, configuration-driven UI components shared across applications, improving development velocity and consistency.",
      "Supported mission-critical production systems, resolving live issues and ensuring high availability and reliability."
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-24 bg-neutral-800" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-14"
        >
          Professional <span className="text-red-400">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-neutral-800/95 border border-white/10 rounded-xl p-8 hover:border-red-500 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-red-400">
                    {exp.role}
                  </h3>
                  <p className="text-neutral-400 font-medium">
                    {exp.company}
                  </p>
                </div>

                <span className="mt-2 md:mt-0 text-sm text-gray-400">
                  {exp.duration}
                </span>
              </div>

              <ul className="mt-6 space-y-2 text-gray-300 list-disc list-inside">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
