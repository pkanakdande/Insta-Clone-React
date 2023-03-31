import React from "react"
import "./css/nav.css"
import svglogo from "./images/svglogo.png"
import th from "./images/th.jpg"
import { Link } from "react-router-dom"
import Form from "./Form"
function Nav(){
    return(
     <>
     
      
             <div className="nav-container">
                
                <img src={svglogo} alt="insta clone" style={{width:'60px',height:"50px"}}  id="logo"/> <h1 id="h1">InstaClone</h1>
                <Link to="newpost"  element={<Form/>}>  <img id="camera" src={th} alt="camera_icon" style={{width:'90px',float:'right'}} /></Link>
                
                
             </div>
          
    </>
    )
}


export default Nav