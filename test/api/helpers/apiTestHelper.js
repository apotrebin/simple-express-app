const server = require('../../../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const request = chai.request.agent(server);

module.exports = {
    request
};
