import mongoose from 'mongoose';

const ud = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true
        },

        password:{
            type: String,
            required: true,
        },

        loginstatus:{
            type: Boolean,
            require: true,
            default: false
        }

    }, {timestamps:true}
)

const userdata = mongoose.model('User', ud);

export default userdata;