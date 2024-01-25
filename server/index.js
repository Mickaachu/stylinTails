import express from 'express';
import UserRouter from './routes/User.js';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
const port = 8000;

dotenv.config();

app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));

app.use(express.json());

app.use('/', UserRouter)

const start = async () => {
    try{
        await mongoose.connect(process.env.DATABASE)
        console.log('Connected to database');
        app.listen(port, () =>  console.log(`Server is running on port: ${port}`));
      
    }
    catch(err){
        console.log(err);
    }
}


start();
