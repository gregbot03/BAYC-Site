import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWallet } from '../../context/WalletContext';
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
      </div>
    </nav>
  );
}
