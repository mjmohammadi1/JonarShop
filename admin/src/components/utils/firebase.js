import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAk7g2O0ls2rS8-_BKDs57scozH1UFIyNU",
  authDomain: "jonar-shop.firebaseapp.com",
  projectId: "jonar-shop",
  storageBucket: "jonar-shop.appspot.com",
  messagingSenderId: "74380277104",
  appId: "1:74380277104:web:2b7db0ef702991f5114bb5",
};

const fireBaseApp = initializeApp(firebaseConfig);
export default fireBaseApp;
