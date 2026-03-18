import { Router } from "express";
import controllerAluno from "./controllers/alunoController.js";
import controllerTurma from "./controllers/turmaController.js";

const router = Router();

// rota inicial
router.get("/", (req, res) => {
    res.send("API de alunos e turmas funcionando 🚀");
});

// rotas alunos
router.post("/alunos", controllerAluno.inserir);
router.get("/alunos", controllerAluno.listar);
router.put("/alunos/:id", controllerAluno.editar);
router.delete("/alunos/:id", controllerAluno.excluir);

// rotas turmas
router.post("/turma", controllerTurma.inserir);
router.get("/turma", controllerTurma.listar);
router.get("/turma/:id", controllerTurma.buscarPorId);
router.put("/turma/:id", controllerTurma.atualizar);
router.delete("/turma/:id", controllerTurma.deletar);

export default router;