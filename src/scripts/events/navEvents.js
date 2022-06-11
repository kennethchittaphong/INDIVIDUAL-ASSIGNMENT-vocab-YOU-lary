import { getVocab, getSearchedVocab } from '../../api/vocabData';
import addNewVocab from '../../components/addNewVocab';
import { showVocabs } from '../components/showVocab';
import signOut from '../helpers/auth/signOut';

// navigation events
const navEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // HOMEPAGE
  document.querySelector('#home').addEventListener('click', () => {
    getVocab(uid).then(showVocabs);
  });

  // CREATE NEW
  document.querySelector('#create-entry').addEventListener('click', addNewVocab);

  // SEARCH Vocab
  document.querySelector('#search-btn').addEventListener('click', () => {
    const string = document.querySelector('#searchBar').value;
    getSearchedVocab(uid, string).then(showVocabs);
  });
};

export default navEvents;
