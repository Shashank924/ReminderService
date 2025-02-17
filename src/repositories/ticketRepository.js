const { TicketNotification } = require('../models/index');
const { Op } = require('sequelize');

class TicketRepository {

    async create(data) {
        try {
            const response = await TicketNotification.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(time) {
        try {
            const response = await TicketNotification.findAll({
                where : {
                    status : 'PENDING' ,
                    timestamp : {
                        [Op.lte] : time
                    }
                }
            })
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async update(ticketId , data) {
        try {
            const response = await TicketNotification.update(data , {
                where : {
                    id : ticketId
                }
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = TicketRepository;