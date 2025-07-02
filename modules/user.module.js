import mongoose from "mongoose";

const userdataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    profilepic: { type: String, default: "https://www.w3schools.com/howto/img_avatar.png" },
    login: { type: Boolean, default: false },
}, { timestamps: true });

const Userdata = mongoose.model("USERDATABASE", userdataSchema);

export default Userdata;