const express = require('express');

const router = express.Router();

router.get('/',(req,res)=> {
    res.send ('hellow world from the server auth.js')
})


module.exports = router;