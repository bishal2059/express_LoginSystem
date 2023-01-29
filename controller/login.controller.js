const users = require("../models/users");

const loginRender = function (req, res) {
  return res.status(200).render("login");
};

const logincheck = function (req, res) {
  const userObj = users.find(function (data) {
    return data.userName === req.body.userName;
  });
  if (!userObj) {
    return res.status(400).json({ error: "Invalid Username" });
  }
  if (userObj.password !== req.body.password) {
    return res.status(400).json({ error: "Invalid password" });
  }
  res.status(200).render("user", {
    Name: `${userObj.firstName} ${userObj.lastName}`,
    Gender: userObj.gender,
    DateofBirth: userObj.dateOfBirth.slice(0, 10),
    username: userObj.userName,
  });
};

module.exports = {
  loginRender,
  logincheck,
};
