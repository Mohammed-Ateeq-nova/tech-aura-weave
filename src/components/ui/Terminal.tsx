
import React, { useState, useEffect, useRef } from 'react';
import { X, Minus, Square } from 'lucide-react';

interface TerminalProps {
  onClose: () => void;
}

export const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Welcome to Mohammed Ateeq Terminal v2.0',
    'Type "help" for available commands.',
    ''
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: 'Available commands: about, skills, projects, contact, clear, matrix, exit',
    about: 'Mohammed Ateeq - Full Stack Developer & AI Specialist. Passionate about creating innovative solutions with cutting-edge technology.',
    skills: 'React | Node.js | Python | AI/ML | MongoDB | AWS | Docker | TypeScript',
    projects: 'Featured: Face Liveness Detection, E-Commerce Platform, Analytics Dashboard, Neural Network Visualizer',
    contact: 'Email: mohammed.ateeq@email.com | Phone: +1 (555) 123-4567',
    matrix: '🔴 Welcome to the Matrix, Neo. You have unlocked the hidden terminal!',
    clear: '',
    exit: 'Goodbye! Thanks for exploring my portfolio.'
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    let output = '';

    if (command === 'clear') {
      setHistory([]);
      return;
    }

    if (command === 'exit') {
      setHistory(prev => [...prev, `> ${cmd}`, commands[command]]);
      setTimeout(onClose, 1000);
      return;
    }

    if (command in commands) {
      output = commands[command as keyof typeof commands];
    } else if (command === '') {
      output = '';
    } else {
      output = `Command not found: ${command}. Type "help" for available commands.`;
    }

    setHistory(prev => [...prev, `> ${cmd}`, output, '']);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-cyber-dark border-2 border-neon-green rounded-lg shadow-2xl w-full max-w-4xl h-96 flex flex-col animate-scale-in">
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg border-b border-neon-green/30">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-neon-green font-mono text-sm">mohammed@portfolio:~$</span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {/* Terminal Content */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-sm">
          {history.map((line, index) => (
            <div key={index} className={`${line.startsWith('>') ? 'text-neon-blue' : 'text-neon-green'} whitespace-pre-wrap`}>
              {line}
            </div>
          ))}
          
          {/* Input Line */}
          <div className="flex items-center mt-2">
            <span className="text-neon-blue mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-neon-green outline-none border-none caret-neon-green"
              autoFocus
            />
            <span className="w-2 h-5 bg-neon-green animate-blink ml-1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
