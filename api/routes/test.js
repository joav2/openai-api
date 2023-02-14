const embedding = require("../../lib/embeddingOpenAI");

module.exports = app => {
    app.route("/test")
        .get(async (req, res) => {
            const response = await embedding();
            res.status(200).send(response);
        });
}