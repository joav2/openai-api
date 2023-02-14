module.exports = app => {
    const controller = app.controllers.financeiroBanco;

    app.route("/api/v1/financeiro-banco")
        .get(controller.listFeedbackFinanceiroBanco);
    app.route("/api/v1/financeiro-banco/categorizacao")
        .post(controller.categorizacaoFinanceiroBanco);
    app.route("/api/v1/financeiro-banco/loop-template")
        .post(controller.loopTemplateFinanceiroBanco);
    app.route("/api/v1/financeiro-banco/estratificacao")
        .post(controller.estratificacaoFinanceiroBanco);
}