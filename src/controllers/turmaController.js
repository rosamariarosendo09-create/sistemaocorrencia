import serviceTurma from "../services/serviceTurma.js";

async function listar(req, res) {
    const turmas = await serviceTurma.listar();
    res.status(200).json(turmas);
}

async function buscarPorId(req, res) {
    const { id } = req.params;
    const turma = await serviceTurma.buscarPorId(id);

    if (!turma) {
        return res.status(404).json({ mensagem: "Turma não encontrada" });
    }

    res.status(200).json(turma);
}

async function inserir(req, res) {
    const { serie, curso_tecnico, ano } = req.body;

    const novaTurma = await serviceTurma.inserir(serie, curso_tecnico, ano);
    res.status(201).json(novaTurma);
}

async function atualizar(req, res) {
    const { id } = req.params;
    const { serie, curso_tecnico, ano } = req.body;

    await serviceTurma.atualizar(id, serie, curso_tecnico, ano);
    res.status(200).json({ mensagem: "Turma atualizada com sucesso" });
}

async function deletar(req, res) {
    const { id } = req.params;

    await serviceTurma.deletar(id);
    res.status(200).json({ mensagem: "Turma deletada com sucesso" });
}

export default { listar, buscarPorId, inserir, atualizar, deletar };