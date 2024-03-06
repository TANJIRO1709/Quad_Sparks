import mongoose, { connection } from "mongoose";

export async function connect() {
    try {

        mongoose.connect('mongodb+srv://sujal:sujal911@cluster0.xcth9v7.mongodb.net/')
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('MongoDB Connected Successfully');
        })
        connection.on('error', (err) => {
            console.log('MongoDB connection error' + err);
            process.exit();
        })
    } catch (error) {
        console.log
            ('Something went wrong!');
        console.log(error);
    }

}