import { useState, useEffect, useContext } from 'react'
import ChatList from './Components/Chat List/ChatList';
import Login from './Components/Login SignUp/Login';
import SignUp from './Components/Login SignUp/SignUp';
import UserContextProvider, { UserContext } from './Components/app context/Usercontext';
function App() {


  let { user } = useContext(UserContext)
  console.log(user);


  return (
    <>


      {
        user.isLogin ? <ChatList /> : <SignUp />
      }



    </>
  )
}

export default App
