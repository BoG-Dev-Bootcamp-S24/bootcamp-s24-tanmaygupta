import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"

export default async function deleteDog(data) {
    try {
        await connectDB()
        const { identifier } = data
        await Ticket.findByIdAndDelete(identifier)
    } catch (e) {
        console.log(e)
        throw new Error("Unable to delete dog. Invalid data or database issue.")
    }
}