import { UserModel } from "../models/userModel.js";

export const Register = async (req, res) => {
    try {
        const { appointment,
            bp,
            date,
            doctor,
            height,
            name,
            note,
            pulse,
            reason,
            spo2,
            temp,
            time,
            title,
            type,
            weight,
            gender
             } = req.body;


        if (!name || !height || !weight || !doctor || !reason ) {
            return res.status(400).json({ message: "All fields are required" });
        }


        // profilePhoto
        const maleProfilePhoto = "data:image/jpeg;base64,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";
        // const femaleProfilePhoto = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfN4M61xPkroh5Jir1sVS4FXRa809h0Bdzw&s`;

        await UserModel.create({
            appointment,
            bp,
            date,
            doctor,
            height,
            name,
            note,
            pulse,
            reason,
            spo2,
            temp,
            time,
            title,
            type,
            weight,
            gender,
            profilePhoto: maleProfilePhoto,
        });
        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
};

export const Userdata = async(req,res)=>{
    const data = await UserModel.find()
    res.send(data)
}

export const getDataById = async (req, res) => {
    let result = await UserModel.findOne({ _id: req.params.id })
    res.send(result)
}



