import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Pinpoint from './components/Pinpoint';
import './App.css';

const AppContent = () => {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

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

  // If on the /pinpoint route, only render the Pinpoint component
  if (window.location.hash === '#/pinpoint') {
    return <Pinpoint />;
  }

  // Original app content for all other routes
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
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/pinpoint" element={<Pinpoint />} />
      </Routes>
    </Router>
  );
}

export default App;
