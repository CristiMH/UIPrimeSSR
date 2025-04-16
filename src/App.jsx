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
  const [language, setLanguage] = useState('');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage === 'en') setLanguage('en');
    else setLanguage('ro');
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      <Fragment>
        {
          hasMounted && (
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
          )
        }
      </Fragment>
    </languageContext.Provider>
  );
}

export default App;
