require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const massive = require('massive');
const port = 3010;
const {CONNECTION_STRING} = process.env;

app.use(bodyParser.json());
app.listen(port,()=>{
    console.log(`Listening on Port: ${port}`);
});

massive(CONNECTION_STRING).then(connection=>{
    app.set('db',connection);
}).catch(err=> console.log(err))