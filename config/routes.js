const express = require('express');
const auth = require('./auth');

module.exports = function (server) {

    /**
     *  Protected API
     */
    const protectedApi = express.Router();
    server.use('/api', protectedApi);

    protectedApi.use(auth);

    const billingCycle = require('../services/billing-cycle.service');
    billingCycle.register(protectedApi, '/billing-cycles');

    /**
     *  Open API
     */
    const openApi = express.Router();
    server.use('/auth', openApi);

    const AuthService = require('../services/auth.service');
    openApi.post('/login', AuthService.login);
    openApi.post('/signup', AuthService.signup);
    openApi.post('/validate-token', AuthService.validateToken);

};
