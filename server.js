import express from'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.router.js';
import connectDB from './config/dbconfig.js';
import postRouter from './routes/post.router.js';

const server = express();

dotenv.config();
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({extended: true}))
connectDB();

server.get('/', (req, res) => {
    res.send('Hello, World!');
} );

server.use('/api/user', userRouter);
server.use("/api/post", postRouter)

server.listen(process.env.PORT || 8000, () => { 
    console.log(`Server is running http://localhost:${process.env.PORT}`);
});
