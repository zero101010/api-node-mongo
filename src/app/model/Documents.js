const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema(
  {
    "address": {
      type: String,
    }
  }
);

module.exports = mongoose.model("documents", DocumentSchema);