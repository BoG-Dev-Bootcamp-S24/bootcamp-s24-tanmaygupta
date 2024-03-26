import connectDB from "../index.js"
import Ticket from "../models/Ticket.js";

export default async function readTicketsByUser(data) {
    try {
        await connectDB();
        const { userID } = data;
        const tickets = await Ticket.find(userID);
        return JSON.stringify(tickets);
    } catch (e) {
        console.log(e)
        throw new Error("Unable to read user. Invalid user id or database issue.")
    }
}