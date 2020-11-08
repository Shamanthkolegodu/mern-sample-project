const express = require('express');
const cors = require('cors'); //Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('Mongoose database conected');
})

const newPostRouter = require('./router/newpost.js');

app.use('/newpost',newPostRouter)

app.listen(port,()=>{
    console.log('server is running on port:',port);
})