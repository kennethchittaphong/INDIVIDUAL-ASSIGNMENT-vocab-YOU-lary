import { getVocab } from '../../api/vocabData';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import logoutButton from '../components/logoutButton';

const startApp = (user) => {
  domBuilder();
  navBar();
  getVocab(user.uid);
  logoutButton();
};

export default startApp;
