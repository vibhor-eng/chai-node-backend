// const express = require('express')

import express from 'express'

// import cors from 'cors';

const app = express()

// app.use(cors())

// var corsOptions = {
//     origin: 'http://localhost:5173',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

// app.get('/', (req,res) => {
//     res.send("server is ready");
// })

// app.get('/api/jokes',cors(corsOptions), (req,res) => {
    app.get('/api/jokes', (req,res) => {
    const jokes = [

        {
            id:1,
            name:"vibhor",
            age:6
        },
        {
            id:2,
            name:"sultan",
            age:60
        },
        {
            id:3,
            name:"vaibhav",
            age:44
        },
        {
            id:4,
            name:"ruby",
            age:5
        }

    ];
    res.send(jokes);
})


const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})