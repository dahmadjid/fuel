// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, get, ref, DataSnapshot } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrjXuyDkljaJ9IDDIP8M4wbyBs2IUPB88",
  authDomain: "fuel-consumption-742fd.firebaseapp.com",
  databaseURL: "https://fuel-consumption-742fd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fuel-consumption-742fd",
  storageBucket: "fuel-consumption-742fd.appspot.com",
  messagingSenderId: "934877344407",
  appId: "1:934877344407:web:9c628e5af1af11c4c52fd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const rtdb = getDatabase(app);


export async function getData(path:string)
{
    return (await get(ref(rtdb, path))).toJSON();

}