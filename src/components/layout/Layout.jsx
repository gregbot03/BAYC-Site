import { useState } from 'react';
import NoiseOverlay from './NoiseOverlay';
import SVGFilters from './SVGFilters';
import Navigation from './Navigation';
import MobileNav from './MobileNav';
import WalletModal from '../wallet/WalletModal';

export default function Layout({ children, showTechStrip = false }) {
  const [isWalletModalOpen, setWalletModalOpen] = useState(false);

  const handleConnectClick = () => setWalletModalOpen(true);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--paper)',
        color: 'var(--ink)',
        position: 'relative',
      }}
    >
      <NoiseOverlay />
      <SVGFilters />

      {/* Desktop Navigation */}
      <div className="desktop-nav">
        <Navigation onConnectClick={handleConnectClick} />
      </div>

      {/* Mobile Navigation */}
      <MobileNav onConnectClick={handleConnectClick} />

      <main>{children}</main>

      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setWalletModalOpen(false)}
      />
    </div>
  );
}
