require("dotenv").config()
const firebase = require("firebase/compat/app")
require('firebase/compat/storage')

const firebaseConfig = {
    apiKey:process.env.FIREBASE_API,
    authDomain: "colormedia-socialmedia.firebaseapp.com",
    projectId: "colormedia-socialmedia",
    storageBucket: "colormedia-socialmedia.appspot.com",
    messagingSenderId: "67965839100",
    appId: "1:67965839100:web:a7ab8eec02e13c3d889979",
    measurementId: "G-623ZL9TQDX"
  };
  
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  module.exports = storage;



