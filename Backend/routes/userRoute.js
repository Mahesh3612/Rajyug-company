import express from "express";
import { Register,Userdata, getDataById } from "../controllers/userController.js";


const router = express.Router();

router.post("/register",Register);
router.get("/user",Userdata);
router.get("/view/:id",getDataById)

export default router;