import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET Vocab
const getVocab = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Vocab.json?orderBy=uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Filter Vocab

export {
  // eslint-disable-next-line import/prefer-default-export
  getVocab
};
