
import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface TerminalProps {
  onClose: () => void;
}

export const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Welcome to Mohammed Ateeq Terminal v2.0',
    'Type "help" for available commands.',
    'Easter egg unlocked! 🎉',
    ''
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: 'Available commands: about, education, skills, projects, leadership, certifications, achievements, contact, morse, matrix, clear, exit',
    about: 'Mohammed Ateeq - B.Tech CSE | Data & Full-Stack Developer. CGPA: 8.88. Passionate about AI/ML and system optimization.',
    education: 'Anurag University (B.Tech CSE, CGPA: 8.88) | Narayana College (94.5%) | SSC (GPA: 10.0)',
    skills: 'Programming: Python, Java, C++, JavaScript | AI/ML: TensorFlow, Scikit-learn | Database: MongoDB, Oracle | Tools: Git, Figma, Tableau',
    projects: 'Featured: Face Liveness Detection (92% accuracy), Exam Hall Allotment (500+ seats), Morse Code Translator (95% accuracy)',
    leadership: 'Executive Chairperson - GeeksforGeeks | Organized Hacktivate (400+ participants) | Led 150+ coding questions | 200+ workshop attendees',
    certifications: 'IBM Data Science Professional | MongoDB Developer | Java/Python (Infosys) | UiPath RPA Foundation',
    achievements: '1st Place - Tech Hack III (Data Analytics) | Winner - Code Wars (200+ participants) | Runner-up - Code Maze (500+ participants)',
    contact: 'LinkedIn: /in/mohammed-ateeq | GitHub: /mohammed-ateeq | Email: mohammed.ateeq@email.com',
    morse: '-- --- .... .- -- -- . -..   .- - . . --.-   (Mohammed Ateeq in Morse Code!) 🎯',
    matrix: '🔴 You have been disconnected from the Matrix. Welcome to reality, Neo! The red pill reveals: This portfolio showcases real skills, not just code.',
    clear: '',
    exit: 'Thank you for exploring my digital portfolio! Goodbye! 👋'
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
