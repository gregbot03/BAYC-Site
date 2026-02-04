import { http, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected, walletConnect, coinbaseWallet } from 'wagmi/connectors';

// WalletConnect project ID - you'll need to get one from https://cloud.walletconnect.com
const WALLETCONNECT_PROJECT_ID = 'YOUR_PROJECT_ID';

export const config = createConfig({
  chains: [mainnet],
  connectors: [
    injected(),
    walletConnect({ projectId: WALLETCONNECT_PROJECT_ID }),
    coinbaseWallet({ appName: 'BAYC' }),
  ],
  transports: {
    [mainnet.id]: http(),
  },
});
