import { categories } from './archiveData';

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'center',
      marginBottom: '3rem',
    },
    button: {
      background: 'transparent',
      border: 'none',
      fontFamily: 'var(--f-mono)',
      fontSize: '10px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      cursor: 'pointer',
      padding: '8px 16px',
      transition: 'all 0.2s ease',
      color: 'var(--ink)',
    },
  };

  return (
    <div style={styles.container}>
      {categories.map((cat) => (
        <button
          key={cat.id}
          style={{
            ...styles.button,
            borderBottom: activeCategory === cat.id ? '1px solid var(--ink)' : '1px solid transparent',
            opacity: activeCategory === cat.id ? 1 : 0.6,
          }}
          onClick={() => onCategoryChange(cat.id)}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            if (activeCategory !== cat.id) {
              e.currentTarget.style.opacity = '0.6';
            }
          }}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
