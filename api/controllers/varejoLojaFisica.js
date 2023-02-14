const pergunte = require("../../lib/pergunteOpenAI");

module.exports = app => {
    const varejoLojaFisicaDB = app.data.varejoLojaFisica;
    const controller = {};

    controller.listVarejoLojaFisica = (req, res) => res.status(200).json(varejoLojaFisicaDB);

    controller.loopTemplateVarejoLojaFisica = async (req, res) => {
        const pergunta = req.body.pergunta ?? "";

        if (pergunta.trim().length === 0) {
            res.status(400).json({
                error: {
                    message: "Por favor digite sua pergunta!"
                }
            });
            return;
        }
        try {
            const data = await pergunte(varejoLojaFisicaDB.varejoLojaFisica.data.loopTemplate, pergunta);

            res.send(data);
        } catch (err) {
            console.error("Error: " + err.message);
            res.status(500).json({
                error: {
                    message: "Erro por favor tente novamente mais tarde"
                }
            });
        }
    }

    controller.planoAcaoVarejoLojaFisica = async (req, res) => {
        const pergunta = req.body.pergunta ?? "";

        if (pergunta.trim().length === 0) {
            res.status(400).json({
                error: {
                    message: "Por favor digite sua pergunta!"
                }
            });
            return;
        }
        try {
            const data = await pergunte(varejoLojaFisicaDB.varejoLojaFisica.data.planoAcao, pergunta);

            res.send(data);
        } catch (err) {
            console.error("Error: " + err.message);
            res.status(500).json({
                error: {
                    message: "Erro por favor tente novamente mais tarde"
                }
            });
        }
    }

    return controller;
}