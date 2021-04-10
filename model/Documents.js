const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate')
const DocumentSchema = new mongoose.Schema(
  {
    "address": {
      type: String,
    }
  }
);

DocumentSchema.plugin(mongoosePaginate)

module.exports = mongoose.model("documents", DocumentSchema);