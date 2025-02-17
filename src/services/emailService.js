const sender = require('../config/emailConfig');
const TicketRepository = require('../repositories/ticketRepository');

const repo = new TicketRepository();

const sendBasicEmail = (mailFrom , mailTo , mailSubject , mailBody) => {

    sender.sendMail({
        from : mailFrom,
        to : mailTo,
        subject : mailSubject,
        text : mailBody
    })
}

const createTicket = async (data) => {

    try {
        const response = await repo.create(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


const getAllPendingEmails = async (time) => {

    try {
        const response = await repo.get(time);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateTicket = async (ticketId , data) => {

    try {
        const response = await repo.update(ticketId , data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    sendBasicEmail,
    createTicket,
    getAllPendingEmails,
    updateTicket
}