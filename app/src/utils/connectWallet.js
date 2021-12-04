import { logPublicKey } from "./checkIfWalletIsConnected";

export const connectWallet = async (setWalletAddress) => {
  const { solana } = window;

  if (solana) {
    const response = await solana.connect();
    setWalletAddress(response.publicKey.toString());
    logPublicKey(response);
  }
};
