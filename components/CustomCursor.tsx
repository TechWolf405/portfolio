"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setTrail((prevTrail) => [...prevTrail.slice(-20), { x: e.clientX, y: e.clientY }]);
    };

    const handleMouseEnterInteractive = () => setIsHovering(true);
    const handleMouseLeaveInteractive = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);

    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive);
      el.addEventListener('mouseleave', handleMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor with Glow Effect */}
      <motion.div 
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(8px)'
        }}
        animate={{
          width: isHovering ? 80 : 30,
          height: isHovering ? 80 : 30,
          backgroundColor: isHovering ? 'rgba(0, 204, 255, 0.4)' : 'rgba(255, 255, 255, 0.3)',
          border: isHovering ? '2px solid rgba(0, 204, 255, 0.8)' : '2px solid rgba(255, 255, 255, 0.6)',
          boxShadow: isHovering ? '0 0 20px rgba(0, 204, 255, 0.7)' : '0 0 10px rgba(255, 255, 255, 0.5)'
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20
        }}
      />

      {/* Trail Effect */}
      {trail.map((pos, index) => (
        <motion.div 
          key={index}
          className="fixed pointer-events-none z-[9998] rounded-full"
          style={{
            left: pos.x,
            top: pos.y,
            transform: 'translate(-50%, -50%)',
            width: `${10 - index * 0.3}px`,
            height: `${10 - index * 0.3}px`,
            backgroundColor: 'rgba(0, 204, 255, 0.1)',
            filter: 'blur(6px)'
          }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </>
  );
}
