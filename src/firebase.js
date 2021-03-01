  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC8Gs4An0pzL0XDwG07EFHO5rWeaNb4d7U",
    authDomain: "todo-app-react-f722a.firebaseapp.com",
    projectId: "todo-app-react-f722a",
    storageBucket: "todo-app-react-f722a.appspot.com",
    messagingSenderId: "832533984115",
    appId: "1:832533984115:web:da2579d2e0367b13df8b06"
  });

  const db = firebaseApp.firestore();

  export default db;