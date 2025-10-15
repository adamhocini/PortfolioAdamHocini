import React, { useState, useRef } from 'react';

interface InteractiveGlowCardProps {
  className?: string;
  children: React.ReactNode;
}

const InteractiveGlowCard: React.FC<InteractiveGlowCardProps> = ({ className = '', children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const baseClasses = [
    'group relative overflow-hidden rounded-3xl border border-white/5',
    'bg-[#1D1826]/80 backdrop-blur-xl transition-all duration-500 ease-out',
  ].join(' ');

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`${baseClasses} ${isHovered ? 'scale-[1.015] shadow-[0_25px_50px_-25px_rgba(0,200,151,0.4)]' : ''} ${className}`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/[0.01] to-transparent opacity-70" />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(450px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 200, 151, 0.18), transparent 60%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#7538FF]/5 via-transparent to-[#00C897]/10 mix-blend-screen opacity-60" />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default InteractiveGlowCard;
