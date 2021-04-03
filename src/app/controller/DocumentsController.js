const Documents = require("../model/Documents");

class DocumentsController {
  async store(req, res) {
    const data = await Documents.create(req.body);
    return res.json(data);
  }

  async index(req, res) {
    // const data = await Documents.find({});
    // const data = await Documents.findById("5b5c0c47c5e59eec16e74982");
    const address = req.query.address
    const data = await Documents.find({address: { "$regex": address }})
    return res.json(data);
  }
}

module.exports = new DocumentsController();