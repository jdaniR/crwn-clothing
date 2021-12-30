import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDiS9uForodn-dc30PVHbplL6DlpkkIubc",
  authDomain: "crwn-db-d6601.firebaseapp.com",
  projectId: "crwn-db-d6601",
  storageBucket: "crwn-db-d6601.appspot.com",
  messagingSenderId: "534157363689",
  appId: "1:534157363689:web:9967c3a83324b36c5ae378",
  measurementId: "G-J6PVTENYDG",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc("users/124hdskjahfkjlahs");
  console.log(userRef);

  const snapShot = await userRef.get();

  console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
