import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRIMARY = ["about", "experience", "skills"];
const SECONDARY = ["projects", "publications", "contact"];
const ALL = [...PRIMARY, ...SECONDARY];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY + window.innerHeight / 2;

      for (const sec of ALL) {
        const el = document.getElementById(sec);
        if (!el) continue;

        if (pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(sec);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const close = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-800/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-red-400">
          HH<span className="text-neutral-500">.</span>
        </h1>

        {/* ================= DESKTOP ================= */}
        <ul className="hidden lg:flex gap-8 text-sm font-medium">
          {ALL.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className={`relative transition ${
                  active === sec
                    ? "text-red-400"
                    : "text-gray-300 hover:text-red-400"
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
                {active === sec && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-400 rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden flex items-center gap-4">

          {/* Primary links */}
          {PRIMARY.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`text-sm font-medium transition ${
                active === sec
                  ? "text-red-400"
                  : "text-gray-300 hover:text-red-400"
              }`}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}

          {/* More button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-gray-300 text-xl px-2"
            aria-label="Open menu"
          >
             ⋮
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute right-6 top-full mt-2 w-44 rounded-xl bg-neutral-900 border border-white/10 shadow-lg overflow-hidden"
          >
            {SECONDARY.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 text-sm transition ${
                  active === sec
                    ? "text-red-400 bg-white/5"
                    : "text-gray-300 hover:bg-white/5 hover:text-red-400"
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
