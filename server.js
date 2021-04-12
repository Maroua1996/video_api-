require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

//demarrer le serveur 
const server = express();


server.use(morgan('dev'));
server.use(helmet());
server.use(cors());

server.get('/', (req, res) =>{
res.status(200).send('<h1> it works !! </h1>');
});


const PORT = process.env.PORT || 3000;

server.listen(3000,function(){
    console.log(`Server ecoute à l'adresse: http://${process.env.URL}:${PORT}`);
})