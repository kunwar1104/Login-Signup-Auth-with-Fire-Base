import React from 'react'
import Home from "../Pages/Home";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../Pages/Login';
import SignUp from "../Pages/SignUp"

function Myrouter() {
  return (
    <>
  <BrowserRouter>
    <Routes>

      <Route index element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>

    </Routes>
  </BrowserRouter>
      
    </>
  )
}

export default Myrouter
