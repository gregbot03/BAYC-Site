import { useState, useEffect } from 'react';

export default function LiquidText({ children, size = 'large' }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sizes = {
    large: isMobile ? 'clamp(48px, 18vw, 120px)' : 'clamp(100px, 25vw, 400px)',
    medium: isMobile ? 'clamp(36px, 12vw, 80px)' : 'clamp(60px, 15vw, 200px)',
    small: isMobile ? 'clamp(28px, 10vw, 60px)' : 'clamp(40px, 10vw, 120px)',
  };

  return (
    <div
      style={{
        fontSize: sizes[size],
        fontWeight: 900,
        lineHeight: 0.85,
        textAlign: 'center',
        filter: isMobile ? 'none' : 'url(#liquid-filter)',
        color: 'var(--ink)',
        mixBlendMode: isMobile ? 'normal' : 'multiply',
        transform: 'scaleY(0.9)',
        userSelect: 'none',
        cursor: 'default',
      }}
    >
      {children}
    </div>
  );
}
