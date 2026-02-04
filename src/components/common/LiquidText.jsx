export default function LiquidText({ children, size = 'large' }) {
  const sizes = {
    large: 'clamp(100px, 25vw, 400px)',
    medium: 'clamp(60px, 15vw, 200px)',
    small: 'clamp(40px, 10vw, 120px)',
  };

  return (
    <div
      style={{
        fontSize: sizes[size],
        fontWeight: 900,
        lineHeight: 0.7,
        textAlign: 'center',
        filter: 'url(#liquid-filter)',
        color: 'var(--ink)',
        mixBlendMode: 'multiply',
        transform: 'scaleY(0.9)',
        userSelect: 'none',
        cursor: 'default',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </div>
  );
}
