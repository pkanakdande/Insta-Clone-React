import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Postview from "./postview/Postview";
import Form from "./Form";

function Router(){
    return(
    
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="instaclone" element={<Postview/>}></Route>
            <Route path="instaclone/newpost" element={<Form/>}/>
           

            
        </Routes>
        </BrowserRouter>



    )
}
export default Router