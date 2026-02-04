import { Modal } from '../common';
import { useWallet } from '../../context/WalletContext';

export default function WalletModal({ isOpen, onClose }) {
  const { connectors, connect } = useWallet();

  const handleConnect = async (connector) => {
    try {
      await connect({ connector });
      onClose();
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  const getConnectorIcon = (name) => {
    const icons = {
      MetaMask: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21.5 4L13 10.5L14.5 6.5L21.5 4Z" fill="#E2761B" stroke="#E2761B"/>
          <path d="M2.5 4L10.9 10.6L9.5 6.5L2.5 4Z" fill="#E4761B" stroke="#E4761B"/>
        </svg>
      ),
      WalletConnect: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M7 10C9 8 15 8 17 10" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M9 13C10.5 11.5 13.5 11.5 15 13" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      'Coinbase Wallet': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
    };
    return icons[name] || (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
      </svg>
    );
  };

  const styles = {
    list: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      width: '100%',
      padding: '16px',
      background: 'transparent',
      border: '1px solid var(--ink)',
      cursor: 'pointer',
      fontFamily: 'var(--f-mono)',
      fontSize: '11px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      transition: 'all 0.2s ease',
      color: 'var(--ink)',
    },
    description: {
      marginTop: '20px',
      paddingTop: '20px',
      borderTop: '1px solid var(--ink)',
      fontSize: '10px',
      lineHeight: 1.5,
      opacity: 0.7,
      textTransform: 'uppercase',
      fontFamily: 'var(--f-mono)',
    },
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Connect Wallet">
      <div style={styles.list}>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            style={styles.button}
            onClick={() => handleConnect(connector)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--ink)';
              e.currentTarget.style.color = 'var(--paper)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--ink)';
            }}
          >
            {getConnectorIcon(connector.name)}
            {connector.name}
          </button>
        ))}
      </div>
      <p style={styles.description}>
        By connecting your wallet, you agree to our Terms of Service and acknowledge that you have read and understand the associated risks.
      </p>
    </Modal>
  );
}
