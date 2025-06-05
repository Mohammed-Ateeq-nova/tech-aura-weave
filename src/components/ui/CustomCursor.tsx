
import React, { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    
    if (!cursor || !trail) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
      
      // Trail effect with delay
      setTimeout(() => {
        trail.style.left = `${clientX}px`;
        trail.style.top = `${clientY}px`;
      }, 100);
    };

    const handleMouseDown = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    };

    const handleMouseUp = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.8) 0%, rgba(139, 92, 246, 0.4) 70%, transparent 100%)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s ease'
        }}
      />
      
      {/* Trail Effect */}
      <div
        ref={trailRef}
        className="fixed w-8 h-8 pointer-events-none z-[9998] opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 65, 0.6) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease'
        }}
      />
    </>
  );
};
