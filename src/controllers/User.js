import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.status(201).json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, { attributes: ['id', 'nome', 'email'] });
      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User não existe'],
        });
      }

      const newUser = await user.update(req.body, { attributes: ['id', 'nome', 'email'] });
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User não existe'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }
}

export default new UserController();
