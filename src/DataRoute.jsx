import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import MediumChat from "./Components/Chat List/MediumChatList";
import Login from "./Components/Login SignUp/Login";
import SignUp from "./Components/Login SignUp/SignUp";
import Widget from "./Components/Chat List/demo";


function RouteData(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/chat/uid/:uid/userName/:userName/" element={<MediumChat />} />
                <Route path="/login" element={<Login />} />
                <Route path="/data" element={<Widget />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}


export default RouteData;