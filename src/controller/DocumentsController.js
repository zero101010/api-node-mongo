const Documents = require("../model/Documents");
const cors = require('cors');
class DocumentsController {
  async store(req, res) {
    const data = await Documents.create(req.body);
    return res.json(data);
  }

  async index(req, res) {
    const address = req.query.address
    const skip = parseInt(req.query.page)
    if (address === undefined){
      return res.json({"error":"The query address is required"}); 
    }
    const data = await Documents.find({address: { "$regex": address }}).limit( 20 )
    res.header("Access-Control-Allow-Origin", "*");
    return res.json(data);
  }
}

module.exports = new DocumentsController();