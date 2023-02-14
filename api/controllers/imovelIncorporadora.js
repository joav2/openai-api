const pergunte = require("../../lib/pergunteOpenAI");

module.exports = app => {
    const imovelIncorporadoraDB = app.data.imovelIncorporadora;
    const controller = {};

    controller.listImovelIncorporadora = (req, res) => res.status(200).json(imovelIncorporadoraDB);

    controller.categorizacao = async (req, res) => {
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
            const data = await pergunte(imovelIncorporadoraDB.imovelIncorporadora.data.categorizacao, pergunta);

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

    controller.categorizacaoAutonoma = async (req, res) => {
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
            const data = await pergunte(imovelIncorporadoraDB.imovelIncorporadora.data.categorizacaoAutonoma, pergunta);

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

    controller.loopTemplate = async (req, res) => {
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
            const data = await pergunte(imovelIncorporadoraDB.imovelIncorporadora.data.loopTemplate, pergunta);

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

    controller.planoAcao = async (req, res) => {
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
            const data = await pergunte(imovelIncorporadoraDB.imovelIncorporadora.data.planoAcao, pergunta);

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

    controller.sumarizacao = async (req, res) => {
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
            const data = await pergunte(imovelIncorporadoraDB.imovelIncorporadora.data.sumarizacao, pergunta);

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

    controller.estratificacao = async (req, res) => {
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
            const data = await pergunte(imovelIncorporadoraDB.imovelIncorporadora.data.estratificacao, pergunta);

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