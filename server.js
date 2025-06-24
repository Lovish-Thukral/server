import express from 'express'; 

const server = express();


const port = 1111;

server.get('/', (req, res) => {
    console.log(`req is ${req}`)
    res.send(
        'YOU ARE THE ROOT'
    )
})
server.get('/HOME'.toLowerCase(), (req, res) => {
    console.log(`req is ${req}`)
    res.send(
        'YOU ARE AT HOME'
    )
})
server.get('/PRODUCT1'.toLowerCase(), (req, res) => {
    console.log(`req is ${req}`)
    res.send(
        'PRODUCT IS WATCH'
    )
})
server.get('/PRODUCT2'.toLowerCase(), (req, res) => {
    console.log(`req is ${req}`)
    res.send(
        'PRODUCT IS SNEAKERS'
    )
})
server.get('/PRODUCT3'.toLowerCase(), (req, res) => {
    console.log(`req is ${req}`)
    res.send(
        'PRODUCT IS PHONE'
    )
})

server.get('/PRODUCT4'.toLowerCase(), (req, res) => {
    console.log(`req is ${req}`)
    res.send(
        'PRODUCT IS KUCH'
    )
})




server.listen(port,  () =>{
    console.log(`server is running at http://localhost:${port}`)
})