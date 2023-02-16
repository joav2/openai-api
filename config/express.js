const compression = require("compression");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("config");
const consign = require("consign");
// environment 
require('dotenv').config({ path: './.env' });

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

module.exports = () => {
    const app = express();
    // SETANDO VARIÁVEIS DA APLICAÇÃO
    app.set('port', process.env.PORT || config.get('server.port'));

    // CONFIG default // MIDDLEWARES
    app.use(compression());
    app.use(cors(corsOptions));
    app.use(express.json()) // for parsing application/json
    app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    app.use(bodyParser.json());

    // ENDPOINTS
    consign({ cwd: "api" })
        .then("data")
        .then("controllers")
        .then("routes")
        .into(app);

    return app;
};