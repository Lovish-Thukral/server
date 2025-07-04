import postData from "../modules/post.module.js";
import Userdata from "../modules/user.module.js";

export const postController = async(req, res) => {
    const curruntUser = req.user;
    const { alt, description, location, image } = req.body;
    
    if (!image) {
        return res.status(400).json({ message: "invalid input" });
    }

    
    try {
         const check = await Userdata.findById(curruntUser._id).select('username _id posts')

        if (!check) return res.status(404).json({message : "invalid User"})
        
        const PostToUpload = new postData({
            alt: alt || check.username, 
            description : description || Date.now(),
            location,
            image : image
        })

        const checkUpload = await PostToUpload.save()

        if (!checkUpload) return res.status(500).json({message: "unable to upload ! server error", status: "operation Failed"})    
        
         const addUserPost = await Userdata.findByIdAndUpdate(curruntUser._id, {
            posts: [...check.posts, PostToUpload]
        })

         if (!addUserPost) return res.status(500).json({Messsage : "Post Upload Failed at user DB", status : "operation Failed"})

        res.status(200).json({message : "upload Successful", status : "operation Completed"})

        
    } catch (error) {
        res.status(404).json({message : "something went wrong", error : error})
    }

}