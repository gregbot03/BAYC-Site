import { Button } from '../components/common';
import { useWallet } from '../context/WalletContext';
import { EXTERNAL_URLS } from '../services/constants';

export default function MembersPage() {
  const { isConnected, isHolder, isLoading, address, nfts, disconnect } = useWallet();

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '120px 4vw 60px',
    },
    content: {
      maxWidth: '800px',
      width: '100%',
      textAlign: 'center',
    },
    pageTitle: {
      fontFamily: 'var(--f-mono)',
      fontSize: '48px',
      fontWeight: 400,
      letterSpacing: '8px',
      textTransform: 'uppercase',
      margin: 0,
    },
    subtitle: {
      fontFamily: 'var(--f-mono)',
      fontSize: '10px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      opacity: 0.6,
      marginTop: '1rem',
      marginBottom: '3rem',
    },
    description: {
      fontSize: '14px',
      lineHeight: 1.7,
      marginBottom: '2rem',
      opacity: 0.8,
    },
    benefitsList: {
      listStyle: 'none',
      padding: 0,
      margin: '3rem 0',
      textAlign: 'left',
      maxWidth: '400px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    benefitItem: {
      fontFamily: 'var(--f-mono)',
      fontSize: '11px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      padding: '12px 0',
      borderBottom: '1px solid rgba(26, 26, 26, 0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    bullet: {
      width: '6px',
      height: '6px',
      backgroundColor: 'var(--ink)',
      flexShrink: 0,
    },
    divider: {
      width: '100%',
      maxWidth: '200px',
      height: '1px',
      backgroundColor: 'var(--ink)',
      opacity: 0.2,
      margin: '3rem auto',
    },
    address: {
      fontFamily: 'var(--f-mono)',
      fontSize: '11px',
      letterSpacing: '1px',
      opacity: 0.6,
      marginBottom: '2rem',
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    // Member profile styles
    profile: {
      marginTop: '2rem',
      textAlign: 'left',
    },
    profileHeader: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gap: '3rem',
      marginBottom: '3rem',
    },
    nftImage: {
      width: '200px',
      height: '200px',
      backgroundColor: 'var(--ink)',
      opacity: 0.1,
    },
    stats: {
      paddingTop: '1rem',
    },
    statItem: {
      fontFamily: 'var(--f-mono)',
      fontSize: '10px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      marginBottom: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: '0.5rem',
      borderBottom: '1px solid rgba(26, 26, 26, 0.1)',
    },
    statLabel: {
      opacity: 0.5,
    },
    collection: {
      marginTop: '3rem',
    },
    collectionTitle: {
      fontFamily: 'var(--f-mono)',
      fontSize: '10px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      marginBottom: '1.5rem',
    },
    collectionGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
      gap: '1rem',
    },
    collectionItem: {
      aspectRatio: '1',
      backgroundColor: 'var(--ink)',
      opacity: 0.08,
    },
    perks: {
      marginTop: '3rem',
      padding: '2rem',
      border: '1px solid var(--ink)',
    },
    perkItem: {
      fontFamily: 'var(--f-mono)',
      fontSize: '10px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      padding: '10px 0',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      borderBottom: '1px solid rgba(26, 26, 26, 0.1)',
    },
    perkCheck: {
      width: '16px',
      height: '16px',
      border: '1px solid var(--ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '10px',
    },
  };

  // Loading state
  if (isLoading) {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.pageTitle}>MEMBERS</h1>
          <p style={styles.subtitle}>Verifying Membership...</p>
        </div>
      </div>
    );
  }

  // Not connected state
  if (!isConnected) {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.pageTitle}>MEMBERS</h1>
          <p style={styles.subtitle}>Yacht Club Members Only</p>

          <p style={styles.description}>
            Connect your wallet to access exclusive content and verify your membership in the Bored Ape Yacht Club.
          </p>

          <div style={styles.divider}></div>

          <ul style={styles.benefitsList}>
            <li style={styles.benefitItem}>
              <span style={styles.bullet}></span>
              Exclusive merchandise drops
            </li>
            <li style={styles.benefitItem}>
              <span style={styles.bullet}></span>
              Priority clubhouse reservations
            </li>
            <li style={styles.benefitItem}>
              <span style={styles.bullet}></span>
              Member-only events & experiences
            </li>
            <li style={styles.benefitItem}>
              <span style={styles.bullet}></span>
              Commercial IP rights
            </li>
            <li style={styles.benefitItem}>
              <span style={styles.bullet}></span>
              Community voting & governance
            </li>
          </ul>
        </div>
      </div>
    );
  }

  // Connected but not a holder
  if (!isHolder) {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.pageTitle}>OH NO!</h1>
          <p style={styles.subtitle}>Not a Member</p>

          <p style={styles.description}>
            This wallet doesn't hold any Bored Ape or Mutant Ape NFTs.
            Membership is verified by on-chain ownership.
          </p>

          <p style={styles.address}>Connected: {address}</p>

          <div style={styles.buttonGroup}>
            <Button onClick={disconnect}>Disconnect</Button>
            <Button href={EXTERNAL_URLS.OPENSEA_BAYC} external>
              View on OpenSea
            </Button>
          </div>

          <div style={styles.divider}></div>

          <p style={{ ...styles.description, fontSize: '12px', opacity: 0.6 }}>
            Want to join? Purchase a Bored Ape or Mutant Ape on the secondary market to gain membership access.
          </p>
        </div>
      </div>
    );
  }

  // Verified member view
  return (
    <div style={styles.container}>
      <div style={{ ...styles.content, textAlign: 'left', maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={styles.pageTitle}>WELCOME</h1>
          <p style={styles.subtitle}>Verified Member</p>
        </div>

        <div style={styles.profile}>
          <div style={styles.profileHeader}>
            <div style={styles.nftImage}></div>
            <div style={styles.stats}>
              <div style={styles.statItem}>
                <span style={styles.statLabel}>Wallet</span>
                <span>{address?.slice(0, 6)}...{address?.slice(-4)}</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statLabel}>Member Since</span>
                <span>—</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statLabel}>Apes Held</span>
                <span>{nfts.length}</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statLabel}>Rank</span>
                <span>—</span>
              </div>
            </div>
          </div>

          <div style={styles.collection}>
            <h3 style={styles.collectionTitle}>Your Collection</h3>
            <div style={styles.collectionGrid}>
              {nfts.length > 0 ? (
                nfts.map((nft, i) => (
                  <div key={i} style={styles.collectionItem}></div>
                ))
              ) : (
                [...Array(4)].map((_, i) => (
                  <div key={i} style={styles.collectionItem}></div>
                ))
              )}
            </div>
          </div>

          <div style={styles.perks}>
            <h3 style={{ ...styles.collectionTitle, marginBottom: '1rem' }}>Member Perks</h3>
            <div style={styles.perkItem}>
              <span style={styles.perkCheck}>✓</span>
              Commercial IP Rights
            </div>
            <div style={styles.perkItem}>
              <span style={styles.perkCheck}>✓</span>
              Exclusive Merch Access
            </div>
            <div style={styles.perkItem}>
              <span style={styles.perkCheck}>○</span>
              Clubhouse Reservation
            </div>
            <div style={styles.perkItem}>
              <span style={styles.perkCheck}>○</span>
              Upcoming Drop Access
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
