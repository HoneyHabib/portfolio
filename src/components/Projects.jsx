import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "LeetSync",
      desc: "Chrome extension to auto-sync LeetCode solutions to GitHub.",
      longDesc:
        "A Chrome extension that automatically pushes accepted LeetCode solutions to GitHub with proper folder structure, commit messages, and language detection.",
      tech: ["JavaScript", "Node.js", "GitHub API","OAuth"],
      url: "https://github.com/HoneyHabib/LeetSync",
    },
    {
      title: "Stock Price Prediction",
      desc: "LSTM based Deep Learning model to predict stock prices.",
      longDesc:
        "A LSTM model that predicts stock prices using Real world historical data .",
      tech: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
      url: "https://github.com/HoneyHabib/Stock-price-forecasting",
    },
    {
      title: "Gaming AI",
      desc: "AI agent for playing games using reinforcement learning.",
      longDesc:
        "A Deep Q-Learning AI agent trained using reinforcement learning to play classic Retro games.",
      tech: ["Python", "TensorFlow", "OpenAI Gym"],
      url: "https://github.com/HoneyHabib/GAMING-AI-using-deep-reinforcement-learning-for-retro-games",
    },
    {
      title: "Sign Language Recognizer",
      desc: "AI model to recognize sign language in real time using action-detection.",
      longDesc:
        "Long Short-Term Memory (LSTM) networks to interpret sign language gestures through keypoints derived from data. By processing sequences of video frames, this model accurately detects and classifies gestures based on their actions.This project provides a robust solution for real-time sign language recognition.",
      tech: ["Python", "OpenCV", "TensorFlow", "Keras"],
      url: "https://github.com/HoneyHabib/Stock-price-forecasting",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React, Tailwind & Framer Motion.",
      longDesc:
        "A modern, animated portfolio showcasing projects, experience, and skills with smooth transitions, glow effects, and responsive design.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      url: "https://github.com/HoneyHabib/portfolio",
    },
  ];

  return (
    <section className="py-24 relative bg-neutral-800" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-10">
          Selected <span className="text-red-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setActiveProject(p)}
              className="cursor-pointer bg-neutral-800/95 border border-white/10 rounded-xl p-6
                        hover:border-red-500 transition"
            >
              <h3 className="text-xl font-semibold text-neutral-400">
                {p.title}
              </h3>

              <p className="mt-3 text-white">{p.desc}</p>
              {/* Bottom hint area */}
              <div className="mt-4 flex items-center gap-2 text-sm text-white">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 hover:text-red-400 transition"
                  aria-label="View on GitHub"
                >
                  <FaGithub className="text-2xl" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="relative bg-neutral-700 border border-white/10 rounded-2xl p-8
                         max-w-lg w-full mx-4"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold text-white">
                {activeProject.title}
              </h3>

              <p className="mt-4 text-white leading-relaxed">
                {activeProject.longDesc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {activeProject.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-white/5
                               text-gray-300 border border-white/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
