const express = require("express");

const { loginRender, logincheck } = require("../controller/login.controller");

const loginRoute = express.Router();

loginRoute.get("/", loginRender);

loginRoute.post("/", logincheck);

module.exports = loginRoute;
