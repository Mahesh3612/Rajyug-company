import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
appointment:String,
bp:String,
date:String,
doctor:String,
height:String,
name:String,
note:String,
pulse:String,
reason:String,
spo2:String,
temp:String,
time:String,
title:String,
type:String,
weight:String,
gender:String,
profilePhoto:String
})


export const UserModel = mongoose.model("User", userSchema);
