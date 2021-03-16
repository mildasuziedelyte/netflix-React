import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDPKcn5Mt0EXbYkgHI_fj9-GsOwYqkeJxU",
    authDomain: "netflix-756df.firebaseapp.com",
    projectId: "netflix-756df",
    storageBucket: "netflix-756df.appspot.com",
    messagingSenderId: "296303056201",
    appId: "1:296303056201:web:a5d67a620e53f98c0b7698"
 };

const firebase = Firebase.initializeApp(config);

export { firebase };