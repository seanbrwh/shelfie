require('dotenv').config();
const express = require('express');
const app = express();
const port = 3010;
const {CONNECTION_STRING} = process.env;
const massive = require('massive');
const bodyParser = require('body-parser');
const ctrl = require('./controller')
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json());
app.listen(port,()=>{
    console.log(`Listening on Port: ${port}`);
});

app.get('/api/inventory', ctrl.read);
app.post('/api/product', ctrl.create);
app.delete('/api/product/:id', ctrl.delete);
app.put('/api/product/:id', ctrl.update)


massive(CONNECTION_STRING).then(connection=>{
    console.log(`DB IS CONN`);
    app.set('db',connection);
}).catch(err=> console.log(err))