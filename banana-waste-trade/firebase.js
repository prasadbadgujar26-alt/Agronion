
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
  import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDmiNcEUGLN9HNg9XzyYfh1DhqfDHxqXoQ",
    authDomain: "banana-waste-trade.firebaseapp.com",
    databaseURL: "https://banana-waste-trade-default-rtdb.firebaseio.com",
    projectId: "banana-waste-trade",
    storageBucket: "banana-waste-trade.firebasestorage.app",
    messagingSenderId: "402065467324",
    appId: "1:402065467324:web:50a283b3b6e4d112cb2db9",
    measurementId: "G-2YCC0CY9PN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db = getDatabase(app);
  export const auth = getAuth(app);

  // const analytics = getAnalytics(app);

