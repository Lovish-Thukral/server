   
import userdata from "../modules/user.module.js";



const addusercontroller = async (req, res) => {
    
    console.log(req.body)

    try {
         const { username, pass, confirmpass, loginstatus } = req.body;

        if (!username || !pass || !confirmpass){
            return res.status(500).json({mess: "fields required", status: false})
        }

        const is_user_exist = await userdata.findOne({username: username})
        const passcheck = pass.trim() == confirmpass.trim()
        if (!passcheck) {
            return res.status(400).json({ mess: "Passwords do not match", status: false });
        }

        if(is_user_exist){
            return res.status(500).json({mess:"user already exist", status: false})
        }

        const newuser = new userdata({
            username,
            password : pass,
            loginstatus : loginstatus || false
        })

        const confirmdb = await newuser.save();

        if(confirmdb){
            res.status(200).json({ mess: "user created successfully", status: true})}

    } catch (error) {
        console.log(error)

        res.status(500).json(
            {
                mess: "internal error occured",
                status: false
            }
        )
        
    }
}


export default addusercontroller;