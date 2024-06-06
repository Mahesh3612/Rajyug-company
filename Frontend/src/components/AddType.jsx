import {useState } from "react";
import axios from "axios"

export const AddType = ()=>{

    const [user,setUser] = useState({})
  


    function handleChange(e){
        const {name,value} = e.target;
        setUser({...user,[name]:value})
            }

    async function handleAdd(){
        await axios.post("http://localhost:5000/api/admin/addType",user)
    }

    return(
    <>
    <h1>Add Appointment Type</h1>
        <input type="text" className="inputBox" placeholder="enter Type" onChange={handleChange} name="name"/>
        <button className="appButton" onClick={handleAdd}>Add</button></>
        
   
    )
}