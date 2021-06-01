import Aluno from '../models/Aluno'

class HomeController {
  async index(req, res) {
  const novoAluno = await Aluno.create({
    nome: 'Marley',
    sobrenome: 'Joao',
    email: 'jijih@gmail.com',
    idade: 80,
    peso: 39,
    altura: 120,
  });
    res.json(novoAluno);
  }
}

export default new HomeController();
