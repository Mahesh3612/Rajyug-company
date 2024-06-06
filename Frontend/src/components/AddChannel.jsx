import { useState } from "react";
import axios from "axios"

export const AddChannel = ()=>{

    const [user,setUser] = useState({})
  


    function handleChange(e){
        const {name,value} = e.target;
        setUser({...user,[name]:value})
            }

    async function handleAdd(){
        await axios.post("http://localhost:5000/api/admin/addChannel",user)
    }

    return(
    <>
    <h1>Add Appointment Channel</h1>
        <input type="text" className="inputBox" placeholder="enter Channel" onChange={handleChange} name="name"/>
        <button className="appButton" onClick={handleAdd}>Add</button></>

    )
}