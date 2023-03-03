class HomeController {
  async index(req, res) {
    console.log('oi');
    res.json('ok');
  }
}

export default new HomeController();
