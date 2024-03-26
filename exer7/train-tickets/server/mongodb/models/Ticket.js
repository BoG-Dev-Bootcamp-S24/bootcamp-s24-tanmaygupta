import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    lineColor : {
        type : String,
        required : true,
    }, 
    station : {
        type : String,
        required : true,
    }, 
    userID : {
        type : String,
        required : true,
        ref : 'User'
    },
});

export default mongoose.models?.Ticket || mongoose.model("Ticket", ticketSchema)