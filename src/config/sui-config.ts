// src/config/sui-config.ts
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';

// Your package ID from when you published the contract
export const PACKAGE_ID = '0x...'; // Replace with your actual package ID

// Initialize Sui client
export const suiClient = new SuiClient({
  url: getFullnodeUrl('testnet'), // Or 'devnet', 'mainnet' as needed
});