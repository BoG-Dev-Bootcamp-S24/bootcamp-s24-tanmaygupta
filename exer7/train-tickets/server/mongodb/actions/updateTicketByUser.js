import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"

export default async function updateTicketByUser(data) {
    try {
        await connectDB();
        const { ticketID, userID } = data;
        if (!ticketID || !userID) {
            throw new Error('Both ticketID and userID are required in the query');
        }
        const ticket = await Ticket.findById(ticketID);
        if (!ticket) {
            return "Ticket Not Found";
        }
        const user = await User.findById(userID);
        if (!user) {
            return "User Not Found";
        }
        await Ticket.findByIdAndUpdate(ticketID, { userID: userID });
    } catch (e) {
        console.log(e)
        throw new Error("Unable to update ticket. Invalid data or database issue.")
    }
}