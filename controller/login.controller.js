const users = require("../models/users");

const loginRender = function (req, res) {
  res.status(201).render("login", {
    title: "Login System",
    heading: "Login Verification",
    subheading: "Login...",
    signup: "Don't have an Account ",
  });
};

const logincheck = function (req, res) {
  const userObj = users.find(function (data) {
    return (
      data.username === req.body.username && data.password === req.body.password
    );
  });
  // console.log(userObj);
  if (!userObj) {
    res.status(200).json(["Username or Password is incorrect"]);
  } else {
    res.set("Content-Type", "text/html");
    res.status(201).render("user", {
      title: "Welcome!",
      user: `${userObj.firstName} ${userObj.lastName}`,
    });
  }
};

module.exports = {
  loginRender,
  logincheck,
};
