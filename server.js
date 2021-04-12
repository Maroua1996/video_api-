require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const routesTws = require('./routes/tw');
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');

//demarrer le serveur 
const server = express();


server.use(morgan('dev'));
server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) =>{
res.status(200).send('<h1> it works !! </h1>');
});

server.use('/',routesTws);

server.use(notFound);
server.use(errorHandler);

const PORT = process.env.PORT || 3000;

server.listen(3000,function(){
    console.log(`Server ecoute à l'adresse: http://${process.env.URL}:${PORT}`);
})