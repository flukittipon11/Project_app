import * as firebase from 'firebase';
import { DarkTheme, DefaultTheme } from 'react-native-paper';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAsT3puc854Fnz3NvIIrlADyRD46tPYcbU",
    authDomain: "projectjanfluk.firebaseapp.com",
    databaseURL: "https://projectjanfluk-default-rtdb.firebaseio.com",
    projectId: "projectjanfluk",
    storageBucket: "projectjanfluk.appspot.com",
    messagingSenderId: "565090435465",
    appId: "1:565090435465:web:4586044449b14911852158",
    measurementId: "G-HBYY94967E"
};
// Initialize Firebase

if (firebaseConfig.apiKey != undefined && !firebase.inited) {
    firebase.initializeApp(firebaseConfig);
    firebase.inited = true;
}

/*
const theme = {
  dark: false,
  colors: {
          primary: '#000',
          accent: '#FA0',
          background: '#EEE',
          surface : '#777',
          text: '#555',
          card: '#999',
          border : '#666',
    },    
}   
*/
global.app = null;
global.type = "";
global.amount = 0;
global.Description = "";
(global.firebase = firebase),
   //  (global.theme = DarkTheme),
    (global.config = firebaseConfig),
    (global.comma = function (num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    });

export default global;
