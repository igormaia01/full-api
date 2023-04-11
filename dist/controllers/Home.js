"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(req, res) {
    console.log('oi');
    res.json('ok');
  }
}

exports. default = new HomeController();
