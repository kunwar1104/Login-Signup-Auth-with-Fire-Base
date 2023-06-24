import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'


function Test1() {
   const creatUser = createUserWithEmailAndPassword(auth,'abc@gmail.com', '123456');
  return (
    <div>
           <button onClick={creatUser}>Click</button>
    </div>
  )
}

export default Test1
