import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBBmbVxckRH3T8omGngH5dCvFeJzmdmFYc",
  authDomain: "control-asistencia-qr-10690.firebaseapp.com",
  projectId: "control-asistencia-qr-10690",
  storageBucket: "control-asistencia-qr-10690.firebasestorage.app",
  messagingSenderId: "649067063235",
  appId: "1:649067063235:web:7e914899b3b69bd4857f76"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);