import React ,{useEffect, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Chat from './Chat';
import Logout from './Logout';
export default function CreateRoom({setIsAuth}) {
    let navigate=useNavigate();
    const [room,setRoom]=useState(null)
    let userInp=useRef();
    const enterRoom=()=>{
        setRoom(userInp.current.value);
    }
   
  return (
    <div>
      <div>
        <Logout></Logout>
      </div>
      {room ? (
        <div>
          <Chat room={room} />
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="container-sm shadow-xl mx-auto flex items-center justify-center flex-col dark:bg-gray-700 my-05 py-10 px-5 text-white gap-4">
            <h1 className=" text-3xl text-bold dark:bg-gray-700">
              Create Room Now!!
            </h1>
            <div className="flex flex-wrap justify-center items-center">
              <label htmlFor="room" className="text-2xl">
                Enter Room Name :
              </label>
              <input
                type="text"
                id="room"
                className="rounded-lg outline-gray-700 text-black p-1 ml-2"
                ref={userInp}
              />
            </div>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={enterRoom}
            >
              Enter Room
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
