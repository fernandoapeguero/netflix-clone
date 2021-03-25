import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyle} from './globalstyles'
import {FirebaseContext} from './context/firebase'
import firebase from "firebase/app";
// import {seedDatabase} from './seed';

const config = {
  apiKey: "AIzaSyBAvR_XkK2Grx7FRABLiqHGIpbXhmeDUgo",
  authDomain: "netflix-clone-85796.firebaseapp.com",
  projectId: "netflix-clone-85796",
  storageBucket: "netflix-clone-85796.appspot.com",
  messagingSenderId: "74442859189",
  appId: "1:74442859189:web:cab37c9ebc0d64225c54fc"
};

firebase.initializeApp(config);


ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase: firebase}}>
      <GlobalStyle/>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
