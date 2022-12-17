const express = require("express");

const signUpController = require("../controller/signup.controller");

const signUpRouter = express.Router();

signUpRouter.get("/", signUpController.signUpUI);
signUpRouter.post('/',signUpController.addUser)


module.exports = signUpRouter;
