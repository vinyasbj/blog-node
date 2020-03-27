// import express from 'express';
const express = require('express'); 
const app = express();

const port = process.env.PORT || 3000
console.log("server started");

const { mongoose } = require('./config/db');
const { routes } = require('./config/routes'); 
app.use(express.json()) 
app.use('/', routes); 
app.listen(port, function() {
    console.log('listening on port', port); 
}); 
