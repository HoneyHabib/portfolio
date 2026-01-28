import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const socials = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    link: "https://github.com/honeyhabib",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/honey-habib-7721641b3/",
  },
  {
    icon: <SiLeetcode />,
    label: "LeetCode",
    link: "https://leetcode.com/u/HoneyHabib/",
  },
  {
    icon: <FaFilePdf />,
    label: "Download Resume",
    download: true,
  },
];

export default function FloatingSocial() {
  /* ---------------- Mobile scroll-aware logic ---------------- */
  const [showMobileBar, setShowMobileBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 80) {
        setShowMobileBar(false); // scrolling down
      } else {
        setShowMobileBar(true); // scrolling up
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  /* ---------------- Shared styles ---------------- */
  const baseBtn =
    "p-4 rounded-xl bg-neutral-700 border border-white/10 text-xl flex items-center justify-center";

  return (
    <>
      {/* ================= Desktop (Left Floating) ================= */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
        {socials.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative group"
          >
            {item.download ? (
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Honey_Habib.pdf"
                className={baseBtn}
              >
                <FaFilePdf className="text-white transition-colors group-hover:text-red-400" />
              </a>
            ) : (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={baseBtn}
              >
                <span className="text-white transition-colors group-hover:text-red-400">
                  {item.icon}
                </span>
              </a>
            )}

            {/* Tooltip */}
            <span
              className="
                absolute left-14 top-1/2 -translate-y-1/2
                px-2 py-1 rounded text-xs
                text-white bg-black/80
                whitespace-nowrap
                opacity-0 group-hover:opacity-100
                transition
              "
            >
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* ================= Mobile (Bottom Floating, Scroll Aware) ================= */}
      <AnimatePresence>
        {showMobileBar && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-50"
          >
            <div className="flex gap-4 bg-neutral-800/90 backdrop-blur px-4 py-3 rounded-2xl border border-white/10">
              {socials.map((item, i) => (
                <motion.div
                  key={i}
                  whileTap={{ scale: 0.9 }}
                  className="group"
                >
                  {item.download ? (
                    <a
                      href={`${import.meta.env.BASE_URL}resume.pdf`}
                      download="Honey_Habib.pdf"
                      className="p-3 rounded-xl bg-neutral-700 text-xl flex items-center justify-center"
                    >
                      <FaFilePdf className="text-white transition-colors group-active:text-red-400" />
                    </a>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-neutral-700 text-xl flex items-center justify-center"
                    >
                      <span className="text-white transition-colors group-active:text-red-400">
                        {item.icon}
                      </span>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
