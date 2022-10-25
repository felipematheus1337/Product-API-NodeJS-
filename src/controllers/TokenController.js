import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario';

class Token {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas!'],
      });
    }
    try {
      const user = await Usuario.findOne({ email });

      if (!user) {
        return res.status(401).json({ error: 'Usuario não existe' });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({
          errors: ['Senha invalida!'],
        });
      }

      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });
      return res.json({ token });
    } catch (e) {
      console.log(e);
      return res.status(400).json(e);
    }
  }
}

export default new Token();
