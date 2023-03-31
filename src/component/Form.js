import React, { useState } from "react"
import Nav from "./Nav"
import { Navigate, useNavigate } from "react-router-dom"
import "../component/css/form.css"




function Form(){
    let navigator=useNavigate()
    const [formData,setFormData]=useState({
     
        name:"",
        location:"",
        likes:"",
        description:"",
        PostImage:"",
        date:new Date()
        
    })
   
 
    async function submitForm(e){

        e.preventDefault() 
        const data=new FormData(e.target)
        console.log(data)
        data.append("likes",0)
        data.append("date",new Date())

       
       await fetch("https://insta-clone-backend-by2z.onrender.com/postdata",{
            method:"post",
            body:data,
            
        })
        .then((data)=>data.json())
        .then((responce)=>console.log(responce))
       navigator(-1)
    }

    function updateData(e,propName){
   let temp=e.target.value
   setFormData(data =>({
    ...data,[propName]:temp
   }))
   
    }
  function fileSubmit(e,prop){
     setFormData((data)=>({
        ...data,[prop]:e.target.files
     }))

  }

  

    return(
        <>
        <Nav/>
<div className="parentForm" >
    <form onSubmit={submitForm} method="post"  >
        <div>
            <input type="file" placeholder="image" name="PostImage" onChange={e=>fileSubmit(e,"PostImage")}></input>
        </div>
        
        
        <div>
       
        <input type="text" placeholder="Name" name="name" onChange={e =>fileSubmit(e,"name")} 
        value={formData.name}/>
       
        <input type="text"  placeholder="location" name="location" onChange={e => fileSubmit(e,"location")}/>
        </div>

        <div>
       
        <input type="text" name="description" onChange={e => fileSubmit(e,"description")} placeholder="description"/>

        </div>

        <button type="submit">post</button>
    </form>
</div>
</>
    )
}
export default Form





