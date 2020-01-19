import firebase from 'firebase'
var config = { 
    apiKey: "AIzaSyDYDaii4908iJEhtmx3hD_eWxm9MxPximw",
    authDomain: "dominos-codes.firebaseapp.com",
    databaseURL: "https://dominos-codes.firebaseio.com",
    projectId: "dominos-codes",
    storageBucket: "dominos-codes.appspot.com",
    messagingSenderId: "378044140901",
    appId: "1:378044140901:web:7e7819b41bba8d65f6e58c",
    measurementId: "G-RZ914NLRG5"
};
var fire = firebase.initializeApp(config);
export default fire;