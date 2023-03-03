const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    queryInterface.bulkInsert('users', [{
      nome: 'igor maia',
      email: 'aleatoryemail@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      nome: 'igor maia2',
      email: 'aleatoryemail1@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      nome: 'igor maia3',
      email: 'aleatoryemail2@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      nome: 'igor maia4',
      email: 'aleatoryemail3@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down() {},
};
