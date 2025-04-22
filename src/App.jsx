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

function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('language');
      return stored === 'en' ? 'en' : 'ro';
    }
    return 'ro';
  });

  const scrollToSection = (sectionId) => {
    if (typeof window !== 'undefined') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      <>
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