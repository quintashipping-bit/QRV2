// src/services/firebase.js

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBc1sS-x98QTSeZH--_A3pLMkmPdJTCl6M",
  authDomain: "fixed-price-contract.firebaseapp.com",
  projectId: "fixed-price-contract",
  storageBucket: "fixed-price-contract.firebasestorage.app",
  messagingSenderId: "438551886150",
  appId: "1:438551886150:web:554cb893c8b50f3ed98d47"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)