import mongoose from 'mongoose';
import {DB_NAME} from '../constant.js';
export const connectToDB = async () => {
  try {
    const connectionInstance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};