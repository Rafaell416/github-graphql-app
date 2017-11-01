
import * as firebase from 'firebase'

const firebaseConfig = {
   apiKey: "AIzaSyAQ6BWT7ZZrK61Nv5k_t3Hq1nP37QseuOk",
   authDomain: "github-explorer-441e5.firebaseapp.com",
   databaseURL: "https://github-explorer-441e5.firebaseio.com",
   projectId: "github-explorer-441e5",
   storageBucket: "github-explorer-441e5.appspot.com",
   messagingSenderId: "640044474785",
}

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
export const firebaseAuth = firebase.auth
