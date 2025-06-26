import express from 'express';
import dotenv from 'dotenv';
import findusername from './Routes/findusername.router.js';

dotenv.config()

const port = process.env.PORT || 3000;

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    console.log(`req is ${req}`)
    res.send(
        'YOU ARE THE ROOT'
    )
})


server.use('/api/user', findusername)


server.listen(port, () =>{
    console.log(`server is running at http://localhost:${port}`)
} )