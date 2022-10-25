import Usuario from '../models/Usuario';

class UsuarioController {
  async store(req, res) {
    try {
      const novoUsuario = await Produto.create(req.body);
      return res.status(201).json(novoAluno);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ err: e });
    }
  }
}

export default new UsuarioController();
