import React, { useState } from 'react'
import Navbar from './Navbar'
import "../MyApp.css"
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// import { useNavigate } from 'react-router-dom'
const auth = getAuth();
const google = new GoogleAuthProvider();

const googleSignUp = () =>{

  signInWithPopup (auth,google)
}

function SignUp() {
  // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  // const [alert, setAlert] = useState(false)
  const cteatUser = () => {
    createUserWithEmailAndPassword(auth, email,pass)
    .then((userCredential) => {
      console.log(userCredential);
      // navigate('/');

    })
    // .catch((error) => {
    //   // const errorCode = error.code;
    //   // const errorMessage = error.message;
    // });
  }

  return (
 <div>   
  <Navbar/>  
   <form className='Signup_Maindiv' >
    <div className='Signup_child'>
      <h2>Sign Up</h2>

      <div className='Input'>
        <br/><br/>
        <p><input className='Input_id' type={"Text"} placeholder={"Name"}/></p>
        <p><input className='Input_id' type={"Text"} placeholder={"Address"}/></p>
        <p><input className='Input_id' 

        value={email} onChange={(e) => setEmail(e.target.value)}
        type={"Text"} placeholder={"Email"}/></p>

        <p><input className='Input_id' type={"Password"} 
        value={pass} onChange={(e) => setPass(e.target.value)}
        placeholder={"Address"}/></p>
         
        <p><input className='Input_id' type={"Number"} placeholder={"Mobile Nummber"}/></p>
      </div>
      <br/>
      <div className='submit-btn'>  
         <button  className='submit-btn-01' 
         onClick={cteatUser}>SignUp</button>
         <button  className='submit-btn-01'
         onClick={googleSignUp}
         >SignUp With Google</button>
       </div>
      
    </div>
   </form>
 </div>
  )
}

export default SignUp
