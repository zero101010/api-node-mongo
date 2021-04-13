const Documents = require("../model/Documents");
var cors = require('cors');
class DocumentsController {

  async index(req, res) {
    const {address,page} = req.query
    const options = {
      page: parseInt(page,10) || 1,
      limit: 20
    }
    if (address === undefined){
      return res.json({"error":"The query address is required"}); 
    }
    const data = await Documents.paginate({address: { "$regex": address }},options)
    res.header("Access-Control-Allow-Origin", "*");
    return res.json(data);
  }
}

module.exports = new DocumentsController();