class HomeController {
  index(req, res) {
    return res.send({ status: 'working' });
  }
}

export default new HomeController();
