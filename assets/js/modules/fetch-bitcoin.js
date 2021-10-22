export default function initFetchBitcoin() {
  const url = 'https://blockchain.info/ticker';
  async function fetchBitcoin() {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJSON = await bitcoinResponse.json();
      const btcPrice = document.querySelector('.btc-price');
      btcPrice.innerHTML = (100 / bitcoinJSON.BRL.sell).toFixed(4);
    } catch(err) {
      console.log(err);
    };
  };
  fetchBitcoin(url);
};

