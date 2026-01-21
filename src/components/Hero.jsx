import { useEffect } from "react";
import { motion } from "framer-motion";


export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-neutral-800 pt-24 overflow-hidden">
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-red-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div> */}
        
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl px-6"
      >
        {/* <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Building <span className="text-red-400">scalable</span><br />
          <span className="text-neutral-500">web experiences</span>
        </h1> */}
        {/* <h1 className="text-5xl md:text-6xl font-bold text-white">
        Hi, I’m <span className="text-neutral-400">Honey Habib</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Software Engineer • Frontend Specialist • React Enthusiast
        </p> */}
                {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Hi, I’m{" "}
          <span className="text-white">Honey</span>{" "}
          <span className="text-red-400">Habib</span>
        </motion.h1>

        {/* Accent underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mx-auto mt-4 h-[3px] w-24 origin-left bg-red-400 rounded-full"
        />

        {/* Role / value */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-400"
        >
          Software Engineer building scalable web applications
        </motion.p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-neutral-700 text-white font-semibold rounded-lg hover:scale-105 hover:text-red-400 transition"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-red-500 text-neutral-400 rounded-lg hover:bg-red-400 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}
