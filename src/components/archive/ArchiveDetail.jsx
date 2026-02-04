import { Modal, Button } from '../common';

export default function ArchiveDetail({ activation, isOpen, onClose }) {
  if (!activation) return null;

  const styles = {
    image: {
      width: '100%',
      maxHeight: '300px',
      objectFit: 'cover',
      marginBottom: '20px',
    },
    meta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
      paddingBottom: '16px',
      borderBottom: '1px solid var(--ink)',
    },
    category: {
      fontFamily: 'var(--f-mono)',
      fontSize: '10px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      opacity: 0.6,
    },
    year: {
      fontFamily: 'var(--f-mono)',
      fontSize: '10px',
      opacity: 0.6,
    },
    description: {
      fontSize: '14px',
      lineHeight: 1.7,
      marginBottom: '24px',
    },
    links: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
    },
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={activation.title}>
      <img
        src={activation.thumbnail}
        alt={activation.title}
        style={styles.image}
      />
      <div style={styles.meta}>
        <span style={styles.category}>{activation.category}</span>
        <span style={styles.year}>{activation.year}</span>
      </div>
      <p style={styles.description}>{activation.description}</p>
      {activation.links && activation.links.length > 0 && (
        <div style={styles.links}>
          {activation.links.map((link, index) => (
            <Button key={index} href={link.url} external size="small">
              {link.label}
            </Button>
          ))}
        </div>
      )}
    </Modal>
  );
}
