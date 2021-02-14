import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCE5AQ1alPyj5vmS9PpXrdm1q2coeDd2Dg",
  authDomain: "replica-bf4ad.firebaseapp.com",
  projectId: "replica-bf4ad",
  storageBucket: "replica-bf4ad.appspot.com",
  messagingSenderId: "609921862741",
  appId: "1:609921862741:web:9edf9510cedb9e46fb18dc",
  measurementId: "G-19XNCRQYMH"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth}