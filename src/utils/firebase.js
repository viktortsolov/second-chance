import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase }; 