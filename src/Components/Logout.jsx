import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    let navigate=useNavigate();
    const UserSignOut = () => {
     signOut(auth)
       .then(() => {
         console.log("sign out");
         localStorage.removeItem("auth-token");
         navigate("/login")
       })
       .catch((err) => {
         console.log(err);
       });
   };
  return (
    <div className="flex justify-end items-end m-5">
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={UserSignOut}>
        Log out
      </button>
    </div>
  );
}
