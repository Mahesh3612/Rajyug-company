import { AddDoctor } from "./AddDoctor";
import { AddType } from "./AddType";
import { AddChannel } from "./AddChannel";
import axios from "axios";
import { useEffect, useState } from "react";

import "./admin.css";
import { Link } from "react-router-dom";

// import ganeb from 

function Admin() {
    const [patientDetail, setPatientDetail] = useState({});
    const [user, setUser] = useState([]);

    async function getPatients() {
        const response = await axios.get("http://localhost:5000/api/user/user");
        setUser(response.data);
    }

    async function detail(id) {
        const response = await axios.get(`http://localhost:5000/api/user/view/${id}`);
        setPatientDetail(response.data);
    }

    useEffect(() => {
        getPatients();
    }, []);

    return (
        <>

<div style={{ display: "flex", margin: "auto", width: "50%", justifyContent: "space-between" }}>
        <Link to={"/user"} style={{ textDecoration: "none" }}>
            <h1 style={{ color: "rgb(99,160,201)", cursor: "pointer" }}>Appointment Booking</h1>
        </Link>
        <h1 style={{ textAlign: "center", color: "gray" }}>Admin Dashbord</h1>
        <Link to={"/admin-log"} style={{ textDecoration: "none" }}>
            <h1 style={{ color: "rgb(99,160,201)", cursor: "pointer" }}>Admin</h1>
        </Link>
    </div>

            {/* <h1 >Admin Dashboard</h1> */}

            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ border: "1px solid gray", width: "100%", marginTop: "2%" }}>
                        <AddDoctor />
                    </div>
                    <div style={{ border: "1px solid gray", width: "100%", marginTop: "2%" }}>
                        <AddChannel />
                    </div>
                    <div style={{ border: "1px solid gray", width: "100%", marginTop: "2%" }}>
                        <AddType />
                    </div>
                </div>

                <div id="patient-list" style={{ border: "1px solid gray", width: "100%", marginLeft: "2%" }}>
                    <table border={1} style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
                        <thead>
                            <tr style={{ backgroundColor: "#f2f2f2" }}>
                                <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Name</th>
                                <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Gender</th>
                                <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Reason</th>
                                <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((el, i) => (
                                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#f9f9f9" : "white" }}>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "center" }}>{el.name}</td>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "center" }}>{el.gender}</td>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "center" }}>{el.reason}</td>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "center" }}>
                                        <button onClick={() => detail(el._id)} style={{ backgroundColor: "rgb(114,169,202)", width: "100%", border: "none", padding: "5px", cursor: "pointer" }}>View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                </div>
                <div style={{ width: "40%" }}>
                    <div className="detail-card">
                        <div className="detail-header">
                            <h2>User Details</h2>
                        </div>
                        <div className="detail-content">
                            <div className="detail-item">
                                <label>Name:</label>
                                <span>{patientDetail.name}</span>
                            </div>

                            <div className="detail-item">
                                <label>Title: </label>
                                <span>{patientDetail.appointment}</span>
                            </div>
                            <div className="detail-item">
                                <label>Type:</label>
                                <span>{patientDetail.title}</span>
                            </div>
                            <div className="detail-item">
                                <label>Doctor:</label>
                                <span>{patientDetail.doctor}</span>
                            </div>
                            <div className="detail-item">
                                <label>Date:</label>
                                <span>{patientDetail.date}</span>
                            </div>
                            <div className="detail-item">
                                <label>Time:</label>
                                <span>{patientDetail.time}</span>
                            </div>
                            <div className="detail-item">
                                <label>Gender:</label>
                                <span>{patientDetail.gender}</span>
                            </div>
                            <div className="detail-item">
                                <label>Weight:</label>
                                <span>{patientDetail.weight}</span>
                            </div>
                            <div className="detail-item">
                                <label>Height:</label>
                                <span>{patientDetail.height}</span>
                            </div>
                            <div className="detail-item">
                                <label>BP:</label>
                                <span>{patientDetail.bp}</span>
                            </div>
                            <div className="detail-item">
                                <label>Pulse:</label>
                                <span>{patientDetail.pulse}</span>
                            </div>
                            <div className="detail-item">
                                <label>SPO2:</label>
                                <span>{patientDetail.spo2}</span>
                            </div>
                            <div className="detail-item">
                                <label>Temp:</label>
                                <span>{patientDetail.temp}</span>
                            </div>
                            <div className="detail-item">
                                <label>Reason:</label>
                                <span>{patientDetail.reason}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin;

