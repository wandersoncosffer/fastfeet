import bcrypt from 'bcryptjs';
import User from '../models/User';

class UserController {
  // index() Lista todos os usuários
  // show() Mostra apenas um usuário

  // store() Cadastra um usuário
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    if (!req.body.password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({ id, name, email });
  }

  // update() Atualiza um usuário
  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, password } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      password,
    });
  }

  // delete() Deleta um usuário
  async delete(req, res) {
    const user = await User.delete(req.body);
    return res.json(user);
  }
}

export default new UserController();
