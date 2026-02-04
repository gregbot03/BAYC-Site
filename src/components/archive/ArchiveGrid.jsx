import ArchiveCard from './ArchiveCard';

export default function ArchiveGrid({ activations, onCardClick }) {
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '12px',
      width: '100%',
    },
    empty: {
      gridColumn: '1 / -1',
      textAlign: 'center',
      padding: '4rem 2rem',
      fontFamily: 'var(--f-mono)',
      fontSize: '12px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      opacity: 0.5,
    },
  };

  // Responsive grid columns via CSS media query injection
  const responsiveStyles = `
    @media (max-width: 1400px) {
      .archive-grid { grid-template-columns: repeat(4, 1fr) !important; }
    }
    @media (max-width: 1100px) {
      .archive-grid { grid-template-columns: repeat(3, 1fr) !important; }
    }
    @media (max-width: 768px) {
      .archive-grid { grid-template-columns: repeat(2, 1fr) !important; }
    }
    @media (max-width: 480px) {
      .archive-grid { grid-template-columns: 1fr !important; }
    }
  `;

  if (activations.length === 0) {
    return (
      <>
        <style>{responsiveStyles}</style>
        <div className="archive-grid" style={styles.grid}>
          <p style={styles.empty}>No activations found</p>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{responsiveStyles}</style>
      <div className="archive-grid" style={styles.grid}>
        {activations.map((activation) => (
          <ArchiveCard
            key={activation.id}
            activation={activation}
            onClick={onCardClick}
          />
        ))}
      </div>
    </>
  );
}
