// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRHnJOjthIqVVMogeHNtX6khqC-7GVJ3Q",
  authDomain: "the-chef-zone-client.firebaseapp.com",
  projectId: "the-chef-zone-client",
  storageBucket: "the-chef-zone-client.appspot.com",
  messagingSenderId: "541090405944",
  appId: "1:541090405944:web:9e13143f3d25902d43d0cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;