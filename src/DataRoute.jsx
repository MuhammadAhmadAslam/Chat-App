import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import MediumChat from "./Components/Chat List/MediumChatList";


function RouteData(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/chat" element={<MediumChat />} />
            </Routes>
        </BrowserRouter>
    )
}


export default RouteData;