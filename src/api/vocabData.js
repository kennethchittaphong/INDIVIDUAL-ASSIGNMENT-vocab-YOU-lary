import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET Vocab
const getVocab = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// CREATE Vocab
const createVocab = (vocabObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocab.json`, vocabObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vocab/${response.data.name}.json`, body)
        .then(() => {
          getVocab(vocabObj.uid).then(resolve);
        });
    }).catch(reject);
});

// GET SINGLE VOCAB
const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// UPDATE Vocab
const updateVocab = (vocabObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocab/${vocabObj.firebaseKey}.json`, vocabObj)
    .then(() => getVocab(vocabObj.uid).then(resolve))
    .catch(reject);
});

// DELETE Vocab
const deleteVocab = (userId, firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then(() => {
      getVocab(userId).then(resolve);
    })
    .catch(reject);
});

// GET FILTERED Vocab
const getFilteredVocab = (userId, category) => new Promise((resolve, reject) => {
  getVocab(userId)
    .then((filteredVocabArray) => {
      const filteredVocab = filteredVocabArray.filter((vocab) => vocab.category === category);
      resolve(filteredVocab);
    }).catch(reject);
});

// GET SEARCHED Vocab
const getSearchedVocab = (userId, string) => new Promise((resolve, reject) => {
  getVocab(userId)
    .then((filteredVocabArray) => {
      const filteredVocab = filteredVocabArray.filter((vocab) => vocab.category.toLowerCase().includes(string) || vocab.title.toLowerCase().includes(string) || vocab.definition.toLowerCase().includes(string));
      resolve(filteredVocab);
    }).catch(reject);
});

export {
  getVocab,
  createVocab,
  updateVocab,
  getSingleVocab,
  getFilteredVocab,
  getSearchedVocab,
  deleteVocab
};
