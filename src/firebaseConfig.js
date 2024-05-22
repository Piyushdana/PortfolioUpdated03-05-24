import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "@firebase/firestore";

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
const db = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(db)
    .catch((err) => {
        if (err.code === 'failed-precondition') {
            console.error("Multiple tabs open, persistence can only be enabled in one tab at a a time.");
        } else if (err.code === 'unimplemented') {
            console.error("The current browser does not support all of the features required to enable persistence.");
        }
    });

export { db };
