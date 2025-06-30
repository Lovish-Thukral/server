import express from 'express';
import userrouter from './routes/user.router.js';
import dbConnect from './config/databaseactivation.js';





dotenv.config()
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(
        'you are at root'
    )
})

server.use('/api', userrouter)

server.listen(4000, () => {
    console.log(`server is running at http://localhost:4000`)
    dbConnect(process.env.DB_URI);
})