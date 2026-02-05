import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWallet } from '../../context/WalletContext';
import { EXTERNAL_URLS } from '../../services/constants';
import baycWordmark from '../../assets/bayc-wordmark.svg';

export default function Navigation({ onConnectClick }) {
  const location = useLocation();
  const { isConnected, address, disconnect } = useWallet();
  const [hoveredLink, setHoveredLink] = useState(null);

  const styles = {
    nav: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      fontFamily: 'var(--f-mono)',
      fontSize: '10px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      zIndex: 10,
      padding: '4vh 4vw 0',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    navGroup: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
    },
    navLink: {
      cursor: 'pointer',
      position: 'relative',
      paddingBottom: '2px',
      transition: 'all 0.3s ease',
      background: 'none',
      border: 'none',
      color: 'var(--ink)',
      fontFamily: 'var(--f-mono)',
      fontSize: '10px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      padding: 0,
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      transition: 'opacity 0.2s ease',
    },
    logoImg: {
      height: '24px',
      width: 'auto',
    },
  };

  const formatAddress = (addr) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const NavItem = ({ to, children, onClick, isButton = false }) => {
    const isHovered = hoveredLink === (to || children);
    const isActive = to && location.pathname === to;

    const style = {
      ...styles.navLink,
      textDecoration: isHovered ? 'line-through' : 'none',
      opacity: isActive ? 1 : 0.85,
    };

    if (isButton) {
      return (
        <button
          style={style}
          onMouseEnter={() => setHoveredLink(children)}
          onMouseLeave={() => setHoveredLink(null)}
          onClick={onClick}
        >
          {children}
        </button>
      );
    }

    return (
      <Link
        to={to}
        style={style}
        onMouseEnter={() => setHoveredLink(to)}
        onMouseLeave={() => setHoveredLink(null)}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.navGroup}>
        {isConnected ? (
          <NavItem isButton onClick={disconnect}>
            {formatAddress(address)}
          </NavItem>
        ) : (
          <NavItem isButton onClick={onConnectClick}>
            Connect Wallet
          </NavItem>
        )}
        <NavItem to="/archive">Archive</NavItem>
      </div>

      <div style={styles.navGroup}>
        <Link
          to="/"
          style={{
            ...styles.logo,
            opacity: hoveredLink === 'logo' ? 0.7 : 1,
          }}
          onMouseEnter={() => setHoveredLink('logo')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <img src={baycWordmark} alt="BAYC" style={styles.logoImg} />
        </Link>
      </div>

      <div style={styles.navGroup}>
        <NavItem to="/store">Store</NavItem>
        <NavItem to="/clubhouse">Clubhouse</NavItem>
        <NavItem to="/members">Members</NavItem>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginLeft: '0.5rem' }}>
          <a
            href={EXTERNAL_URLS.TWITTER}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--ink)', opacity: 0.5, transition: 'opacity 0.2s', display: 'flex' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.5)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href={EXTERNAL_URLS.INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--ink)', opacity: 0.5, transition: 'opacity 0.2s', display: 'flex' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.5)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href={EXTERNAL_URLS.DISCORD}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--ink)', opacity: 0.5, transition: 'opacity 0.2s', display: 'flex' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.5)}
          >
            <svg width="16" height="14" viewBox="0 0 71 55" fill="currentColor">
              <path d="M60.1 4.9A58.5 58.5 0 0 0 45.4.2a.2.2 0 0 0-.2.1 40.8 40.8 0 0 0-1.8 3.7 54 54 0 0 0-16.2 0A37.3 37.3 0 0 0 25.4.3a.2.2 0 0 0-.2-.1A58.4 58.4 0 0 0 10.5 5a.2.2 0 0 0-.1 0A60.4 60.4 0 0 0 .1 45.3a.3.3 0 0 0 0 .2 58.7 58.7 0 0 0 17.7 9a.2.2 0 0 0 .3-.1 42 42 0 0 0 3.6-5.9.2.2 0 0 0-.1-.3 38.7 38.7 0 0 1-5.5-2.6.2.2 0 0 1 0-.4l1.1-.9a.2.2 0 0 1 .2 0 41.9 41.9 0 0 0 35.6 0 .2.2 0 0 1 .2 0l1.1.9a.2.2 0 0 1 0 .3 36.4 36.4 0 0 1-5.5 2.7.2.2 0 0 0-.1.3 47.2 47.2 0 0 0 3.6 5.8.2.2 0 0 0 .3.1A58.5 58.5 0 0 0 70.5 45.5a.2.2 0 0 0 0-.2A60 60 0 0 0 60.2 5a.2.2 0 0 0-.1 0zM23.7 37.3c-3.5 0-6.4-3.2-6.4-7.1s2.8-7.1 6.4-7.1 6.5 3.2 6.4 7.1c0 3.9-2.8 7.1-6.4 7.1zm23.6 0c-3.5 0-6.4-3.2-6.4-7.1s2.8-7.1 6.4-7.1 6.5 3.2 6.4 7.1c0 3.9-2.9 7.1-6.4 7.1z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
