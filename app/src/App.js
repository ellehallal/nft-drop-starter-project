import React, { useEffect, useState } from "react";
import "./App.css";
import { connectToWalletButton } from "./components/connectToWalletButton";
import { Footer } from "./components/footer";
import { checkIfWalletIsConnected } from "./utils/checkIfWalletIsConnected";

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
          {!walletAddress && connectToWalletButton(setWalletAddress)}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
