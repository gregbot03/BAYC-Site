import { useState, useEffect } from 'react';
import { Button } from '../common';
import { EXTERNAL_URLS } from '../../services/constants';

export default function TechStrip() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const styles = {
    container: {
      width: '100%',
      maxWidth: '1200px',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: isMobile ? 'center' : 'flex-end',
      gap: isMobile ? '1.5rem' : '3rem',
      paddingBottom: '2vh',
      paddingLeft: isMobile ? '1rem' : '0',
      paddingRight: isMobile ? '1rem' : '0',
      fontFamily: 'var(--f-sans)',
      textAlign: isMobile ? 'center' : 'left',
    },
    metaCluster: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '1.5rem',
    },
    symbolCe: {
      fontSize: '32px',
      fontWeight: 'bold',
      letterSpacing: '-2px',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    },
    barcode: {
      height: '36px',
      width: '140px',
      background: `linear-gradient(
        to right,
        #000 2px, transparent 2px,
        transparent 4px, #000 4px,
        #000 7px, transparent 7px,
        transparent 9px, #000 9px,
        #000 12px, transparent 12px,
        transparent 14px, #000 14px,
        #000 18px, transparent 18px,
        transparent 19px, #000 19px,
        #000 24px, transparent 24px,
        transparent 26px, #000 26px,
        #000 29px, transparent 29px,
        transparent 31px, #000 31px,
        #000 36px, transparent 36px,
        transparent 38px, #000 38px,
        #000 42px, transparent 42px,
        transparent 45px, #000 45px,
        #000 48px, transparent 48px,
        transparent 50px, #000 50px,
        #000 55px, transparent 55px,
        transparent 58px, #000 58px,
        #000 62px, transparent 62px,
        transparent 64px, #000 64px,
        #000 68px, transparent 68px,
        transparent 72px, #000 72px,
        #000 76px, transparent 76px,
        transparent 80px, #000 80px,
        #000 84px, transparent 84px,
        transparent 90px, #000 90px,
        #000 100%
      )`,
    },
    techCaption: {
      fontSize: '7px',
      fontWeight: 600,
      lineHeight: 1.1,
      maxWidth: '180px',
      textTransform: 'uppercase',
    },
    copyrightBlock: {
      textAlign: isMobile ? 'center' : 'left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    copyYear: {
      fontSize: isMobile ? '24px' : '28px',
      fontWeight: 800,
      letterSpacing: '-1px',
      lineHeight: 1,
    },
    copyBrand: {
      fontSize: isMobile ? '12px' : '14px',
      fontWeight: 800,
      letterSpacing: '-0.5px',
      textTransform: 'uppercase',
    },
    disclaimerBlock: {
      fontSize: isMobile ? '10px' : '8px',
      fontWeight: 600,
      lineHeight: 1.4,
      maxWidth: isMobile ? '280px' : '220px',
      textTransform: 'uppercase',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hide complex meta cluster on mobile */}
      <div style={styles.metaCluster}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2C8 2 4 6 4 10C4 14 6 16 6 16L4 22H20L18 16C18 16 20 14 20 10C20 6 16 2 12 2Z" />
          <path d="M9 10C9 10 9.5 11 10.5 11C11.5 11 12 10 12 10" />
          <path d="M15 10C15 10 14.5 11 13.5 11C12.5 11 12 10 12 10" />
        </svg>

        <div style={styles.symbolCe}>
          <span style={{ display: 'inline-block', transform: 'scaleX(1.1)' }}>C</span>
          <span style={{ display: 'inline-block', transform: 'scaleX(1.1)' }}>E</span>
        </div>

        <div style={styles.barcode}></div>

        <div style={styles.techCaption}>
          DESIGNED AND MINTED ON ETHEREUM<br />
          CONTRACT: 0xBC4CA0EDA7647A8AB7C2061<br />
          NON-FUNGIBLE TOKEN STANDARD ERC-721
        </div>
      </div>

      <div style={styles.copyrightBlock}>
        <div style={styles.copyYear}>©2021</div>
        <div style={styles.copyBrand}>"YUGA LABS LLC"</div>
      </div>

      <div style={styles.disclaimerBlock}>
        THE BORED APE YACHT CLUB IS A COLLECTION OF 10,000 UNIQUE BORED APE NFTS— DIGITAL COLLECTIBLES LIVING ON THE ETHEREUM BLOCKCHAIN.
        {!isMobile && (
          <>
            <br /><br />
            YOUR BORED APE DOUBLES AS YOUR YACHT CLUB MEMBERSHIP CARD, AND GRANTS ACCESS TO MEMBERS-ONLY BENEFITS.
          </>
        )}
      </div>

      <Button href={EXTERNAL_URLS.OPENSEA_BAYC} external>
        Join the club, buy an ape
      </Button>
    </div>
  );
}
