const express = require('express');
const router = express.Router();
const checkEndpoint = require('../controller/controller');


router.get('/', (req, res)=>{
    res.status(200).json({
        message: "Welcome to API monitor"
    })
})
router.get('/Apidetails', checkEndpoint.getApiDetails);
module.exports = router;