import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBvmDZnbJS1rX1MfRIDiE9CkyTrvHeL_h4",
  authDomain: "steno-doti.firebaseapp.com",
  projectId: "steno-doti",
  storageBucket: "steno-doti.appspot.com",
  messagingSenderId: "769836858194",
  appId: "1:769836858194:web:adf5c28febe929b452188b",
  measurementId: "G-SBB16MXNJ0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);