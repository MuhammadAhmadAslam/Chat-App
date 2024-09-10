import { useState , useEffect } from 'react'
import ChatList from './Components/Chat List/ChatList';
import Login from './Components/Login SignUp/Login';
import SignUp from './Components/Login SignUp/SignUp';
function App() {


  let user = false;
  return (
    <>
     
        {
          user ? <ChatList /> : <SignUp />
        }

    </>
  )
}

export default App
