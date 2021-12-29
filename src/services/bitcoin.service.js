import { storageService } from './async-storage.service';
import { utilService } from './utile.service.js';

const axios = require('axios');

const BTC = 'btc';

export const bitcoinService = {
  getRate,
};

async function getRate() {
  let rate = utilService.loadFromStorage(BTC);

  if (!rate) {
    rate = await axios.get(
      'https://blockchain.info/tobtc?currency=USD&value=1'
    );
    utilService.saveToStorage(BTC, rate.data);
  }

  return Promise.resolve(rate);
}
