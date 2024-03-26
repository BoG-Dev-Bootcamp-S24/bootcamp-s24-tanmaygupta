import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    }, 
    age : {
        type : Number,
    }
});

export default mongoose.model("User", userSchema)