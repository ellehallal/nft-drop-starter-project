import { Connection } from "@solana/web3.js";
import { Provider } from "@project-serum/anchor";
const opts = {
  preflightCommitment: "processed",
};

export const getProvider = () => {
  const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST;
  // Create a new connection object
  const connection = new Connection(rpcHost);

  // Create a new Solana provider object
  const provider = new Provider(
    connection,
    window.solana,
    opts.preflightCommitment
  );

  return provider;
};
