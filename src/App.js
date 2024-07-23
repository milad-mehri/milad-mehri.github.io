import React, { useState, useEffect } from 'react';
import Intro from './components/Intro';
import Projects from './components/Projects';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`App min-h-screen fade-in ${darkMode ? 'dark' : ''}`}>
      <header className='text-right bg-gray-400 text-white dark:bg-gray-800'>
        <button className='p-3'
          onClick={() => setDarkMode(!darkMode)}
        >
          Toggle Dark Mode
        </button>
      </header>

      <Intro />
      <Projects />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .fade-in {
          animation: fadeIn 1s ease-in-out;
        }

        
      `}</style>
    </div>
  );
}

export default App;
