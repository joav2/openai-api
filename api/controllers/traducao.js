const pergunte = require("../../lib/pergunteOpenAI");

module.exports = app => {
    const traducaoDB = app.data.traducao;
    const controller = {};

    controller.traduzir = async (req, res) => {
        const pergunta = req.body.pergunta ?? "";

        if (pergunta.trim().length === 0) {
            res.status(400).json({
                error: {
                    message: "Por favor digite!"
                }
            });
            return;
        }
        try {
            const data = await pergunte(traducaoDB.traducao.data.ptbr, pergunta);

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