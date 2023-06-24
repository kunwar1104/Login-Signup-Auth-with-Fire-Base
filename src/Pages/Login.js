import React, { useState } from 'react'
import '../MyApp.css'
import Navbar from './Navbar'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

const auth = getAuth();
function Login() {
     const [email, setEmail] = useState('');
     const [pass, setPass] = useState('');

    //  const navigate = useNavigate();
     
     const loginEvent = (email, pass) =>
  {   
     signInWithEmailAndPassword(auth, email,pass)
     .then(() =>{
      // navigate("/")
     })
    //  .catch((err) =>{
    //   console.log(err);
    //  })
 }

  return (
    <div >
    <Navbar/>
    <form className='Signup_Maindiv'>
       <div className='Signup_child'>
      
      <h2>Login</h2>

       <div className='Input'>
          <br/><br/>
          <br/><br/>
          <p><input className='Input_id'  value={email} onChange={(e) => setEmail(e.target.value)}
           type={"Email"} placeholder={"Email"} /></p>

          <p><input className='Input_id' type={Text}
           value={pass} onChange={(e) => setPass(e.target.value)} placeholder={"Password"}/></p>
       </div>
       <br/>
       <div className='submit-btn'>  
         <button  className='submit-btn-01'
         onClick={() => loginEvent (email,pass)}>Login</button>
       </div>

       </div>
    </form>
    
    </div>
  )
}

export default Login
