const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./src/config/serverConfig')
const nodeCron = require('node-cron');

const setupAndStartServer = async () => {

    const app = express();   

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.listen(PORT , () => {
        console.log(`server started at ${PORT}`);

    })
}

setupAndStartServer();