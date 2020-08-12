import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCFNMnjrwswQcW-Mt3qitjvJRoSOHGFumM',
  authDomain: 'slack-clone-salle.firebaseapp.com',
  databaseURL: 'https://slack-clone-salle.firebaseio.com',
  projectId: 'slack-clone-salle',
  storageBucket: 'slack-clone-salle.appspot.com',
  messagingSenderId: '335506747528',
  appId: '1:335506747528:web:628af81457109528b4af3d',
  measurementId: 'G-Q9QN4SKB97',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
