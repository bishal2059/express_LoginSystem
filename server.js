const express = require("express");
const path = require("path");

const loginRouter = require("./routes/login.routes");
const signUpRouter = require("./routes/signup.routes");

const app = express();
const PORT = process.env.PORT || 3000;
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "hbs");

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error(err);
    return res.status(400).json({ status: 400, message: err.message });
  }
  next();
});

app.use("/", express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use("/", loginRouter);
app.use("/login", loginRouter);

app.use("/signup", signUpRouter);

app.all("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
