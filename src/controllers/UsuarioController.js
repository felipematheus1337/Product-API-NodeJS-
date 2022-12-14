import Usuario from '../models/Usuario';

class UsuarioController {
  async store(req, res) {
    try {
      const novoUsuario = await Usuario.create(req.body);
      return res.status(201).json(novoUsuario);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ err: e });
    }
  }

  async index(req, res) {
    try {
      const usuariosTotais = await Usuario.findAll({});
      return res.json(usuariosTotais);
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: `ID : ${id} não encontrado na requisição` });
      }
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return res.status(400).json({ message: ` Usuario não encontrado com o ID: ${id}` });
      }

      return res.json(usuario);
    } catch (e) {
      return res.status(406).json({ error: e });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(406).json({ error: 'Id não especificado/invalido' });
      }

      const usuarioPeloId = await Usuario.findByPk(id);

      if (!usuarioPeloId) {
        return res.status(406).json({ error: 'Usuario não valido com esse ID' });
      }

      const usuarioAtualizado = await usuarioPeloId.update(req.body);
      return res.status(200).json(usuarioAtualizado);
    } catch (e) {
      console.log(e);
      return res.status(406).json({ error: e });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(406).json({ error: 'Id não especificado/invalido' });
      }

      const usuarioParaDeletar = await Usuario.findByPk(id);

      if (!usuarioParaDeletar) {
        return res.status(406).json({ error: 'Usuario não valido com esse ID' });
      }

      await usuarioParaDeletar.destroy();
      return res.status(200).json('Deletado com sucesso');
    } catch (e) {
      console.log(e);
      return res.status(406).json({ error: e });
    }
  }
}

export default new UsuarioController();
