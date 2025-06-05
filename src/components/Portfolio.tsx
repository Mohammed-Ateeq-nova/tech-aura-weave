
import React, { useEffect, useState } from 'react';
import { Hero } from './sections/Hero';
import { Education } from './sections/Education';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Leadership } from './sections/Leadership';
import { Certifications } from './sections/Certifications';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';
import { Navigation } from './ui/Navigation';
import { CustomCursor } from './ui/CustomCursor';
import { MatrixRain } from './ui/MatrixRain';
import { Terminal } from './ui/Terminal';
import { ThemeToggle } from './ui/ThemeToggle';

export const Portfolio = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Konami code easter egg: ↑↑↓↓←→←→BA
    const konamiCode = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA'
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setShowTerminal(true);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }

      // Alternative terminal trigger with ~ key
      if (e.key === '~') {
        setShowTerminal(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen relative ${isDarkMode ? 'dark' : ''}`}>
      <CustomCursor />
      <MatrixRain />
      
      <Navigation />
      <ThemeToggle isDark={isDarkMode} onToggle={setIsDarkMode} />
      
      <main className="relative z-10">
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Leadership />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {showTerminal && (
        <Terminal onClose={() => setShowTerminal(false)} />
      )}
    </div>
  );
};
