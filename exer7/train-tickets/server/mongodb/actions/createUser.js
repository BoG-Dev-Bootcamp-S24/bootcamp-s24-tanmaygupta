import connectDB from "..";
import User from "../models/User";

export default async function createUser(data) {
    try {
        await connectDB();
        const user = new User(data);
        await user.save();
    } catch (error) {
        console.error("Error connecting to database", error);
        throw error;
    }
}