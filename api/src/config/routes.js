const express = require('express');

module.exports = function (server) {

    const router = express.Router();
    server.use('/api', router);

    const billingCycle = require('../api/billing-cycles/billing-cycles.service');
    billingCycle.register(router, '/billing-cycles');

};