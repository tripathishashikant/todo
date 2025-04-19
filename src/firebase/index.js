import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbm0bvpE3LzS2F2oRDDoMUtwTUO3YxAjM",
  authDomain: "todo-app-25385.firebaseapp.com",
  projectId: "todo-app-25385",
  storageBucket: "todo-app-25385.firebasestorage.app",
  messagingSenderId: "512953652170",
  appId: "1:512953652170:web:57f11d36f4b81196fcb533"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
}
