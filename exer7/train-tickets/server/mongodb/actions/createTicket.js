import connectDB from "..";
import Ticket from "../models/Ticket";

export default async function createTicket(data) {
    try {
        await connectDB();
        const ticket = new Ticket(data);
        await ticket.save();
    } catch (error) {
        console.error("Error connecting to database", error);
        throw error;
    }
}