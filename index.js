require('dotenv').config();
const express = require('express');
const router = require('./router/router');
const cors = require('cors');
const app = express();
const port = process.env.PORT;
const CronJob = require('cron').CronJob;



app.use(cors());
app.use(router);

app.listen(port, ()=>{
    console.log('Listening at port 6000')
})