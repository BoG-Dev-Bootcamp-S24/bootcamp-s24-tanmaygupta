import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"

export default async function deleteTicket(data) {
    try {
        await connectDB();
        const { ticketID } = data;
        const existingTicket = await Ticket.findById(ticketID);
        if (!existingTicket) {
            return 'Ticket Not Found';
        }
        await Ticket.findByIdAndDelete(ticketID);
    } catch (e) {
        console.log(e)
        throw new Error("Unable to delete ticket. Invalid data or database issue.")
    }
}