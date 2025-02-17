const { createTicket } = require('../services/emailService');

const create = async (req , res) => {

    try {
        const response = await createTicket(req.body);
        return res.status(201).json({
            message : 'successfully generated a ticket',
            success : true,
            data : response,
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            message : 'Not able to generate ticket',
            success : false,
            data : {},
            err : error
        })
    }
}

module.exports = {
    create
}