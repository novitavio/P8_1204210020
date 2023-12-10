import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp ({
  apiKey: "AIzaSyBIWYFHGLnT6oIH_KR119u5Oi0XINUuhew",
  authDomain: "fir-d5714.firebaseapp.com",
  databaseURL: "https://fir-d5714-default-rtdb.firebaseio.com",
  projectId: "fir-d5714",
  storageBucket: "fir-d5714.appspot.com",
  messagingSenderId: "627419170196",
  appId: "1:627419170196:web:c601725fcb46110b53bb81"
});

export default firebase;

