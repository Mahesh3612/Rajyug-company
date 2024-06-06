
import axios from 'axios';
import './Booking.css';
import {  useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
const Booking = () => {

    const [user,setUser] = useState({})
    const [doctor,setDoctor] = useState([])
    const [channel,setChannel] = useState([])
    const [type,setType] = useState([])

    function handleChange(e){
        const {name,value} = e.target;
        setUser({...user,[name]:value})
            }    

      async function getUser(){
        try {
            console.log(user);
            const response = await axios.post("http://localhost:5000/api/user/register", user);
            console.log("Doctor added successfully:", response.data);
          
          } catch (error) {
            console.error("Error adding doctor:", error);
            
          }
      }

      async function GetDoctor(){
        const data = await axios.get("http://localhost:5000/api/admin/getDoctor")
        setDoctor(data.data)
      }

      async function GetType(){
        const data = await axios.get("http://localhost:5000/api/admin/getType")
        setType(data.data)
      }

      async function GetChannel(){
        const data = await axios.get("http://localhost:5000/api/admin/getChannel")
        setChannel(data.data)
      }


      useEffect(()=>{
        GetDoctor()
        GetChannel()
        GetType()

        console.log(doctor)
      },[])

      
    return (

<><div style={{ display: "flex", margin: "auto", width: "50%", justifyContent: "space-between" }}>
        <Link to={"/user"} style={{ textDecoration: "none" }}>
            <h1 style={{ color: "rgb(99,160,201)", cursor: "pointer" }}>Appointment Booking</h1>
        </Link>
        <Link to={"/admin-log"} style={{ textDecoration: "none" }}>
            <h1 style={{ color: "rgb(99,160,201)", cursor: "pointer" }}>Admin</h1>
        </Link>
    </div>
    
    <div id="container">

            

<div id='u-container'>
    <div>
        <p>Details</p>
        <select className='u-l-select' onChange={handleChange} name="doctor" >
            <option value="">Select Doctor</option>

            {doctor.length>0 && doctor.map((el,i)=>(
                <option key={i} value={el.name}>{el.name} - {el.degree}</option>
            ))}

        </select> <br />
        <select className='u-l-select' onChange={handleChange} name="appointment" >
            <option value="volvo">Select Appointment channel</option>

            {channel.length>0 && channel.map((el,i)=>(
                <option key={i} value={el.name}>{el.name}</option>
            ))}
        </select> <br />

        <input id='u-l-input' type="text" placeholder='Appoinment Tiltle' onChange={handleChange} name="title" />
    </div>
    <div>
        <p>Appointment Detail</p>
        <input id='u-r-input' type="text" placeholder='Name' onChange={handleChange} name="name" />  
        <select className='u-r-select' onChange={handleChange} name="gender" >
        <option >Gender</option>
            <option value="male">M</option>
            <option value="female">F</option>
        </select> 
        <div style={{display: "flex"}}>
        <input type="checkbox" />
        <h5 style={{ marginTop: "2%", marginBottom: "2%", width: "45%" }}>Walk-in Appoinment</h5> 
        </div>
        

        <select className='u-r-select' onChange={handleChange} name="time">
            <option value="volvo">Time</option>
            <option value="12:00-12:30">12:00-12:30</option>
            <option value="12:30-1:00">12:30-1:00</option>
        </select>

        <input className='date' type="date" onChange={handleChange} name="date" /> <br />

        <select className='u-l-select' onChange={handleChange} name="type" >
            <option value="">Select Appoinment Type</option>
            {doctor.length>0 && type.map((el,i)=>(
                <option key={i} value={el.name}>{el.name}</option>
            ))}
        </select>

    </div>
</div>
<hr />

<p style={{ marginLeft: "5%" }}>Vital Information</p>

<div id='first-container'>
    <input type="text" placeholder='BP' onChange={handleChange} name="bp" />
    <input type="text" placeholder='Temp' onChange={handleChange} name="temp"/>
    <input type="text" placeholder='Height'onChange={handleChange} name="height"/>
    <input type="text" placeholder='Weight' onChange={handleChange} name="weight"/>
    <input type="text" placeholder='SPO2' onChange={handleChange} name="spo2"/>
    <input type="text" placeholder='Pulse Rate' onChange={handleChange} name="pulse"/>
</div>

<div id='second-container'>
    <input type="text" placeholder='Reason' onChange={handleChange} name="reason" />
    <input type="text" placeholder='Note for doctor'onChange={handleChange} name="note"/>
</div>

<div id='button'>

<button style={{marginLeft: "15%"}} onClick={getUser}>Submit</button>
</div>


</div>
    
    </>

       

        
    )
}
export default Booking