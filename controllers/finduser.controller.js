import userdata from "../modules/user.module.js";



const findusercontroller = async (req, res) => {

    try {


        const { username } = req.body

        if (!username) {
            res.status(400).json(
                { message: "invalid input" }
            )
        }

        const finduser = await userdata.findOne({ username: username });

        if (finduser) {
            res.status(200).json(finduser)
        } else {
            res.status(200).json({
                mess: 'user does not exists',
            }

            )
        }
    } catch (error) {
        res.status(500).json(
            { mess: 'internal error occured' }
        )
    }
}


export default findusercontroller;