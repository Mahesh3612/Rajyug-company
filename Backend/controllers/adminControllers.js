import { ApponintmentChannel, ApponintmentType, DoctorModel } from "../models/adminModel.js";




export const AddDoctor = async (req, res) => {
    try {
        const { name , degree } = req.body;

        if (!name || !degree) {
            return res.status(400).json({ message: "All fields are required" });
        }

        await DoctorModel.create({
            name,
            degree
        });
        return res.status(201).json({
            message: "Doctor Added successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
};

export const AddAppointmentChannel = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: " fields required" });
        }

        await ApponintmentChannel.create({
            name
        });
        return res.status(201).json({
            message: "Channel Added successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
};


export const AddAppointmentType = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: " fields required" });
        }

        await ApponintmentType.create({
            name
        });
        return res.status(201).json({
            message: "Type Added successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
};


export const getAppointmentChannel = async (req, res) => {
    try {
        const data = await ApponintmentChannel.find()
        res.send(data)
    } catch (error) {
        console.log(error);
    }
};

export const getAppointmentType = async (req, res) => {
    try {
        const data = await ApponintmentType.find()
        res.send(data)
    } catch (error) {
        console.log(error);
    }
};

export const getDoctor = async (req, res) => {
    try {
        const data = await DoctorModel.find()
        console.log(data)
        res.send(data)
    } catch (error) {
        console.log(error);
    }
};



