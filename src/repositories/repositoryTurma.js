import database from "../config/database.js";

async function listar() {
    const [rows] = await database.query("SELECT * FROM turma");
    return rows;
}

async function buscarPorId(id) {
    const [rows] = await database.query(
        "SELECT * FROM turma WHERE id_turma = ?",
        [id]
    );
    return rows[0];
}

async function inserir(serie, curso_tecnico, ano) {
    const [result] = await database.query(
        "INSERT INTO turma (serie, curso_tecnico, ano) VALUES (?, ?, ?)",
        [serie, curso_tecnico, ano]
    );

    return result.insertId;
}

async function atualizar(id, serie, curso_tecnico, ano) {
    const [result] = await database.query(
        "UPDATE turma SET serie = ?,  curso_tecnico = ?, ano = ? WHERE id_turma = ?",
        [serie, curso_tecnico, ano, id]
    );

    return result.affectedRows;
}

async function deletar(id) {
    const [result] = await database.query(
        "DELETE FROM turma WHERE id_turma = ?",
        [id]
    );

    return result.affectedRows;
}

export default { listar, buscarPorId, inserir, atualizar, deletar };