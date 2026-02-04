import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { config } from './services/web3';
import { WalletProvider } from './context/WalletContext';
import { Layout } from './components/layout';
import {
  HomePage,
  ArchivePage,
  StorePage,
  ClubhousePage,
  MembersPage,
} from './pages';

import './styles/variables.css';

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/archive" element={<ArchivePage />} />
                <Route path="/store" element={<StorePage />} />
                <Route path="/clubhouse" element={<ClubhousePage />} />
                <Route path="/members" element={<MembersPage />} />
              </Routes>
            </Layout>
          </Router>
        </WalletProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
