import React, { useState, useEffect } from 'react';
import Intro from './components/Intro';
import Projects from './components/Projects';

import './App.css';
import Experience from './components/Experience';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    }
  }, []);

  // Apply dark mode and store preference
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="App min-h-screen fade-in">
      <header className="text-right bg-gray-400 text-white dark:bg-gray-800">
        {/* <button
          className="p-3"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button> */}
      </header>

      <Intro />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
