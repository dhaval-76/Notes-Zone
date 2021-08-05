import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCdLcqRvlEQuOt9pDmmGnRO0UGoePO9M4M",
    authDomain: "evernote-clone-d89db.firebaseapp.com",
    projectId: "evernote-clone-d89db",
    storageBucket: "evernote-clone-d89db.appspot.com",
    messagingSenderId: "313224747258",
    appId: "1:313224747258:web:e081b6d9eadd8ea891d143"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
export default firebase;