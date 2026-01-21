import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const socials = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    link: "https://github.com/honeyhabib",
    hover: "group-hover:text-red-400",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/honey-habib-7721641b3/",
    hover: "group-hover:text-red-400",
  },
  {
    icon: <SiLeetcode />,
    label: "LeetCode",
    link: "https://leetcode.com/u/HoneyHabib/",
    hover: "group-hover:text-red-400",
  },
  {
    icon: <FaFilePdf />,
    label: "Download Resume",
    download: true,
  },
];

export default function FloatingSocial() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "resume.pdf";
    link.download = "Honey_Habib.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hidden text-white lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
      {socials.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative group"
        >
          {item.download ? (
            <button
              onClick={downloadResume}
              className="
                p-4 rounded-xl
                bg-neutral-700
                border border-white/10
                text-xl
                text-white
                flex items-center justify-center
                appearance-none
                outline-none
                transition-colors
                group-hover:text-red-400
              "
            >
              <FaFilePdf />
            </button>
          ) : (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-4 rounded-xl
                bg-neutral-700
                border border-white/10
                text-xl
                text-white-400
                flex items-center justify-center
                transition-colors
              "
            >
              <span className={item.hover}>{item.icon}</span>
            </a>
          )}

          {/* Tooltip */}
          <span
            className="
              absolute left-14 top-1/2 -translate-y-1/2
              px-2 py-1 rounded
              text-xs text-white
              bg-black/80
              whitespace-nowrap
              opacity-0
              group-hover:opacity-100
              transition
            "
          >
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
