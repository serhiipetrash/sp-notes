import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBifz2XmrkzB34hYjIND2XG9akPikWMzbY',
  authDomain: 'notes-d6a88.firebaseapp.com',
  projectId: 'notes-d6a88',
  storageBucket: 'notes-d6a88.appspot.com',
  messagingSenderId: '961155161695',
  appId: '1:961155161695:web:dda1f33d1699f25843c5ea'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
