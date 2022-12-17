const signUpUI = function (req, res) {
  res.render("signup", {
    title: "signUp",
    heading: "Create an Account",
    subheading: "Sign Up...",
  });
};

module.exports = {
  signUpUI,
};
