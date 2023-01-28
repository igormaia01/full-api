class HomeController {
  index(req, res) {
    res.json({ online: true });
  }
}

export default new HomeController();
