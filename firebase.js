<!-- firebase.js -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

<script>
const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_AUTH_DOMAIN",
  projectId: "PASTE_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
</script>
const firebaseConfig = { apiKey: "AIzaSyAvSI1FKa3icRSv93-lpL3VMRJ31hAFHgU", authDomain: "bricks-websit.firebaseapp.com", projectId: "bricks-websit", storageBucket: "bricks-websit.firebasestorage.app", messagingSenderId: "541227684303", appId: "1:541227684303:web:83a89c63abe23a339c42ba", measurementId: "G-E2XYKRYRRY" };