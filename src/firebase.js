import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDtZRlr8VhUqz1UE9pfhh4P5xY9zrT-QiU",
    authDomain: "clone-5f6a5.firebaseapp.com",
    databaseURL: "https://clone-5f6a5.firebaseio.com",
    projectId: "clone-5f6a5",
    storageBucket: "clone-5f6a5.appspot.com",
    messagingSenderId: "305067351667",
    appId: "1:305067351667:web:5ffe7339ba9198ba385406",
    measurementId: "G-3K39B98771"
});

const db = firebaseApp.firestore();

export default db;

//
