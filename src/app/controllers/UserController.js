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
    // const userExists = await User.findOne({ where: { email: req.body.email } });

    // if (userExists) {
    //   return res.status(400).json({ error: 'User already exists' });
    // }

    // const { id, name, email } = await User.update(req.body);
    // return res.json(id, name, email);
    return res.json({ status: 'ok' });
  }

  // delete() Deleta um usuário
  async delete(req, res) {
    const user = await User.delete(req.body);
    return res.json(user);
  }
}

export default new UserController();
