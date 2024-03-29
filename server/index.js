import express from 'express';
import UserRouter from './routes/User.js';
import petRouter from './routes/Pet.js';
import scheduleRouter from './routes/Schedule.js';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
const port = 8000;

dotenv.config();

app.use(cors(
    {
        origin: [
            'https://stylin-tails.vercel.app',
            'http://localhost:3000',
            'https://stylin-tails-mickaachu.vercel.app',
            'https://stylin-tails-git-main-mickaachu.vercel.app',
            'https://stylin-tails-afu2bc6fl-mickaachu.vercel.app'
        ]
    }
));

app.use(express.json());

app.use('/', UserRouter)
app.use('/', petRouter)
app.use('/', scheduleRouter)

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
