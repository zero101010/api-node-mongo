const Documents = require("../model/Documents");
var mongoosePaginate = require('mongoose-paginate');
const cors = require('cors');
class DocumentsController {
  async store(req, res) {
    const data = await Documents.create(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    return res.json(data);
  }

  async index(req, res) {
    const {address,page} = req.query
    const options = {
      page: parseInt(page,10) || 1,
      limit: 20
    }
    if (address === undefined){
      return res.json({"error":"The query address is required"}); 
    }
    // const data = await Documents.find({address: { "$regex": address }}).limit( limit ).skip(skip*20)
    const data = await Documents.paginate({address: { "$regex": address }},options)
    res.header("Access-Control-Allow-Origin", "*");
    return res.json(data);
  }
}

module.exports = new DocumentsController();