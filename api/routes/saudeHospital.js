module.exports = app => {
    const controller = app.controllers.saudeHospital;

    app.route("/api/v1/saude-hospital/categorizacao")
        .post(controller.categorizacaoSaudeHospital);
    app.route("/api/v1/saude-hospital/loop-template")
        .post(controller.loopTemplateSaudeHospital);
    app.route("/api/v1/saude-hospital/plano-acao")
        .post(controller.planoAcaoSaudeHospital);
}