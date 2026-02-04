import { Button } from '../components/common';
import { useWallet } from '../context/WalletContext';

export default function ClubhousePage() {
  const { isConnected, isHolder } = useWallet();

  const styles = {
    container: {
      minHeight: '100vh',
      padding: '120px 4vw 60px',
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    pageTitle: {
      fontFamily: 'var(--f-mono)',
      fontSize: '48px',
      fontWeight: 400,
      letterSpacing: '8px',
      textTransform: 'uppercase',
      margin: 0,
    },
    location: {
      fontFamily: 'var(--f-mono)',
      fontSize: '12px',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      opacity: 0.6,
      marginTop: '1rem',
    },
    heroImage: {
      width: '100%',
      maxWidth: '1200px',
      height: '400px',
      margin: '0 auto 4rem',
      backgroundColor: 'var(--ink)',
      opacity: 0.1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroPlaceholder: {
      fontFamily: 'var(--f-mono)',
      fontSize: '12px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: 'var(--paper)',
      opacity: 0.5,
    },
    content: {
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '4rem',
    },
    section: {
      padding: '0',
    },
    sectionTitle: {
      fontFamily: 'var(--f-mono)',
      fontSize: '10px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      marginBottom: '1.5rem',
      paddingBottom: '1rem',
      borderBottom: '1px solid var(--ink)',
    },
    text: {
      fontSize: '14px',
      lineHeight: 1.8,
      marginBottom: '1rem',
    },
    detail: {
      fontFamily: 'var(--f-mono)',
      fontSize: '11px',
      lineHeight: 2,
      opacity: 0.8,
    },
    gallery: {
      marginTop: '4rem',
      maxWidth: '1200px',
      margin: '4rem auto 0',
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '1rem',
    },
    galleryItem: {
      aspectRatio: '1',
      backgroundColor: 'var(--ink)',
      opacity: 0.08,
    },
    memberSection: {
      marginTop: '4rem',
      padding: '3rem',
      border: '1px solid var(--ink)',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '4rem auto 0',
    },
    memberTitle: {
      fontFamily: 'var(--f-mono)',
      fontSize: '11px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      marginBottom: '1rem',
    },
    memberText: {
      fontSize: '13px',
      lineHeight: 1.7,
      marginBottom: '1.5rem',
      opacity: 0.8,
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.pageTitle}>CLUBHOUSE</h1>
        <p style={styles.location}>Miami, Florida</p>
      </header>

      {/* Hero Image Placeholder */}
      <div style={styles.heroImage}>
        <span style={styles.heroPlaceholder}>Venue Image</span>
      </div>

      <div style={styles.content}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Location</h2>
          <div style={styles.detail}>
            123 Bored Ape Boulevard<br />
            Miami Beach, FL 33139<br />
            <br />
            Hours<br />
            Thu – Sun: 6PM – 2AM<br />
            <br />
            Members Only
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>About</h2>
          <p style={styles.text}>
            The Bored Ape Yacht Club Clubhouse is an exclusive members-only venue
            in the heart of Miami. A space where ape holders gather, connect, and
            enjoy the finest in food, drinks, and entertainment.
          </p>
          <p style={styles.text}>
            Featuring rotating art installations from the community, live
            performances, and exclusive events for verified members only.
          </p>
        </div>
      </div>

      {/* Gallery Placeholder */}
      <div style={styles.gallery}>
        <h2 style={{ ...styles.sectionTitle, textAlign: 'center' }}>Gallery</h2>
        <div style={styles.galleryGrid}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={styles.galleryItem}></div>
          ))}
        </div>
      </div>

      {/* Member CTA */}
      <div style={styles.memberSection}>
        <h3 style={styles.memberTitle}>Member Exclusive</h3>
        <p style={styles.memberText}>
          BAYC and MAYC holders receive priority reservations and access to
          exclusive events at the Clubhouse.
        </p>
        {!isConnected ? (
          <Button>Connect Wallet to Reserve</Button>
        ) : isHolder ? (
          <Button>Make Reservation</Button>
        ) : (
          <Button disabled>Members Only</Button>
        )}
      </div>
    </div>
  );
}
