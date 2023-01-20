import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyArZ9Ns9J2LYgcl1xYmd0xg5pa2yhws7W0',
    authDomain: 'dreamy-shop-db.firebaseapp.com',
    projectId: 'dreamy-shop-db',
    storageBucket: 'dreamy-shop-db.appspot.com',
    messagingSenderId: '931926727556',
    appId: '1:931926727556:web:5623e1d7cade8d87231bd1',
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformations = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef); //
    const userSanpshot = await getDoc(userDocRef);
    if (!userSanpshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformations,
            });
        } catch (error) {
            console.log('error: ' + error);
        }
    }
};

export const createAuthUserWithEmailAndPassword = async ({ email, password }) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async ({ email, password }) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};
