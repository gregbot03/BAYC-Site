import { useState } from 'react';

export default function ArchiveCard({ activation, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    card: {
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '12px',
      aspectRatio: '1',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      transform: isHovered ? 'scale(1.02)' : 'scale(1)',
      boxShadow: isHovered
        ? '0 8px 30px rgba(26, 26, 26, 0.15)'
        : '0 2px 10px rgba(26, 26, 26, 0.08)',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.4s ease',
      transform: isHovered ? 'scale(1.08)' : 'scale(1)',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to top, rgba(26, 26, 26, 0.8) 0%, rgba(26, 26, 26, 0) 50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '16px',
      opacity: isHovered ? 1 : 0,
      transition: 'opacity 0.3s ease',
    },
    title: {
      fontFamily: 'var(--f-sans)',
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--paper)',
      margin: 0,
      lineHeight: 1.3,
    },
    category: {
      fontFamily: 'var(--f-mono)',
      fontSize: '9px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: 'var(--paper)',
      opacity: 0.7,
      marginTop: '4px',
    },
  };

  return (
    <article
      style={styles.card}
      onClick={() => onClick(activation)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={activation.thumbnail}
        alt={activation.title}
        style={styles.image}
        loading="lazy"
      />
      <div style={styles.overlay}>
        <h3 style={styles.title}>{activation.title}</h3>
        <p style={styles.category}>{activation.category}</p>
      </div>
    </article>
  );
}
