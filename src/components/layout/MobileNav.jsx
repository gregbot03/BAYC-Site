import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWallet } from '../../context/WalletContext';

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
      </div>
    </div>
  );
}
