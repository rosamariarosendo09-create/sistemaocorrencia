import repositoryTurma from "../repositories/repositoryTurma.js";

async function listar(){
    const turma = await repositoryTurma.listar();
    return turma;
}

async function buscarPorId(id){
    const turma = await repositoryTurma.buscarPorId(id);
    return turma;
}

async function inserir(serie, curso_tecnico, ano){
    curso_tecnico = curso_tecnico.toUpperCase();

    const turma = await repositoryTurma.inserir(serie, curso_tecnico, ano);
    return turma;
}

async function atualizar(id, serie, curso_tecnico, ano){
    curso_tecnico = curso_tecnico.toUpperCase();

    const turma = await repositoryTurma.atualizar(id, serie, curso_tecnico, ano);
    return turma;
}

async function deletar(id){
    const turma = await repositoryTurma.deletar(id);
    return turma;
}

export default { listar, buscarPorId, inserir, atualizar, deletar };