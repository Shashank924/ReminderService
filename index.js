const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./src/config/serverConfig');
const { createChannel , subscribeMessage } = require('./src/utils/messageQueues');
const { REMINDER_BINDING_KEY } = require('./src/config/serverConfig');
const sendReminders = require('./src/utils/jobs');

const emailService = require('./src/services/emailService');

const setupAndStartServer = async () => {

    const app = express();   

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.listen(PORT , async () => {
        console.log(`server started at ${PORT}`);

        const channel = await createChannel();

        await subscribeMessage(channel , emailService , REMINDER_BINDING_KEY);

        sendReminders;
    })
}

setupAndStartServer();