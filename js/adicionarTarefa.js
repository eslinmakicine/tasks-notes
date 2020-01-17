var botaoAdicionar = document.querySelector("#btn-adicionar");
var formTarefa = document.querySelector("#form-adicionar");
var listaTarefaPend = document.querySelector("#lista-tarefas-pendentes");
var listaTarefaConc = document.querySelector(".lista-tarefas-concluidas");



ocultarBotao(botaoAdicionar, formTarefa);
adicionarTarefa(formTarefa, botaoAdicionar, listaTarefaPend);
removerPendente(listaTarefaPend);




function adicionarTarefa(formTarefa, botaoAdicionar, listaTarefaPend) {


    formTarefa.addEventListener("keyup", function () {
        if (event.keyCode === 13) {

            var txtTarefa = formTarefa.value;

            var listaTarefaPendLi = document.createElement("li");
            listaTarefaPendLi.textContent = txtTarefa;
            listaTarefaPend.appendChild(listaTarefaPendLi);
            listaTarefaPendLi.classList.add("tarefa-pendente");
            botaoAdicionar.classList.remove("btn-esconder");
            formTarefa.classList.add("form-esconder");
            document.getElementById('form-adicionar').value = "";
        }
    });
}

function ocultarBotao(botaoAdicionar, formTarefa) {
    botaoAdicionar.addEventListener("click", function () {
        botaoAdicionar.classList.add("btn-esconder");
        formTarefa.classList.remove("form-esconder");
    });
}



function removerPendente(listaTarefaPend) {
    listaTarefaPend.addEventListener('dblclick', function (e) {

        if (e.target && e.target.classList.contains('tarefa-pendente')) {

            alert(e.target);
        }
    }, false);
}

function moverConcluida() {


}

