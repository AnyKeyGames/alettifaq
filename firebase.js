
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBIP5R7ssofNmmJFltD4jOQmNvRzGQxuc8",
    authDomain: "ettifaq-cc765.firebaseapp.com",
    projectId: "ettifaq-cc765",
    storageBucket: "ettifaq-cc765.appspot.com",
    messagingSenderId: "201871934067",
    appId: "1:201871934067:web:1aaedba297ee0f79726006",
    measurementId: "G-V9MTVG627L"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
