import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWallet } from '../../context/WalletContext';
import { EXTERNAL_URLS } from '../../services/constants';

export default function MobileNav({ onConnectClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isConnected, address, disconnect } = useWallet();

  const formatAddress = (addr) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const styles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '20px',
      backgroundColor: 'var(--paper)',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontFamily: 'var(--f-sans)',
      fontSize: '14px',
      fontWeight: 900,
      letterSpacing: '-0.5px',
    },
    menuButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    },
    menuLine: {
      width: '20px',
      height: '2px',
      backgroundColor: 'var(--ink)',
      transition: 'all 0.3s ease',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'var(--paper)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem',
      zIndex: 999,
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? 'auto' : 'none',
      transition: 'opacity 0.3s ease',
    },
    navLink: {
      fontFamily: 'var(--f-mono)',
      fontSize: '12px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: 'var(--ink)',
      padding: '12px 24px',
      transition: 'opacity 0.2s ease',
    },
    closeButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
    },
    walletButton: {
      background: 'none',
      border: '1px solid var(--ink)',
      fontFamily: 'var(--f-mono)',
      fontSize: '10px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      padding: '12px 24px',
      cursor: 'pointer',
      marginTop: '2rem',
      color: 'var(--ink)',
    },
  };

  return (
    <div className="mobile-nav" style={styles.container}>
      <div style={styles.header}>
        <Link to="/" style={styles.logo}>BAYC</Link>
        <button style={styles.menuButton} onClick={() => setIsOpen(true)}>
          <span style={styles.menuLine}></span>
          <span style={styles.menuLine}></span>
          <span style={styles.menuLine}></span>
        </button>
      </div>

      <div style={styles.overlay}>
        <button style={styles.closeButton} onClick={() => setIsOpen(false)}>
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="var(--ink)" strokeWidth="2">
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </button>

        <Link
          to="/"
          style={{
            ...styles.navLink,
            opacity: location.pathname === '/' ? 1 : 0.6,
          }}
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link
          to="/archive"
          style={{
            ...styles.navLink,
            opacity: location.pathname === '/archive' ? 1 : 0.6,
          }}
          onClick={handleLinkClick}
        >
          Archive
        </Link>
        <Link
          to="/store"
          style={{
            ...styles.navLink,
            opacity: location.pathname === '/store' ? 1 : 0.6,
          }}
          onClick={handleLinkClick}
        >
          Store
        </Link>
        <Link
          to="/clubhouse"
          style={{
            ...styles.navLink,
            opacity: location.pathname === '/clubhouse' ? 1 : 0.6,
          }}
          onClick={handleLinkClick}
        >
          Clubhouse
        </Link>
        <Link
          to="/members"
          style={{
            ...styles.navLink,
            opacity: location.pathname === '/members' ? 1 : 0.6,
          }}
          onClick={handleLinkClick}
        >
          Members
        </Link>

        {isConnected ? (
          <button
            style={styles.walletButton}
            onClick={() => {
              disconnect();
              setIsOpen(false);
            }}
          >
            {formatAddress(address)} — Disconnect
          </button>
        ) : (
          <button
            style={styles.walletButton}
            onClick={() => {
              onConnectClick();
              setIsOpen(false);
            }}
          >
            Connect Wallet
          </button>
        )}

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginTop: '2rem' }}>
          <a href={EXTERNAL_URLS.TWITTER} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', opacity: 0.6 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href={EXTERNAL_URLS.INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', opacity: 0.6 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href={EXTERNAL_URLS.DISCORD} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', opacity: 0.6 }}>
            <svg width="20" height="18" viewBox="0 0 71 55" fill="currentColor">
              <path d="M60.1 4.9A58.5 58.5 0 0 0 45.4.2a.2.2 0 0 0-.2.1 40.8 40.8 0 0 0-1.8 3.7 54 54 0 0 0-16.2 0A37.3 37.3 0 0 0 25.4.3a.2.2 0 0 0-.2-.1A58.4 58.4 0 0 0 10.5 5a.2.2 0 0 0-.1 0A60.4 60.4 0 0 0 .1 45.3a.3.3 0 0 0 0 .2 58.7 58.7 0 0 0 17.7 9a.2.2 0 0 0 .3-.1 42 42 0 0 0 3.6-5.9.2.2 0 0 0-.1-.3 38.7 38.7 0 0 1-5.5-2.6.2.2 0 0 1 0-.4l1.1-.9a.2.2 0 0 1 .2 0 41.9 41.9 0 0 0 35.6 0 .2.2 0 0 1 .2 0l1.1.9a.2.2 0 0 1 0 .3 36.4 36.4 0 0 1-5.5 2.7.2.2 0 0 0-.1.3 47.2 47.2 0 0 0 3.6 5.8.2.2 0 0 0 .3.1A58.5 58.5 0 0 0 70.5 45.5a.2.2 0 0 0 0-.2A60 60 0 0 0 60.2 5a.2.2 0 0 0-.1 0zM23.7 37.3c-3.5 0-6.4-3.2-6.4-7.1s2.8-7.1 6.4-7.1 6.5 3.2 6.4 7.1c0 3.9-2.8 7.1-6.4 7.1zm23.6 0c-3.5 0-6.4-3.2-6.4-7.1s2.8-7.1 6.4-7.1 6.5 3.2 6.4 7.1c0 3.9-2.9 7.1-6.4 7.1z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
