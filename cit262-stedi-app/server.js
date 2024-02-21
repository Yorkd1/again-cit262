const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/david', (req,res) => {res.send("Hello David")});

app.listen(port, ()=>console.log("Listening"));