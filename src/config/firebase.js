// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/storage';

import Firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyB9pWsI9muxMf6i6s-w47Os-amW3FT61vI",
    authDomain: "new-profile-aeacc.firebaseapp.com",
    databaseURL: "https://new-profile-aeacc-default-rtdb.firebaseio.com",
    projectId: "new-profile-aeacc",
    storageBucket: "new-profile-aeacc.appspot.com",
    messagingSenderId: "1062863791442",
    appId: "1:1062863791442:web:6b661e1d8cad220a68868b",
    measurementId: "G-YSYKE18KJ5"
  };
  
Firebase.initializeApp(firebaseConfig);

export default Firebase;
