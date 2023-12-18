import { initializeApp } from 'firebase/app';

/**CONFIGURATION OF ACESS FIREBASE */
export const firebaseConfig = {
  apiKey: "AIzaSyCOJyMqug3XZxzz7yht8nVUIc9FD6qmWDI",
  authDomain: "stardewvalleywikipedia.firebaseapp.com",
  projectId: "stardewvalleywikipedia",  
  storageBucket: "stardewvalleywikipedia.appspot.com",
  messagingSenderId: "98980609109",
  appId: "1:98980609109:web:8f127e7d87d4a37f0d28dc",
  measurementId: "G-JBQC1E6VNQ"
};

const app = initializeApp(firebaseConfig);