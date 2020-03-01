import firebase from "firebase/app";
import "firebase/storage";

let config = {
  apiKey: "AIzaSyBy6qJByKsfLg7sUNJ2v43W6QNF-cEzsok",
  authDomain: "instagram-app-react.firebaseapp.com",
  databaseURL: "https://instagram-app-react.firebaseio.com",
  projectId: "instagram-app-react",
  storageBucket: "instagram-app-react.appspot.com",
  messagingSenderId: "698722395096",
  appId: "1:698722395096:web:ebc972e46c83d356d988ad",
  measurementId: "G-TMSZ2TR08M"
};

firebase.initializeApp(config)

const storage = firebase.storage()

export {
    storage, firebase as default
}
