import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAzx7xTT4_BH3idIoJLW18v1bURX-4pg-E",
    authDomain: "linkedin-clone-master.firebaseapp.com",
    projectId: "linkedin-clone-master",
    storageBucket: "linkedin-clone-master.appspot.com",
    messagingSenderId: "478077221299",
    appId: "1:478077221299:web:36b674812c1f6d8aacf3c6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}