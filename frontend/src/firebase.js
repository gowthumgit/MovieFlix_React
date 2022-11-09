import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWNqajsAoSwcxGk-FEtn98TtJn4vA6J6s",
  authDomain: "multiplex-74d1b.firebaseapp.com",
  projectId: "multiplex-74d1b",
  storageBucket: "multiplex-74d1b.appspot.com",
  messagingSenderId: "146454353236",
  appId: "1:146454353236:web:7369239d509a96457364c1",
  measurementId: "G-K066WTXZ15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
