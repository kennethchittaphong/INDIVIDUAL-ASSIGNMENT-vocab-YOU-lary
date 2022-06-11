import {
  createVocab, deleteVocab, getSingleVocab, getVocab, updateVocab, getFilteredVocab
} from '../../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocabs } from '../components/showVocab';
import { getDate, getTime, getUTCTime } from '../helpers/date';
import { sortNewestToOldest, sortOldestToNewest, sortByTitle } from '../components/sort';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id === ('submit-vocab')) {
      e.preventDefault();
      const vocalObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        time: `${getDate()} @ ${getTime()}`,
        utcTime: getUTCTime(),
        uid
      };

      createVocab(vocalObject).then(showVocabs);
    }

    // EVENT TO UPDATE
    if (e.target.id.includes('edit')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocalObject) => addVocabForm(vocalObject));
    }
    if (e.target.id.includes('update-vocab')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const vocalObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        time: `${getDate()} @ ${getTime()}`,
        utcTime: getUTCTime(),
        firebaseKey,
        uid
      };

      updateVocab(vocalObject).then(showVocabs);
    }

    // EVENT TO DELETE
    if (e.target.id.includes('delete')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(uid, firebaseKey).then(showVocabs);
      }
    }

    // EVENT TO FILTER BY LANGUAGE
    if (e.target.id.includes('filter--')) {
      const [, language] = e.target.id.split('--');
      getFilteredVocab(uid, language).then(showVocabs);
    }

    // EVENT TO SORT BY TITLE
    if (e.target.id === 'sort-name') {
      getVocab(uid).then((array) => {
        showVocabs(sortByTitle(array));
      });
    }

    // EVENT TO SORT BY OLDEST TO NEWEST
    if (e.target.id === 'sort-oldest') {
      getVocab(uid).then((array) => {
        showVocabs(sortOldestToNewest(array));
      });
    }

    // EVENT TO SORT BY NEWEST TO OLDEST
    if (e.target.id === 'sort-newest') {
      getVocab(uid).then((array) => {
        showVocabs(sortNewestToOldest(array));
      });
    }
  });
};

export default domEvents;
