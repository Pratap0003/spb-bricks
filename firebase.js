// firebase.js  (PURE JavaScript file)

importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyAvSI1FKa3icRSv93-lpL3VMRJ31hAFHgU",
  authDomain: "bricks-websit.firebaseapp.com",
  projectId: "bricks-websit",
  storageBucket: "bricks-websit.firebasestorage.app",
  messagingSenderId: "541227684303",
  appId: "1:541227684303:web:83a89c63abe23a339c42ba",
  measurementId: "G-E2XYKRYRRY"
};

firebase.initializeApp(firebaseConfig);

// expose globally
window.auth = firebase.auth();
window.db = firebase.firestore();
