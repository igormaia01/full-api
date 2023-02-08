import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'igor',
      sobrenome: 'maia',
      email: 'igormaia2001@gmail.com',
      idade: 22,
      peso: 81,
      altura: 2.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
