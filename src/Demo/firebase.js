import {initializeApp} from 'firebase/app'; 

 const firebaseConfig = {
    apiKey: "AIzaSyDYnw3amovrtK6AhEJlVUW2yT-D6jSPSzI",
    authDomain: "my-app-cb248.firebaseapp.com",
    databaseURL: "https://my-app-cb248-default-rtdb.firebaseio.com",
    projectId: "my-app-cb248",
    storageBucket: "my-app-cb248.appspot.com",
    messagingSenderId: "324746461318",
    appId: "1:324746461318:web:47e05d36dbf8a7421e1107",
    measurementId: "G-VZZPE4C3KZ"
  };
  const app =  initializeApp(firebaseConfig);
  export {app}