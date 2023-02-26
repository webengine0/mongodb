const mongoose = require('mongoose');

const db = process.env.DATABASE;



mongoose.connect(db).then(()=> {
    console.log("connection successful");
}).catch((err)=> console.log("error"));