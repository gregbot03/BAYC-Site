import { useEffect } from 'react';

export default function StorePage() {
  useEffect(() => {
    window.location.href = 'https://store.boredapeyachtclub.com';
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--f-mono)',
        fontSize: '12px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
      }}
    >
      <p>Redirecting to store...</p>
    </div>
  );
}
