import { categories } from './archiveData';
import { useCategoryCounts } from '../../hooks/useActivations';

export default function FilterSidebar({ activeCategory, onCategoryChange }) {
  const { counts } = useCategoryCounts();

  const styles = {
    sidebar: {
      position: 'sticky',
      top: '100px',
      width: '220px',
      flexShrink: 0,
      padding: '16px',
      backgroundColor: 'var(--paper)',
      border: '1px solid rgba(26, 26, 26, 0.1)',
      borderRadius: '12px',
      height: 'fit-content',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    item: {
      marginBottom: '4px',
    },
    button: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 16px',
      background: 'transparent',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontFamily: 'var(--f-sans)',
      fontSize: '13px',
      fontWeight: 500,
      textAlign: 'left',
      transition: 'all 0.2s ease',
      color: 'var(--ink)',
    },
    buttonActive: {
      backgroundColor: 'var(--ink)',
      color: 'var(--paper)',
    },
    buttonHover: {
      backgroundColor: 'rgba(26, 26, 26, 0.05)',
    },
    label: {
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    count: {
      fontFamily: 'var(--f-mono)',
      fontSize: '12px',
      opacity: 0.7,
    },
    countActive: {
      opacity: 1,
    },
    divider: {
      height: '1px',
      backgroundColor: 'rgba(26, 26, 26, 0.1)',
      margin: '16px 0',
    },
    footer: {
      display: 'flex',
      gap: '8px',
      paddingTop: '8px',
    },
    iconButton: {
      width: '36px',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: '1px solid rgba(26, 26, 26, 0.15)',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      color: 'var(--ink)',
    },
  };

  // Format count with leading zero if needed
  const formatCount = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <aside style={styles.sidebar}>
      <ul style={styles.list}>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <li key={cat.id} style={styles.item}>
              <button
                style={{
                  ...styles.button,
                  ...(isActive ? styles.buttonActive : {}),
                }}
                onClick={() => onCategoryChange(cat.id)}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'rgba(26, 26, 26, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span style={styles.label}>{cat.label}</span>
                <span
                  style={{
                    ...styles.count,
                    ...(isActive ? styles.countActive : {}),
                  }}
                >
                  {formatCount(counts[cat.id] || 0)}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div style={styles.divider} />

      <div style={styles.footer}>
        <button
          style={styles.iconButton}
          title="Shuffle"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(26, 26, 26, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
          </svg>
        </button>
        <button
          style={styles.iconButton}
          title="Back"
          onClick={() => window.history.back()}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(26, 26, 26, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
