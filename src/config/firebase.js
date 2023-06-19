// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/storage';

import Firebase from "firebase/compat/app";
import "firebase/compat/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUPGg1wGpeD-ojeiwJcFTWRBs0HOEdGiI",
  authDomain: "hamza-portfolio-b34be.firebaseapp.com",
  databaseURL: "https://hamza-portfolio-b34be-default-rtdb.firebaseio.com",
  projectId: "hamza-portfolio-b34be",
  storageBucket: "hamza-portfolio-b34be.appspot.com",
  messagingSenderId: "62579325247",
  appId: "1:62579325247:web:6c697c8aefa234f19efb8a",
  measurementId: "G-TRV01F612L",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCUPGg1wGpeD-ojeiwJcFTWRBs0HOEdGiI",
//   authDomain: "hamza-portfolio-b34be.firebaseapp.com",
//   databaseURL: "https://hamza-portfolio-b34be-default-rtdb.firebaseio.com",
//   projectId: "hamza-portfolio-b34be",
//   storageBucket: "hamza-portfolio-b34be.appspot.com",
//   messagingSenderId: "62579325247",
//   appId: "1:62579325247:web:6c697c8aefa234f19efb8a",
//   measurementId: "G-TRV01F612L",
// };

Firebase.initializeApp(firebaseConfig);

export default Firebase;
