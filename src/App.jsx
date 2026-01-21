import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Exp";
import FloatingSocial from "./components/FloatingSocials";
import { GlowProvider, useGlow } from "./context/GlowContext.jsx";
import BlendedGlow from "./components/BlendGlow";
import Publications from "./components/Publications.jsx";


export default function App() {
  return (
    <GlowProvider>
      {/* ✅ Now context exists */}
      <BlendedGlow />

      <div className="relative min-h-screen font-body">
        <Navbar />
        <FloatingSocial />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Publications/>
        <Contact />
      </div>
    </GlowProvider>
  );
}
