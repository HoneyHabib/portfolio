import { createContext, useContext, useEffect, useState } from "react";

const GlowContext = createContext(null);

export function GlowProvider({ children }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [variant, setVariant] = useState("hero");

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <GlowContext.Provider value={{ mouse, variant, setVariant }}>
      {children}
    </GlowContext.Provider>
  );
}

export function useGlow() {
  const ctx = useContext(GlowContext);
  if (!ctx) throw new Error("useGlow must be inside GlowProvider");
  return ctx;
}
