const compression = require("compression");
const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const consign = require("consign");
// environment 
require('dotenv').config({ path: './.env' });

module.exports = () => {
    const app = express();

    // compress all responses
    app.use(compression());

    // SETANDO VARIÁVEIS DA APLICAÇÃO
    app.set('port', process.env.PORT || config.get('server.port'));

    // CONFIG default
    app.use(express.json()) // for parsing application/json
    app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

    // MIDDLEWARES
    app.use(bodyParser.json());

    // ENDPOINTS
    consign({ cwd: "api" })
        .then("data")
        .then("controllers")
        .then("routes")
        .into(app);

    return app;
};