import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const outlinePosition = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-interactive], input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Separate effect for smooth outline following
  useEffect(() => {
    const animateOutline = () => {
      const speed = 0.08; // Slower for smoother effect
      
      outlinePosition.current.x += (position.x - outlinePosition.current.x) * speed;
      outlinePosition.current.y += (position.y - outlinePosition.current.y) * speed;
      
      animationRef.current = requestAnimationFrame(animateOutline);
    };

    animateOutline();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [position.x, position.y]);

  return (
    <div className="hidden md:block">
      {/* Main cursor dot - becomes transparent on hover */}
      <div
        className="cursor-dot"
        style={{
          left: position.x - 6,
          top: position.y - 6,
          transform: isClicking 
            ? 'scale(0.6)' 
            : isHovering 
              ? 'scale(2)' 
              : 'scale(1)',
          background: isClicking
            ? 'rgba(255, 255, 255, 0.8)'
            : isHovering 
              ? 'rgba(255, 255, 255, 0.1)' // Very transparent when hovering
              : 'rgba(255, 255, 255, 0.9)',
          border: isHovering 
            ? '1px solid rgba(255, 255, 255, 0.4)' 
            : 'none',
        }}
      />
      
      {/* Outline circle - becomes more transparent and larger on hover */}
      <div
        className="cursor-outline"
        style={{
          left: outlinePosition.current.x - 30,
          top: outlinePosition.current.y - 30,
          transform: isClicking 
            ? 'scale(0.8)' 
            : isHovering 
              ? 'scale(2)' 
              : 'scale(1)',
          borderColor: isHovering 
            ? 'rgba(255, 255, 255, 0.2)' // More transparent border
            : 'rgba(255, 255, 255, 0.3)',
          borderWidth: isHovering ? '1px' : '2px',
        }}
      />
    </div>
  );
};

export default CustomCursor;