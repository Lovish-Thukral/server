import userdata from "../modules/user.module.js";


const editusercontroller = async (req, res) => {

    try {
        const { username, newusername, prevpass, newpass, confirmnewpass } = req.body;

        if (!username || !newpass || !confirmnewpass || !prevpass) {
            return res.status(400).json({ mess: "fields required", status: false })
        }

        const passcheck = newpass.trim() == confirmnewpass.trim()
        if (!passcheck) {
            return res.status(400).json({ mess: "confirm Password do not match", status: false });
        }

        const is_user_exist = await userdata.findOne({ username: username })
        
        if (!is_user_exist) {
            return res.status(500).json({ mess: "user not found", status: false })
        };
        
       is_user_exist.password.trim() !== prevpass.trim() ? res.status(400).json({ mess: "incorrect password", status: false }): null ;

        const edituser = await userdata.findByIdAndUpdate(
            is_user_exist.id,
            { username: newusername || username, loginstatus:true, password: newpass,},
            {new: true},
        )

        if(edituser){
            res.status(200).json(
                {
                    status: "success",
                    edituser                    
                }
            )
        }

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



export default editusercontroller;