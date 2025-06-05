
import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: (isDark: boolean) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={() => onToggle(!isDark)}
      className="fixed top-20 right-4 z-50 p-3 glass-effect rounded-full border border-gray-600/30 hover:border-neon-blue/50 transition-all duration-300 hover:scale-110"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-yellow-400 animate-glow" />
      ) : (
        <Moon className="w-6 h-6 text-neon-blue animate-glow" />
      )}
    </button>
  );
};
