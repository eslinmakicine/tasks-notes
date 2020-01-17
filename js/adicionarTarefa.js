var botaoAdicionar = $("#btn-adicionar");
var formTarefa = $("form-adicionar");

botaoAdicionar.on("click", function() {
    console.log(botaoAdicionar);

    (botaoAdicionar).addClass("btn-esconder");
    (formTarefa).removeClass("form-esconder");

});



