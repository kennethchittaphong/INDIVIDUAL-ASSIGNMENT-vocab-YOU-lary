import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import logoutButton from '../components/logoutButton';
import navEvents from '../events/navEvents';
import { getVocab } from '../../api/vocabData';
import { showVocabs } from '../components/showVocab';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  navBar();
  logoutButton();
  navEvents(user.uid);
  getVocab(user.uid).then(showVocabs);
};

export default startApp;
