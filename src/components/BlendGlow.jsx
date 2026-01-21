import { motion } from "framer-motion";
import { useGlow } from "../context/GlowContext";

export default function BlendedGlow() {
  const { mouse } = useGlow();

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-10"
      animate={{
        background: `
          radial-gradient(
            380px at ${mouse.x}px ${mouse.y}px,
            rgba(247, 0, 16, 0.12),
            rgba(172, 11, 11, 0.08),
            transparent 75%
          )
        `,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
    />
  );
}
