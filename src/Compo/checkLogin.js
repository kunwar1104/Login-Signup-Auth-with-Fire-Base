import React from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth();

function checkLogin() {
  onAuthStateChanged(auth,() => {console.log();});
  return (
    <div>
      
     </div>
    ) 
 } 

export default checkLogin
