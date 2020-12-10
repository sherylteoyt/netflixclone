import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// Need to seed the database 
const config = {
    apiKey: "AIzaSyBtW8N7htdwDvKj6XxXMgW5_VUS-nCik64",
    authDomain: "netflix-2ee25.firebaseapp.com",
    databaseURL: "https://netflix-2ee25-default-rtdb.firebaseio.com",
    projectId: "netflix-2ee25",
    storageBucket: "netflix-2ee25.appspot.com",
    messagingSenderId: "91203324326",
    appId: "1:91203324326:web:031ae53829171d822a6767"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
