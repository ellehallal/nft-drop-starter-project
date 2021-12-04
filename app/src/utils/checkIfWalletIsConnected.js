export const checkIfWalletIsConnected = async (setWalletAddress) => {
  try {
    const { solana } = window;

    if (isPhantomWallet(solana)) {
      logWalletFound();
      checkIfUserGrantedPermission(solana, setWalletAddress);
    } else {
      alertWalletNotFound();
    }
  } catch (error) {
    logError(error);
  }
};

const checkIfUserGrantedPermission = async (solana, setWalletAddress) => {
  const response = await solana.connect({ onlyIfTrusted: true });
  logPublicKey(response);
  setWalletAddress(response.publicKey.toString());
};

const isPhantomWallet = (solana) => solana && solana.isPhantom;
const logWalletFound = () => console.log("Phantom wallet found!");
const logError = (error) => console.log(error);

const alertWalletNotFound = () =>
  alert("Solana object not found! Get a Phantom Wallet 👻");

export const logPublicKey = (response) =>
  console.log("Connected with Public Key:", response.publicKey.toString());
