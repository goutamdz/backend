import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import {DB_NAME} from './constant.js';
import {connectToDB} from './db/index.js';
import express from 'express';
const app = express();

connectToDB();















/* //one approach to connect to MongoDB 
;(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (err) => {
      console.error('Express error:', err);
    });
    app.listen(process.env.PORT, () => {
      console.log(`Express server listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
})();

*/