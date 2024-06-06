import mongoose from "mongoose";

const drSchema = new mongoose.Schema({
name:String,
degree:String
})
export const DoctorModel = mongoose.model("doctor", drSchema);


const ApponintmentChannelSchema = new mongoose.Schema({
name:String,
})
export const ApponintmentChannel = mongoose.model("appointmentchannel", ApponintmentChannelSchema);


const ApponintmentTypeSchema = new mongoose.Schema({
name:String,
})
export const ApponintmentType = mongoose.model("appointmenttype", ApponintmentTypeSchema);


