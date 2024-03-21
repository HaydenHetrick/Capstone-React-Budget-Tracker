import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAWkF3d7C2O8uOetPf6aTyMAj5z0HT3D9g",
	authDomain: "balancebudgetplanner.firebaseapp.com",
	projectId: "balancebudgetplanner",
	storageBucket: "balancebudgetplanner.appspot.com",
	messagingSenderId: "163930114589",
	appId: "1:163930114589:web:c89ef88b546b7b8d0e54f4",
	measurementId: "G-XYQKTRFS12"
  };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
