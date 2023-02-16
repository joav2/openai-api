'use strict';
const app = require("./config/express")();
const port = app.get("port");
const host = "0.0.0.0";

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${host}:${port}`)
});