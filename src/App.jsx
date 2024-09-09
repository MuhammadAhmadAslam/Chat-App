import { useState , useEffect } from 'react'
import ChatList from './Components/Chat List/ChatList';
function App() {


  let user = true;
  return (
    <>
      <div className="flex justify-center items-center">
      <div className="container bg-glass-background backdrop-blur-19 backdrop-saturate-180 border h-[100vh]">
        {
          user ? <ChatList /> : <Login />
        }
      </div>
      </div>
    </>
  )
}

export default App
