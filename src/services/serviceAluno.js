import repoAluno from "../repositories/repositoryAluno.js";
async function listar(){
    const alunos = await repoAluno.Listar();  
    return alunos;    
}

async function inserir(matricula, nome, sobrenome){
    nome = nome.toUpperCase()
    const aluno = await repoAluno.Inserir(matricula, nome, sobrenome);
    return aluno;
}

async function editar(id, nome, sobrenome){
    const aluno = await repoAluno.Editar(id, nome, sobrenome);
    return aluno;
}
async function excluir(id){
    const aluno = await repoAluno.Excluir(id);
    return aluno;
}

export default {listar, inserir, editar, excluir}