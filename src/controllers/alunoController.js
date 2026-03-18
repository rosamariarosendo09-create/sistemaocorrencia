import serviceAluno from "../services/serviceAluno.js";
async function listar(req, res){
    const alunos = await serviceAluno.listar();
    res.status(200).json({alunos});        
}

async function inserir(req, res) {
    const {matricula, nome, sobrenome} = req.body;     
    const aluno = await serviceAluno.inserir(matricula, nome, sobrenome) 
    res.status(201).json({"mensagem":"sucesso"}) 
}

async function editar(req, res) {
    const id = req.params.id;
    const {nome, sobrenome} = req.body;     
    const aluno = await serviceAluno.editar(id, nome, sobrenome) 
    res.status(200).json(aluno) 
}

async function excluir(req, res) {
    const id = req.params.id;
        
    const aluno = await serviceAluno.excluir(id) 
    res.status(200).json(aluno) 
}

export default {listar, inserir, editar, excluir}