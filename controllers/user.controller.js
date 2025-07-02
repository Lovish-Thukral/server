import Userdata from '../modules/user.module.js';
import CreateToken from '../utilities/GenTokenUtil.js';

const confirmPass = (password, confirmPassword, res) => {

    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }
    if (password !== confirmPassword) {
        return res.status(404).json({ message: "Passwords do not match" });
    }
}




export const signupUser = async (req, res) => {

    const { name, email, username, password, confirmPassword, mobile } = req.body;
    if (!name || !username || !password || !confirmPassword || (!email && !mobile)) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const user = await Userdata.findOne({ username: username}).select('username');
    console.log(user);
    if ( user ) {
        return res.status(404).json({ message: "User already existed" });
    }

    confirmPass(password, confirmPassword, res);


    const newuser = new Userdata({
        name: name,
        email: email || null,
        username: username,
        password: password,
        mobile: mobile || null,
    })

    try {
        const savedUser = await newuser.save();
        res.status(201).json({ message: "User created successfully", user: savedUser });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
}



export const loginUser = async (req, res) => {
    const { username, password, mobile, email } = req.body;
    if ((!username && !mobile && !email) || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    const user = await Userdata.findOne({ username: username, password: password });
    
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const loginconfirm = await Userdata.findByIdAndUpdate(user._id, { login: true }, { new: true });
    if (!loginconfirm) {
        return res.status(500).json({ message: "Error logging in user" });
    }

    CreateToken({userid: user._id, loginstatus: true}, res)

    return res.status(200).json({ message: "User logged in successfully", user: loginconfirm });
}


export const findUser = async (req, res) => {
    res.send('Hello, World!');
}


export const deleteUser = async (req, res) => {
    res.send('Hello, World!');
}