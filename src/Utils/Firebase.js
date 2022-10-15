import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyClLQbYpaLllR205G9OdwQ1BNfCCTm96oQ",
  authDomain: "mak-e-board-85a18.firebaseapp.com",
  databaseURL: "https://mak-e-board-85a18-default-rtdb.firebaseio.com",
  projectId: "mak-e-board-85a18",
  storageBucket: "mak-e-board-85a18.appspot.com",
  messagingSenderId: "844907432075",
  appId: "1:844907432075:web:a34b29de8fb21f75e9ac8e",
  measurementId: "G-V0PPLC9F6Q",
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// const analytics = getAnalytics(app);
