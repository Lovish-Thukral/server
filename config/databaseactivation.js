import mongoose from "mongoose";


const dbConnect = async (prop) => {
    try {
        const connectionDB = await (mongoose.connect(prop))
        console.log('connection successful', connectionDB.connection.host)
    } catch (error) {
        console.log("unable to connect to the db", error)
    }
}

export default dbConnect;