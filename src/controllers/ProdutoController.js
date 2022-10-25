import { where } from 'sequelize';
import Produto from '../models/Produto';

class ProdutoController {
  async store(req, res) {
    try {
      const novoAluno = await Produto.create(req.body);
      return res.status(201).json(novoAluno);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ err: e });
    }
  }

  async index(req, res) {
    try {
      const produtosTotais = await Produto.findAll({});
      return res.json(produtosTotais);
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
      const produto = await Produto.findByPk(id);
      if (!produto) {
        return res.status(400).json({ message: ` Produto não encontrado com o ID: ${id}` });
      }

      return res.json(produto);
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

      const produtoPeloId = await Produto.findByPk(id);

      if (!produtoPeloId) {
        return res.status(406).json({ error: 'Produto não valido com esse ID' });
      }

      const produtoAtualizado = await produtoPeloId.update(req.body);
      return res.status(200).json(produtoAtualizado);
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

      const produtoParaDeletar = await Produto.findByPk(id);

      if (!produtoParaDeletar) {
        return res.status(406).json({ error: 'Produto não valido com esse ID' });
      }

      await produtoParaDeletar.destroy();
      return res.status(200).json('Deletado com sucesso');
    } catch (e) {
      console.log(e);
      return res.status(406).json({ error: e });
    }
  }
}

export default new ProdutoController();
