import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAE903OKh6xi6x93vUy8rTE0ClPKMEDfpI",
    authDomain: "mycompanion-251a2.firebaseapp.com",
    projectId: "mycompanion-251a2",
    storageBucket: "mycompanion-251a2.appspot.com",
    messagingSenderId: "581971610407",
    appId: "1:581971610407:web:68619704f78ca1fba0f702",
    measurementId: "G-3WQTPMMDMW"
  };

  //connecting frontend to backend

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;