import { connectWallet } from "../utils/connectWallet";

export const connectToWalletButton = (setWalletAddress) => (
  <button
    className="cta-button connect-wallet-button"
    onClick={() => connectWallet(setWalletAddress)}
  >
    Connect to Wallet
  </button>
);
