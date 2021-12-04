export const checkIfWalletIsConnected = async () => {
  try {
    const { solana } = window;

    if (isPhantomWallet(solana)) {
      logWalletFound()
      checkIfUserGrantedPermission(solana)
    } else {
      alertWalletNotFound()
    }
  } catch (error) {
    logError(error)
  }
};

const checkIfUserGrantedPermission = async (solana) => {
  const response = await solana.connect({ onlyIfTrusted: true });
  
  console.log(
    'Connected with Public Key:',
    response.publicKey.toString()
  );
}

const isPhantomWallet = (solana) => solana && solana.isPhantom
const logWalletFound = () => console.log('Phantom wallet found!');
const alertWalletNotFound = () => alert('Solana object not found! Get a Phantom Wallet 👻');
const logError = (error) => console.log(error)
