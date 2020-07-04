//importing modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on successfull connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database.')
});

//on unsuccessfull connection
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error while connecting to database.')
    }
});


//port no
const port = 3000;

//adding middleware - cors
app.use(cors());

//body - parser
app.use(bodyParser.json())

//static files
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', route);

//testing Server
app.get('/',(req, res) =>{
    res.send('foobar');
});

//bind server with the port
app.listen(port, () =>{
    console.log('Server started at port:' + port);
});