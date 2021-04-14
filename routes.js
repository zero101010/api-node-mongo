const express = require("express");

const routes = express.Router();
const DocumentsController = require("./controller/DocumentsController");
const Authenticate = require("./services/auth");

routes.get("/clients", DocumentsController.index);

routes.post("/login", Authenticate.login);

routes.get("/", (req,res)=>{
    return res.json({"Version":"6","Status":"Up"}); 
});

module.exports = routes;
