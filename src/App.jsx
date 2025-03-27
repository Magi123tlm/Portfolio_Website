import { useEffect, useRef, useState } from "react";
import "./App.css";
import ContactFooter from "./components/ContactFooter";
import Header from "./components/Header";
import ProjectSection from "./components/ProjectSection";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const projectNavigationRef = useRef();
  const contactNavigationRef = useRef();

  const scrollToAbout = (navigationRef) => {
    navigationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        toggleDarkMode={toggleDarkMode}
        projectNavigationRef={projectNavigationRef}
        contactNavigationRef={contactNavigationRef}
        scrollToAbout={scrollToAbout}
      />
      <ProjectSection
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        ref={projectNavigationRef}
      />
      <ContactFooter
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        ref={contactNavigationRef}
      />
    </>
  );
}

export default App;
