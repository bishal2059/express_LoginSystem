const express = require("express");

const logincontroller = require("../controller/login.controller");

const loginRoute = express.Router();

loginRoute.get("/", logincontroller.loginRender);

loginRoute.post("/", logincontroller.logincheck);

module.exports = loginRoute;
