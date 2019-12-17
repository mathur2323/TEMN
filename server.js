const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const user = require('./routes/api/user');
const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
.connect(db)
.then(()=>{
    console.log('Connected..!')
})
.catch((err)=>{
    console.log('Error in connecting', err)
})

app.use('/api/items', items);
app.use('/api/signup', user)

const PORT = process.env.PORT || 5000;

app.listen(PORT);