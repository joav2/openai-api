module.exports = app => {
    const controller = app.controllers.imovelIncorporadora;

    app.route("/api/v1/imovel-incorporadora/categorizacao")
        .post(controller.categorizacao);
    app.route("/api/v1/imovel-incorporadora/categorizacao-autonoma")
        .post(controller.categorizacaoAutonoma);
    app.route("/api/v1/imovel-incorporadora/loop-template")
        .post(controller.loopTemplate);
    app.route("/api/v1/imovel-incorporadora/plano-acao")
        .post(controller.planoAcao);
    app.route("/api/v1/imovel-incorporadora/sumarizacao")
        .post(controller.sumarizacao);
    app.route("/api/v1/imovel-incorporadora/estratificacao")
        .post(controller.estratificacao);
}