var botaoAdicionar = document.querySelector("#btn-adicionar");
var formTarefa = document.querySelector("#form-adicionar");
var tableTarefaPend = document.querySelector(".table.tabela-tarefas-pendentes");

var tableTarefaPendTBody = document.querySelector(".tbody-tarefa-pendente");


console.log(formTarefa);
ocultarBotao(botaoAdicionar, formTarefa);
adicionarTarefa(formTarefa, botaoAdicionar, tableTarefaPend, tableTarefaPendTBody);
concluirTarefa(tableTarefaPend);

moverConcluida ();

function adicionarTarefa(formTarefa, botaoAdicionar, tableTarefaPend, tableTarefaPendTBody) {


    formTarefa.addEventListener("keyup", function () {
        if (event.keyCode === 13) {

            var txtTarefa = formTarefa.value;

            var listaTarefaPendTr = document.createElement("tr");
            tableTarefaPend.appendChild(tableTarefaPendTBody);
            tableTarefaPendTBody.appendChild(listaTarefaPendTr)

            var listaTarefaPendTd = document.createElement("td");
            listaTarefaPendTd.textContent = txtTarefa;
            listaTarefaPendTd.classList.add("listaTarefaPendTd")
            listaTarefaPendTr.appendChild(listaTarefaPendTd);

            var btneditarTd = document.createElement("td");
            var btneditarBtn = document.createElement("BUTTON");
            btneditarBtn.textContent = "Editar";
            btneditarBtn.classList.add("btn", "btn-outline-primary", "btn-sm", "tarefa-pendente");
            listaTarefaPendTr.appendChild(btneditarTd);
            btneditarTd.appendChild(btneditarBtn);

            var btnremoverTd = document.createElement("td");
            var btnremoverBtn = document.createElement("BUTTON");
            btnremoverBtn.textContent = "Remover";
            btnremoverBtn.classList.add("btn", "btn-outline-danger", "btn-sm", "tarefa-pendente");
            listaTarefaPendTr.appendChild(btnremoverTd);
            btnremoverTd.appendChild(btnremoverBtn);

            var btnconcluirTd = document.createElement("td");
            var btnconcluirBtn = document.createElement("BUTTON");
            btnconcluirBtn.textContent = "Concluir";
            btnconcluirBtn.classList.add("btn", "btn-outline-success", "btn-sm", "tarefa-pendente");
            listaTarefaPendTr.appendChild(btnconcluirTd);
            btnconcluirTd.appendChild(btnconcluirBtn);

            listaTarefaPendTd.classList.add("tarefa-pendente");
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

function concluirTarefa(tableTarefaPend, txtTarefaConc) {
    tableTarefaPend.addEventListener('dblclick', function (e) {

        event.target.parentNode.remove();
        
        const txtTarefaConc = e.target.textContent;
        console.log(e.target);
        
    });
}

/*
        var tableTarefaConcTr = document.createElement("tr");
        tableTarefaConcTr.classList.add("tarefa-concluida");
        tableTarefaConc.appendChild(tableTarefaPendTBody);
        tableTarefaConcTBody.appendChild(tableTarefaConcTr)


        var tarefaConcTd = document.createElement("td");
        tarefaConcTd.textContent = txtTarefaConc;

        tableTarefaConcTr.appendChild(tarefaConcTd);

        var btneditarTd = document.createElement("td");
        var btneditarBtn = document.createElement("BUTTON");
        btneditarBtn.textContent = "Editar";
        btneditarBtn.classList.add("btn", "btn-outline-primary", "btn-sm");
        tableTarefaConcTr.appendChild(btneditarTd);
        btneditarTd.appendChild(btneditarBtn);

        var btnremoverTd = document.createElement("td");
        var btnremoverBtn = document.createElement("BUTTON");
        btnremoverBtn.textContent = "Remover";
        btnremoverBtn.classList.add("btn", "btn-outline-danger", "btn-sm");
        tableTarefaConcTr.appendChild(btnremoverTd);
        btnremoverTd.appendChild(btnremoverBtn);

        botaoAdicionar.classList.remove("btn-esconder");
        formTarefa.classList.add("form-esconder");
        document.getElementById('form-adicionar').value = "";


*/



function moverConcluida (txtTarefaConc) { 
    var formTeste = document.querySelector("#form-adicionar");
    var botaoAdicionarTeste = document.querySelector("#btn-adicionar");
    var tableTarefaConcTBody = document.querySelector(".tbody-tarefa-concluida");
    var tableTarefaConc = document.querySelector(".tabela-tarefas-concluidas");

    var tableTarefaConcTr = document.createElement("tr");
    tableTarefaConcTr.classList.add("tarefa-concluida");
    tableTarefaConc.appendChild(tableTarefaConcTBody);
    tableTarefaConcTBody.appendChild(tableTarefaConcTr)


    var tarefaConcTd = document.createElement("td");
    tarefaConcTd.textContent = txtTarefaConc;

    tableTarefaConcTr.appendChild(tarefaConcTd);

    var btneditarTd = document.createElement("td");
    var btneditarBtn = document.createElement("BUTTON");
    btneditarBtn.textContent = "Editar";
    btneditarBtn.classList.add("btn", "btn-outline-primary", "btn-sm");
    tableTarefaConcTr.appendChild(btneditarTd);
    btneditarTd.appendChild(btneditarBtn);

    var btnremoverTd = document.createElement("td");
    var btnremoverBtn = document.createElement("BUTTON");
    btnremoverBtn.textContent = "Remover";
    btnremoverBtn.classList.add("btn", "btn-outline-danger", "btn-sm");
    tableTarefaConcTr.appendChild(btnremoverTd);
    btnremoverTd.appendChild(btnremoverBtn);

    console.log(formTeste);
    botaoAdicionarTeste.classList.remove("btn-esconder");
    formTeste.classList.add("form-esconder");
    document.getElementById('form-adicionar').value = "";


};
