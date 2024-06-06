import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./adminLogin.css";


export const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    function handleLogin() {
        if (user.email === "admin@gmail.com" && user.password === "Admin") {
            navigate("/admin");
        }
    }

    return (

        <>
        <div style={{ display: "flex", margin: "auto", width: "50%", justifyContent: "space-between" }}>
        <Link to={"/user"} style={{ textDecoration: "none" }}>
            <h1 style={{ color: "rgb(99,160,201)", cursor: "pointer" }}>Appointment Booking</h1>
        </Link>
        <Link to={"/admin-log"} style={{ textDecoration: "none" }}>
            <h1 style={{ color: "rgb(99,160,201)", cursor: "pointer" }}>Admin</h1>
        </Link>
    </div>

    <div className="login-container">
            <h2 className="login-header">Admin Login</h2>
            <input type="text" className="input-box" placeholder="Enter Email" onChange={handleChange} name="email" />
            <input type="password" className="input-box" placeholder="Enter Password" onChange={handleChange} name="password" />
            <button className="login-button" onClick={handleLogin}>Login</button>
        </div>

        </>

       
    );
};
