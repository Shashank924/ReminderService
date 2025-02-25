const nodeCron = require('node-cron');
const sender = require('../config/emailConfig');
const { getAllPendingEmails , updateTicket } = require('../services/emailService');

const sendReminders = nodeCron.schedule('0 */2 * * *' , 
    async () => {
        const response = await getAllPendingEmails(new Date());
        console.log(response);
        response.forEach(async (ticket) => {
            sender.sendMail({
                to : ticket.recipientMail,
                subject : ticket.subject,
                text : ticket.content
            },async (err , data) => {
                if(err) {
                    console.log(err);
                }
                else {
                    await updateTicket(ticket.id , {status : 'SUCCESS'});      
                }
            })
        });
    }
)

module.exports = sendReminders;