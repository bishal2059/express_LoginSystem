const users = require("../models/users");

const signUpUI = function (req, res) {
  res.render("signup", {});
};

const addUser = function (req, res) {
  const duplicate = users.find(function (data) {
    return req.body.username === data.username;
  });
  if (duplicate) {
    res
      .status(400)
      .json(["Username Already Taken. Please use Another username"]);
  } else {
    users.push({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      dateOfBirth: req.body.dob,
      userName: req.body.username,
      password: req.body.password,
    });
    console.log(req.body);
    res.status(200).render("account", {
      name: `${req.body.firstName} ${req.body.lastName}`,
      username: req.body.username,
    });
  }
};

module.exports = {
  signUpUI,
  addUser,
};
