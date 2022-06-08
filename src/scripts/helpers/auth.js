import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import startApp from './startApp';
import firebaseConfig from '../../api/apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      document.querySelector('#introduction').innerHTML = `
      <h1 class="banner">Welcome to Vocab-YOU-lary!</h1>
    `;
      loginButton();
    }
  });
};

export default checkLoginStatus;
