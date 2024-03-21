import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYqVP3DhQcJ2E9H0mS--XBA5yt7Ik63co",
  authDomain: "balance-planner-209a1.firebaseapp.com",
  projectId: "balance-planner-209a1",
  storageBucket: "balance-planner-209a1.appspot.com",
  messagingSenderId: "396613752149",
  appId: "1:396613752149:web:ac0ec1a860f4f075308bdc",
  measurementId: "G-H1QRZV4PZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);