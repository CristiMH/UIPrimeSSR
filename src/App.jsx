import React, { useState, useEffect, Fragment } from "react";
import LanguageSelector from "./components/LanguageSelector";
import Top from "./components/Top";
import WorkSwiper from "./components/WorkSwiper";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import languageContext from "./contexts/languageContext";
import ScrollButton from "./components/ScrollButton";
import { motion, useScroll } from "motion/react"

function App() {
  const [language, setLanguage] = useState('ro');
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang)
      setLanguage(storedLang);
  }, [])

  const scrollToSection = (sectionId) => {
    if (typeof window !== 'undefined') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      <>
        <motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            originX: 0,
            backgroundColor: "#28b5af"
          }}
          className="z-[999]"
        />
        <LanguageSelector />
        <Top onScrollTo={scrollToSection} />
        <WorkSwiper />
        <Benefits onScrollTo={scrollToSection} />
        <Testimonials />
        <Pricing onScrollTo={scrollToSection} />
        <Contact onScrollTo={scrollToSection} />
        <ScrollButton />
      </>
    </languageContext.Provider>
  );
}

export default App;
