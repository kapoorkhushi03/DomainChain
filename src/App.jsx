// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getFullnodeUrl } from '@mysten/sui.js/client';
import { WalletProvider, SuiClientProvider, ConnectButton } from '@mysten/dapp-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Import pages
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import PurchasePage from "./pages/PurchasePage";
import DomainManager from "./components/DomainManager"; // Assuming this component exists

// Create Query Client for React Query
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={{
        testnet: { url: getFullnodeUrl('testnet') }
      }} defaultNetwork="testnet">
        <WalletProvider>
          <Router>
            <div className="App">
              <header>
                <ConnectButton />
              </header>
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/purchase" element={<PurchasePage />} />
                  <Route path="/domain-manager" element={<DomainManager />} />
                </Routes>
              </main>
            </div>
          </Router>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}

export default App;

