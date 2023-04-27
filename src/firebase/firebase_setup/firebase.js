import { initializeApp } from "firebase/app";
import {
    getFirestore
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAV10x4Oe-O32rIyPPVqrMZFsJ5QqtVK5w",
  authDomain: "to-do-app-67b6e.firebaseapp.com",
  projectId: "to-do-app-67b6e",
  storageBucket: "to-do-app-67b6e.appspot.com",
  messagingSenderId: "316159673247",
  appId: "1:316159673247:web:6625d069156dd8e1afb3aa"
};

initializeApp(firebaseConfig);
export const firestore = getFirestore();