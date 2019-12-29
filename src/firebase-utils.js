import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA-0EjyqYMc9EAeBYY70RgOfyMR_ZwEC_I",
  authDomain: "react-ecommerce-1d9f8.firebaseapp.com",
  databaseURL: "https://react-ecommerce-1d9f8.firebaseio.com",
  projectId: "react-ecommerce-1d9f8",
  storageBucket: "react-ecommerce-1d9f8.appspot.com",
  messagingSenderId: "88798290929",
  appId: "1:88798290929:web:f3bfe6a2d723f57e4a1a50",
  measurementId: "G-DDEDMWDWDW"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
