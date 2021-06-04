import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDzvSsYerlDSCY68zXgZX_nICQKSyI6xHo",
    authDomain: "polymer-clay-inventory.firebaseapp.com",
    projectId: "polymer-clay-inventory",
    storageBucket: "polymer-clay-inventory.appspot.com",
    messagingSenderId: "438410428597",
    appId: "1:438410428597:web:0b4ae77fbe8ac467f03efc"
  };

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

const login = () => {
    auth.signInWithPopup(provider);
}

const logout = () => {
    auth.signOut();
}

export {
    auth,
    login,
    logout
}