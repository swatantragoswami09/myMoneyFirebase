import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlPkHgtyIaby0ruD0DElibZbA8SCEBbew",
  authDomain: "mymoney-7f485.firebaseapp.com",
  projectId: "mymoney-7f485",
  storageBucket: "mymoney-7f485.appspot.com",
  messagingSenderId: "364742850637",
  appId: "1:364742850637:web:e689fea20b1de6cbf98404",
};

//   init firebase
firebase.initializeApp(firebaseConfig);

// init servie
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
