import mongoose from 'mongoose';

const connection = {}
export const ConnectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log('Using existing connection');
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
};