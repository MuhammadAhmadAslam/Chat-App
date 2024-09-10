import { useState , useEffect } from 'react'
import ChatList from './Components/Chat List/ChatList';
function App() {


  let user = true;
  return (
    <>
     
        {
          user ? <ChatList /> : <Login />
        }

    </>
  )
}

export default App
