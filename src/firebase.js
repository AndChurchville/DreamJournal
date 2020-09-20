
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgJfatAEheqGv2kTmwZo-_GIEXpAdC0s8",
  authDomain: "dream-journal-app-d0c4a.firebaseapp.com",
  databaseURL: "https://dream-journal-app-d0c4a.firebaseio.com",
  projectId: "dream-journal-app-d0c4a",
  storageBucket: "dream-journal-app-d0c4a.appspot.com",
  messagingSenderId: "382629659224",
  appId: "1:382629659224:web:e13d1353e081edebacc02d",
  measurementId: "G-22RC43R59F"
};

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
//   };

firebase.initializeApp(firebaseConfig);


  
export default firebase;