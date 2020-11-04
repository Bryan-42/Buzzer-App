import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyCYbfhVZ9l63_Hwipb6ruzieia-Pru298g",
    authDomain: "buzzer-app-b633c.firebaseapp.com",
    databaseURL: "https://buzzer-app-b633c.firebaseio.com",
    projectId: "buzzer-app-b633c",
    storageBucket: "buzzer-app-b633c.appspot.com",
    messagingSenderId: "540395893800",
    appId: "1:540395893800:web:6101ea935997a38421311d",
    measurementId: "G-Q2XPKTGC08"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();