import React from 'react'
import "../MyApp.css"
// import "../Images/demo.jpg"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
  <div className='Bacground_parent' style={{position:'sticky',top:'0px'}}> 
    <div className='Main_div'> 
     <div>  
      <ul className='Nav_compo'>
        <li className='Dropdown'>Home
          <li className="li"><a href='/'>Link 1</a></li>
          <li className=""><a href='/'>Link 2</a></li>
          <li className=""><a href='/'>Link 3</a></li>
        </li>
          <li>Services</li>
          <li>AboutUs</li>
          <li >DropDrown</li>
       </ul>
      </div>
       <div className='btn'>  
         <Link to="/login"><button  className='btn-01'>Login</button></Link>
         <Link  to="/SignUp"><button className='btn-01'>SignUp</button></Link>       
       </div>

       
    </div>
   </div>

    <div>
      <div className="Bacground_img"> 
      </div>
    </div>
    </>
  )
}

export default Navbar
