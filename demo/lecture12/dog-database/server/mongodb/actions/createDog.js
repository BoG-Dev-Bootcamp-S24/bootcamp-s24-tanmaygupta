import connectDB from "..";
import Dog from "../models/Dog";

export default async function createDog(data) {
    try {
        await connectDB();
        const dog = new Dog(data);
        await dog.save();
    } catch (error) {
        console.error("Error connecting to database", error);
        throw error;
    }
}