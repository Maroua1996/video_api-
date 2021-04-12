const express = require('express');

const Router = express.Router();

let tws = [{
    msg:'ceci est un twitt',
    autor : 'MA'
},
{
    msg:'ceci est un twitt',
    autor : 'MA'
},
{
    msg:'ceci est un twitt',
    autor : 'MA'
}]


//GET :/api /tws

Router.get('/api/tws',(req,res)=> {
    res.status(200).send(tws);

})

module.exports = Router;