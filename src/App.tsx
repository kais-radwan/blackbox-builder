import { useEffect, useState } from "react";
import "./App.css";
import { Clone } from "./components/clone";
import { Figma } from "./components/figma";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Proof } from "./components/proof";
import { Screenshots } from "./components/screenshots";

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const totalSections = 4;

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(
        ".section",
      ) as NodeListOf<HTMLElement>;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll(
      ".section",
    ) as NodeListOf<HTMLElement>;
    sections[index].scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(index);
  };

  return (
    <>
      <Header />
      <div className="scroll-indicator">
        {[...Array(totalSections)].map((_, index) => (
          <div
            key={index}
            className={`dot transition-all duration-1000 ${activeSection === index ? "active" : ""}`}
            onClick={() => scrollToSection(index)}
          />
        ))}
      </div>

      <div className="section">
        <Hero />
      </div>

      <div className="mt-36 md:mt-56"></div>
      <Proof />

      <div className="section">
        <Figma />
      </div>

      <div className="section">
        <Clone />
      </div>

      <div className="section">
        <Screenshots />
      </div>
    </>
  );
}

export default App;
