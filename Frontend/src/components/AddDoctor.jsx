import { useState } from "react";
import axios from "axios"

export const AddDoctor = () => {

    const [user, setUser] = useState({})



    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

            



    async function handleAdd(){
        try {
            console.log(user);
            const response = await axios.post("http://localhost:5000/api/admin/addDoctor", user);
            console.log("Doctor added successfully:", response.data);
          
          } catch (error) {
            console.error("Error adding doctor:", error);
            
          }
    }

    return (
        
            <>
            <h1>Add Doctor</h1>
            <input type="text" className="inputBox" placeholder="enter Name" onChange={handleChange} name="name" />
            <input type="text" className="inputBox" placeholder="enter Degree" onChange={handleChange} name="degree" />
            <button className="appButton" onClick={handleAdd}>Add</button></>
            
       
    )
}