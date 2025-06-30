import userdata from "../modules/user.module.js";



const editusercontroller = async (req, res) => {

    try {
        const { username, pass, confirmpass } = req.body;

        if (!username || !pass || !confirmpass) {
            return res.status(500).json({ mess: "fields required", status: false })
        }

        const is_user_exist = await userdata.findOne({ username: username })

        if (!is_user_exist) {
            return res.status(500).json({ mess: "user not found", status: false })
        };
            




    } catch (error) {

    }

}


export default editusercontroller;