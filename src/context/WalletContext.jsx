import { createContext, useContext, useState, useEffect } from 'react';
import { useAccount, useDisconnect, useConnect } from 'wagmi';
import { MEMBERSHIP_CONTRACTS } from '../services/constants';

const WalletContext = createContext(null);

export function WalletProvider({ children }) {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { connectors, connect } = useConnect();

  const [nfts, setNfts] = useState([]);
  const [isHolder, setIsHolder] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check NFT ownership when address changes
  useEffect(() => {
    async function checkOwnership() {
      if (!isConnected || !address) {
        setIsHolder(false);
        setNfts([]);
        return;
      }

      setIsLoading(true);
      try {
        // In production, use Alchemy SDK to fetch NFTs
        // For now, we'll simulate the check
        // const alchemy = new Alchemy({ apiKey: 'YOUR_KEY', network: Network.ETH_MAINNET });
        // const nftsForOwner = await alchemy.nft.getNftsForOwner(address, {
        //   contractAddresses: MEMBERSHIP_CONTRACTS,
        // });

        // Simulated response - in production this would be real data
        const mockNfts = [];
        setNfts(mockNfts);
        setIsHolder(mockNfts.length > 0);
      } catch (error) {
        console.error('Error checking NFT ownership:', error);
        setIsHolder(false);
        setNfts([]);
      } finally {
        setIsLoading(false);
      }
    }

    checkOwnership();
  }, [address, isConnected]);

  const value = {
    address,
    isConnected,
    isHolder,
    isLoading,
    nfts,
    disconnect,
    connectors,
    connect,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}
