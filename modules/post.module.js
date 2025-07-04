import mongoose from "mongoose";

const postData = new mongoose.Schema({
    alt: { type: String, required: true },
    description: { typp: String},
    likesCount: { type: Array , default: [] },
    Comment: { type: Array, default: [] },
    location: { type: String},
    image: {type : String, require : true}
})

const Posts = mongoose.model("UserPosts", postData);
export default Posts;