import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDss4cCzZx9Ju3olMqsU2Z-_94WYfs_5d4",
    authDomain: "vue-firebase-example-b6103.firebaseapp.com",
    databaseURL: "https://vue-firebase-example-b6103.firebaseio.com",
    projectId: "vue-firebase-example-b6103",
    storageBucket: "vue-firebase-example-b6103.appspot.com",
    messagingSenderId: "703296191002",
    appId: "1:703296191002:web:0e70cba9f0fc07a6d06fa3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }