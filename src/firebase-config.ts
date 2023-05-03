import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBB21sd_eZftHdx_ymzD8SjHP5AocYPsnI",

  authDomain: "syb-database.firebaseapp.com",

  databaseURL: "https://syb-database-default-rtdb.firebaseio.com",

  projectId: "syb-database",

  storageBucket: "syb-database.appspot.com",

  messagingSenderId: "357903313428",

  appId: "1:357903313428:web:11a8a490191f92bcabd501",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
