export default function Button({
  children,
  onClick,
  href,
  variant = 'outline',
  size = 'medium',
  external = false,
  disabled = false,
  style: customStyle = {},
}) {
  const sizes = {
    small: { padding: '6px 12px', fontSize: '9px' },
    medium: { padding: '10px 20px', fontSize: '10px' },
    large: { padding: '14px 28px', fontSize: '11px' },
  };

  const variants = {
    outline: {
      background: 'transparent',
      border: '1px solid var(--ink)',
      color: 'var(--ink)',
    },
    filled: {
      background: 'var(--ink)',
      border: '1px solid var(--ink)',
      color: 'var(--paper)',
    },
  };

  const baseStyle = {
    ...variants[variant],
    ...sizes[size],
    fontFamily: 'var(--f-mono)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    ...customStyle,
  };

  const handleMouseEnter = (e) => {
    if (disabled) return;
    if (variant === 'outline') {
      e.currentTarget.style.background = 'var(--ink)';
      e.currentTarget.style.color = 'var(--paper)';
    } else {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--ink)';
    }
  };

  const handleMouseLeave = (e) => {
    if (disabled) return;
    e.currentTarget.style.background = variants[variant].background;
    e.currentTarget.style.color = variants[variant].color;
  };

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        style={baseStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        {external && (
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
            <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        )}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
