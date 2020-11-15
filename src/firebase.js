import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBuChvjrwWY8-zPRUxaKG0JblIF4PTIX_s",
  authDomain: "hungry-hungry.firebaseapp.com",
  databaseURL: "https://hungry-hungry.firebaseio.com",
  projectId: "hungry-hungry",
  storageBucket: "hungry-hungry.appspot.com",
  messagingSenderId: "118706050620",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth, firebase };
