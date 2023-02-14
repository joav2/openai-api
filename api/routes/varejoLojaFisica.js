module.exports = app => {
    const controller = app.controllers.varejoLojaFisica;

    app.route("/api/v1/varejo-loja-fisica/loop-template")
        .post(controller.loopTemplateVarejoLojaFisica)
    app.route("/api/v1/varejo-loja-fisica/plano-acao")
        .post(controller.planoAcaoVarejoLojaFisica);
}