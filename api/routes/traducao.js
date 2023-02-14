module.exports = app => {
    const controller = app.controllers.traducao;

    app.route("/api/v1/traducao")
        .post(controller.traduzir);
}