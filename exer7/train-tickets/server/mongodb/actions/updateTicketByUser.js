import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"
import User from "../models/User.js";

export default async function updateTicketByUser(data) {
    try {
        await connectDB();
        const { identifier, userID } = data;
        if (!identifier || !userID) {
            throw new Error('Both ticketID and userID are required in the query');
        }
        const ticket = await Ticket.findById(identifier);
        if (!ticket) {
            return "Ticket Not Found";
        }
        const user = await User.findById(userID);
        if (!user) {
            return "User Not Found";
        }
        return await Ticket.findByIdAndUpdate(identifier, { userID }, { new: true });
    } catch (e) {
        console.log(e)
        throw new Error("Unable to update ticket. Invalid data or database issue.")
    }
}