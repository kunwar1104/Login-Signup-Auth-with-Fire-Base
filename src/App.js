import React from "react";
import './MyApp.css'
import Myrouter from "./Compo/My_router";
import { getAuth } from "firebase/auth"
import { createContext } from "react";

const auth = getAuth();
export const firebaseContext = createContext();

function App() {


 
  return (
    
    <firebaseContext.Provider >
     <Myrouter/>
    </firebaseContext.Provider>
    
  );
}
export {auth}
export default App;
