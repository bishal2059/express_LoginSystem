const express = require("express");

const signUpController = require("../controller/signup.controller");

const signUpRouter = express.Router();

signUpRouter.get("/", signUpController.signUpUI);

module.exports = signUpRouter;
