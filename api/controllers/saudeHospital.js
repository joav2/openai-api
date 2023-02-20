const classificacao = require("../../lib/classificacaoOpenAI");
const pergunte = require("../../lib/pergunteOpenAI");

module.exports = app => {
    const saudeHospitalDB = app.data.saudeHospital;
    const controller = {};

    controller.listSaudeHospital = (req, res) => res.status(200).json(saudeHospitalDB);

    controller.categorizacaoSaudeHospital = async (req, res) => {
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
            const data = await classificacao(saudeHospitalDB.saudeHospital.data.categorizacao, pergunta);

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

    controller.loopTemplateSaudeHospital = async (req, res) => {
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
            const data = await pergunte(saudeHospitalDB.saudeHospital.data.loopTemplate, pergunta);

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

    controller.planoAcaoSaudeHospital = async (req, res) => {
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
            const data = await pergunte(saudeHospitalDB.saudeHospital.data.planoAcao, pergunta);

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