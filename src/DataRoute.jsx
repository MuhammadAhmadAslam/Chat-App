import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import MediumChat from "./Components/Chat List/MediumChatList";
import Login from "./Components/Login SignUp/Login";
import SignUp from "./Components/Login SignUp/SignUp";


function RouteData(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/chat" element={<MediumChat />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}


export default RouteData;