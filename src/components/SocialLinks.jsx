import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SocialLinks() {
  return (
    <div className="flex gap-6 mt-8">
      <motion.a
        href="https://github.com/honeyhabib"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4, scale: 1.1 }}
        className="text-gray-400 hover:text-red-400 transition"
      >
        <FaGithub size={28} />
      </motion.a>

      <motion.a
        href="https://linkedin.com/in/honeyhabib"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4, scale: 1.1 }}
        className="text-gray-400 hover:text-neutral-400 transition"
      >
        <FaLinkedin size={28} />
      </motion.a>
    </div>
  );
}
