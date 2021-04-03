const express = require("express");

const routes = express.Router();
const DocumentsController = require("./controller/DocumentsController");

routes.get("/clientes", DocumentsController.index);

routes.post("/clientes", DocumentsController.store);

module.exports = routes;