// // Your Firebase configuration snippet from Firebase Console
// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     projectId: "event-3b849",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
//   };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAzScWriH93kzL2yVX1GMV5sYwI77sngcA",
    authDomain: "event-3b849.firebaseapp.com",
    projectId: "event-3b849",
    storageBucket: "event-3b849.firebasestorage.app",
    messagingSenderId: "218523658445",
    appId: "1:218523658445:web:f86737f9d1c48f9d5a2184",
    measurementId: "G-YZJ6KHYMDT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
