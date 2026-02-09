/* Phantom Wallet Integration */

const detectPhantom = () => {
  const { solana } = window;
  return solana && solana.isPhantom;
};

const connectWallet = async () => {
  if (!detectPhantom()) {
    window.open('https://phantom.app/', '_blank');
    return;
  }

  try {
    const { solana } = window;
    const response = await solana.connect();
    const publicKey = response.publicKey.toString();

    console.log('Connected:', publicKey);
    updateConnectButtons(publicKey);
  } catch (err) {
    console.error('Connection error:', err);
    alert('Failed to connect wallet. Please try again.');
  }
};

const updateConnectButtons = (publicKey) => {
  const buttons = document.querySelectorAll('.connect-wallet-btn');
  buttons.forEach((button) => {
    if (publicKey) {
      button.textContent = publicKey.slice(0, 4) + '...' + publicKey.slice(-4);
      button.classList.add('connected');
    } else {
      button.textContent = 'Connect Wallet';
      button.classList.remove('connected');
    }
  });
};

const initWalletListeners = () => {
  const buttons = document.querySelectorAll('.connect-wallet-btn');
  buttons.forEach((button) => {
    button.addEventListener('click', connectWallet);
  });

  if (detectPhantom()) {
    window.solana.on('connect', () => {
      const publicKey = window.solana.publicKey.toString();
      updateConnectButtons(publicKey);
    });

    window.solana.on('disconnect', () => {
      updateConnectButtons(null);
    });
  }
};
