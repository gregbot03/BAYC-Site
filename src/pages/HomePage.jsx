import { LiquidText } from '../components/common';
import { TechStrip } from '../components/layout';

export default function HomePage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '4vh 4vw',
        position: 'relative',
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <LiquidText size="large">BAYC</LiquidText>
      </div>

      {/* Tech Strip */}
      <TechStrip />
    </div>
  );
}
