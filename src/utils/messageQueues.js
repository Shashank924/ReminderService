const amqplib = require('amqplib');
const { MESSAGE_BROKER_URL , EXCHANGE_NAME} = require('../config/serverConfig');

const createChannel = async () => {

    try {
        const connection = await amqplib.connect(MESSAGE_BROKER_URL);
        const channel = await connection.createChannel();
        channel.assertExchange(EXCHANGE_NAME , 'direct' , 'false');
        return channel;
    } catch (error) {
        throw error;
    }
}

const subscribeMessage = async (channel , service , binding_key) => {
    try {
        const applicationQueue = await channel.assertQueue('QUEUE_NAME');

        channel.bindQueue(applicationQueue.queue , EXCHANGE_NAME , binding_key);
    
        channel.consume(applicationQueue.queue , msg => {
            console.log('Message recieved');
            console.log(msg.content.toString());
            const payload = JSON.parse(msg.content.toString());
            service.subscribeEvents(payload);
            channel.ack(msg);
        });
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createChannel,
    subscribeMessage,
}