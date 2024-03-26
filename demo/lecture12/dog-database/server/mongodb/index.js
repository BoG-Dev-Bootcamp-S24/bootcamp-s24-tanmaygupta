import mongoose from "mongoose"

export default async function connectDB() {
    if (mongoose.connection[0]?.readyState) {
        return;
    }

    await mongoose.connect(process.env.DB_URL, {dbName : process.env.DB_NAME}).catch((error) => {
        console.error("Error connection to MongoDB", error);
        throw error;
    });
}