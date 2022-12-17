const users = require("../models/users");

const signUpUI = function (req, res) {
  res.render("signup", {
    title: "signUp",
    heading: "Create an Account",
    subheading: "Sign Up...",
  });
};

const addUser = function (req, res) {
  const duplicate = users.find(function (data) {
    return req.body.username === data.username;
  });
  if (duplicate) {
    res
      .status(200)
      .json(["Username Already Taken. Please use Another username"]);
  } else {
    users.push(req.body);
    res.status(201).render("account", {
      title: "Account created",
      heading: "Congrats Your Account has been created",
      subheading: `Username:${req.body.username}`,
    });
  }
};

module.exports = {
  signUpUI,
  addUser,
};
