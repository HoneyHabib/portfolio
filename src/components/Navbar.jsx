import { useEffect, useState } from "react";

const sections = ["about", "skills", "experience", "projects", "publications", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("about");

useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    let currentSection = active;

    for (const section of sections) {
      const el = document.getElementById(section);
      if (!el) continue;

      const top = el.offsetTop;
      const bottom = top + el.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        currentSection = section;
        break;
      }
    }

    if (currentSection !== active) {
      setActive(currentSection);
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, [active]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-800/95 backdrop-blur border-b border-white/10 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-red-400">
          HH<span className="text-neutral-500">.</span>
        </h1>

        {/* Nav Links */}
        <ul className="flex gap-8 text-sm font-medium">
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className={`transition relative ${
                  active === sec
                    ? "text-red-400"
                    : "text-gray-300 hover:text-red-400"
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}

                {/* Active underline */}
                {active === sec && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-400 rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
