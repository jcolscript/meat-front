"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonServer = require("json-server");
var server = jsonServer.create();
var router = jsonServer.router('./../db.json');
var middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);
server.listen(3000, function () {
    console.log('JSON Server is running');
});
