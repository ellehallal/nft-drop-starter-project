import React, { useEffect, useState } from "react";
import "./App.css";
import { ConnectToWalletButton } from "./components/connectToWalletButton";
import { Footer } from "./components/footer";
import { checkIfWalletIsConnected } from "./utils/checkIfWalletIsConnected";
import { connectWallet } from "./utils/connectWallet";
import CandyMachine from "./CandyMachine";

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected(setWalletAddress);
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🍭 Candy Drop</p>
          <p className="sub-text">NFT drop machine with fair mint</p>
          {!walletAddress && (
            <ConnectToWalletButton
              onClick={() => connectWallet(setWalletAddress)}
            />
          )}
        </div>
        {walletAddress && <CandyMachine walletAddress={window.solana} />}
        <Footer />
      </div>
    </div>
  );
};

export default App;
