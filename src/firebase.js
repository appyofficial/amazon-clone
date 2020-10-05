import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAi4sTrFgl-b7fqvOp4gEru9SrG8BoxVTk",
  authDomain: "clone-app-5d9eb.firebaseapp.com",
  databaseURL: "https://clone-app-5d9eb.firebaseio.com",
  projectId: "clone-app-5d9eb",
  storageBucket: "clone-app-5d9eb.appspot.com",
  messagingSenderId: "624276014585",
  appId: "1:624276014585:web:c6c63a8a002a6b06c56928",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
