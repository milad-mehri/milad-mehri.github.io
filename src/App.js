import React, { useState, useEffect } from 'react';
import Intro from './components/Intro';
import Projects from './components/Projects';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`App min-h-screen ${darkMode ? 'dark' : ''}`}>
      <header >
        <button
          onClick={() => setDarkMode(!darkMode)}
        >
          Toggle Dark Mode
        </button>
      </header>

      <Intro />
      <Projects />
    </div>
  );
}

export default App;
