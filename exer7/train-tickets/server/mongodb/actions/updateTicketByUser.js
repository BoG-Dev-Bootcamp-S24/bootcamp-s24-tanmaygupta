import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"

export default async function updateDog(data) {
    try {
        await connectDB()
        const { identifier, userID } = data
        await Ticket.findByIdAndUpdate(identifier, { userID: userID });
    } catch (e) {
        console.log(e)
        throw new Error("Unable to update dog. Invalid data or database issue.")
    }
}