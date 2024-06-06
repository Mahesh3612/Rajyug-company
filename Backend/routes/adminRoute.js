import express from "express";
import { AddAppointmentChannel, AddAppointmentType, AddDoctor, getAppointmentChannel, getAppointmentType, getDoctor } from "../controllers/adminControllers.js";



const router = express.Router();

router.post("/addDoctor",AddDoctor);
router.post("/addChannel",AddAppointmentChannel);
router.post("/addType",AddAppointmentType);
router.get("/getDoctor",getDoctor);
router.get("/getChannel",getAppointmentChannel);
router.get("/getType",getAppointmentType);



export default router;