import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUV7u6vkfpVqeRqJBg6YxQyph454DzYRg",
  authDomain: "la-cabra-corp.firebaseapp.com",
  projectId: "la-cabra-corp",
  storageBucket: "la-cabra-corp.appspot.com",
  messagingSenderId: "173379048480",
  appId: "1:173379048480:web:48e51e928e57f2af531845",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
