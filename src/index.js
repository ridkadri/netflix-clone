import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles} from './global-styles'
import App from './App';
import {FirebaseContext} from './context/firebase';


const config = {
    apiKey: "AIzaSyDNKI4FQsuA6pdysIKmSjgRKk7mRdGZyd0",
    authDomain: "netflix-clone-a60fc.firebaseapp.com",
    databaseURL: "https://netflix-clone.firebaseio.com/",
    projectId: "netflix-clone-a60fc",
    storageBucket: "netflix-clone-a60fc.appspot.com",
    messagingSenderId: "926819612748",
    appId: "1:926819612748:web:66356283acb84b45c71ce9"
}

const firebase = window.firebase.initializeApp(config);
//seedDatabase(firebase);

ReactDOM.render(
    <FirebaseContext.Provider value={{firebase: window.firebase}}>
      <GlobalStyles/>
      <App />
    </FirebaseContext.Provider>,
  document.getElementById('root')
);

