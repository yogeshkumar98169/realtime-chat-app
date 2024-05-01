import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from '../App.jsx'
import Login from "../Components/Login.jsx"
import Home from '../Components/Home.jsx';
import CreateRoom from "../Components/CreateRoom.jsx"
import Chat from '../Components/Chat.jsx';
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="" element={<Home/>}></Route>
      <Route path="login" element={<Login />} />
      <Route path="createroom" element={<CreateRoom />}>
      <Route path="*" element={<Chat/>}/>

      </Route>
    </Route>
  )
);