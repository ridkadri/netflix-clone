import firebase from 'firebase';
import {seedDatabase} from './seed'

const firebaseConfig = {
    apiKey: "AIzaSyDNKI4FQsuA6pdysIKmSjgRKk7mRdGZyd0",
    authDomain: "netflix-clone-a60fc.firebaseapp.com",
    projectId: "netflix-clone-a60fc",
    storageBucket: "netflix-clone-a60fc.appspot.com",
    messagingSenderId: "926819612748",
    appId: "1:926819612748:web:66356283acb84b45c71ce9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

seedDatabase(firebase)

export {db, auth};
