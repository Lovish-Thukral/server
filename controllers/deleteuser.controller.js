import userdata from "../modules/user.module.js";

const deleteusercontroller = async(req, res) => {
    const {username, confirm, pass} = req.body

    if(!username || confirm !== "delete"){
        return res.status(400).json({mess: "fields required", status: false})
    }

    try {

        const is_user_exist = await userdata.findOne({ username: username })
        if(!is_user_exist){
            return res.status(500).json({ mess: "user not found", status: false })
        }

        if (is_user_exist.password.trim() !== pass.trim()) {
            return res.status(400).json({ mess: "incorrect password", status: false });
        }

        const deleteduser = await userdata.findByIdAndDelete(
            is_user_exist.id 
        )

        if(deleteduser){
            return res.status(200).json(
                {
                    status: "success",
                    deleteduser
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

export default deleteusercontroller;