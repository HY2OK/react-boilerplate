// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'test-ba858.firebaseapp.com',
  projectId: 'test-ba858',
  storageBucket: 'test-ba858.appspot.com',
  messagingSenderId: '241707715841',
  appId: '1:241707715841:web:7364744529de4c19595f00',
  measurementId: 'G-X8WV1STMD0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

export default app
