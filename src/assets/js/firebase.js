// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCHqHJ_lLPG3N1vPQOvuLDqQSyu0UlNRHs",
	appId: "1:869935157727:web:38a6c7f9a49f7f7c30b46a",
	authDomain: "windowsdock.firebaseapp.com",
	databaseURL: "https://windowsdock.firebaseio.com",
	measurementId: "G-MN7TLVEMR9",
	messagingSenderId: "869935157727",
	projectId: "windowsdock",
	storageBucket: "windowsdock.appspot.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const performance = getPerformance(app);
