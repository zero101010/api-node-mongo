const express = require("express");

const routes = express.Router();
const DocumentsController = require("./controller/DocumentsController");
const Authenticate = require("./services/auth");

routes.get("/clientes",Authenticate.verifyJWT, DocumentsController.index);

routes.post("/clientes", DocumentsController.store);

routes.post("/login", Authenticate.login);

module.exports = routes;