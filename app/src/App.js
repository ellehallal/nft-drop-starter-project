import React, { useEffect, useState } from "react";
import "./App.css";
import twitterLogo from "./assets/twitter-logo.svg";
import { connectToWalletButton } from "./components/connectToWalletButton";
import { checkIfWalletIsConnected } from "./utils/checkIfWalletIsConnected";

const BUILDSPACE_TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${BUILDSPACE_TWITTER_HANDLE}`;

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
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${BUILDSPACE_TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
