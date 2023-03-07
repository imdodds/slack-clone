import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDseoRsfzTBmzv8JOQrImH1_Imzu6hXWpk",
  authDomain: "slack-clone-b9fcb.firebaseapp.com",
  projectId: "slack-clone-b9fcb",
  storageBucket: "slack-clone-b9fcb.appspot.com",
  messagingSenderId: "719539596776",
  appId: "1:719539596776:web:ede1fb899213f0e410c85d",
  measurementId: "G-FDCJNTC9NL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };