import React,{useEffect, useState} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Components/Navbar'

export default function App() {
  let navigate=useNavigate();
  const [isAuth,setIsAuth]=useState(localStorage.getItem("auth-token"));
  console.log(isAuth)
  useEffect(()=>{
    if (isAuth) {
      navigate("/createroom");
    }
    else{
      navigate("/login")
    }
  },[])
  return (
    <div>
      <Navbar/>
      <Outlet setIsAuth={setIsAuth}/>
    </div>
  )
}
