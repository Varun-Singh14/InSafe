import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyCuO5rqdQNs_dFOSinZt5RKEYplnJwcyfo",
    authDomain: "sheild-cbf0a.firebaseapp.com",
    projectId: "sheild-cbf0a",
    storageBucket: "sheild-cbf0a.appspot.com",
    messagingSenderId: "495202153674",
    appId: "1:495202153674:web:2aeb2e6a4da44d3413b033",
    measurementId: "G-9QPW3BC8XF"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };