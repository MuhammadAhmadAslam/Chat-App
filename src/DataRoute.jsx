import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";


function RouteData(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}


export default RouteData;