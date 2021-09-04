
const tarefas = require("../models/tarefas.json");

const getAll = (request, response) => {
    response.status(200).send(tarefas);
}

const getById = (request, response) => {
    const idRequirido = request.params.id;
    const tarefaFiltrada = tarefas.find(tarefa => tarefa.id == idRequirido);

    response.status(200).send(tarefaFiltrada);
}

const criarTarefa = (request,response)=>{
    const descricaoRequerida = request.body.descricao;
    const autorRequerido = request.body.autor;

    const novaTarefa = {
        id:"12345",
        data: new Date(),
        concluido: false,
        descricao: descricaoRequerida,
        autor: autorRequerido
    };

    tarefas.push(novaTarefa);
    response.status(200).send(novaTarefa);
};
const apagarTarefa = (request, response)=>{
    const idRequerido = request.params.id;
    const tarefaFiltrada = tarefas.find(tarefa => tarefa.id == idRequerido);
    const indice = tarefas.indexOf(tarefaFiltrada);
    tarefas.splice(indice,1);
    response.status(200).send(
        [
            {
                "mensagem": "Tarefa deletada!"
            },
            tarefas
        ]
        )
}

module.exports = {
    getAll,
    getById,
    criarTarefa,
    apagarTarefa
}