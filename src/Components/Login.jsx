import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider } from "../firebaseConfig.js";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
export default function Login() {
  let navigate=useNavigate();
   const signInWithGoogle = async ({setIsAuth}) => {
     try {
       const result = await signInWithPopup(auth, provider);
       console.log(result);
       console.log(result.user?.refreshToken)
       localStorage.setItem("auth-token", result.user?.refreshToken);
       navigate("/createroom")
     } catch (err) {
       console.log(err);
     }
   };
   useEffect(()=>{
    if(localStorage.getItem("auth-token")){
      navigate('/createroom')
    }
   },[])
  return (
    <div className=" shadow-md flex justify-center place-items-center flex-col p-4 w-96 mx-auto my-10 bg-white border-gray-200 dark:bg-gray-900">
      <div className='text-white'>Let's begin your journey today</div>
      <div>
        <GoogleButton
          type="light"
          className="!w-72 !rounded-3xl !flex !justify-around mt-10"
          onClick={signInWithGoogle}
        />
      </div>
    </div>
  );
}
