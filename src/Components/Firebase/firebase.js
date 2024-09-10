import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCuSu7pS-6py7fLT4YcrYo6dKpGkUQFMqM",
  authDomain: "chat-app-7b945.firebaseapp.com",
  projectId: "chat-app-7b945",
  storageBucket: "chat-app-7b945.appspot.com",
  messagingSenderId: "673674336592",
  appId: "1:673674336592:web:419dfb2842868b75a0b455"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);