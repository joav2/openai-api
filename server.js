const app = require("./config/express")();
const port = app.get("port");
const host = '0.0.0.0';

app.listen(port, host, () => {
    console.log(`Servidor rodando na porta ${port}`)
});