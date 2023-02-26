const dotenv = require('dotenv');
const express = require('express');



const app = express()

dotenv.config({path:'./configfile.env'});
require('./conn')
const MyUser = require('./models/userSchema');


//we link the router file
app.use(require('./router/auth'));


const PORT = process.env.PORT;

   
       
    app.listen(PORT,()=>
    {
        console.log(`running on port ${PORT}`)
    })

