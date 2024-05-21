import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCQrZaMkMTyMVKwdMomEPCLS9miWQZkHjE",
    authDomain: "portfolio-db-d38ae.firebaseapp.com",
    projectId: "portfolio-db-d38ae",
    storageBucket: "portfolio-db-d38ae.appspot.com",
    messagingSenderId: "289633207187",
    appId: "1:289633207187:web:7004aa03c848c9ace09e66",
    measurementId: "G-QLJNSHLF08"
  };


  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
  console.log(db);
