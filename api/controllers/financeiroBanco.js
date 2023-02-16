const pergunte = require("../../lib/pergunteOpenAI");

module.exports = app => {
    const financeiroBancoDB = app.data.financeiroBanco;
    const controller = {};

    controller.listFeedbackFinanceiroBanco = (req, res) => res.status(200).json(financeiroBancoDB);

    controller.categorizacaoFinanceiroBanco = async (req, res) => {
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
            const data = await pergunte(financeiroBancoDB.financeiroBanco.data.categorizacao, pergunta);

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

    controller.loopTemplateFinanceiroBanco = async (req, res) => {
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
            const data = await pergunte(financeiroBancoDB.financeiroBanco.data.loopTemplate, pergunta);

            res.send(data);
        } catch (err) {
            console.log(err);
            console.error("Error: " + err.message);
            res.status(500).json({
                error: {
                    message: "Erro por favor tente novamente mais tarde"
                }
            });
        }
    }

    controller.estratificacaoFinanceiroBanco = async (req, res) => {
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
            const data = await pergunte(financeiroBancoDB.financeiroBanco.data.estratificacao, pergunta);

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