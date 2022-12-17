const express = require("express");
const path = require("path");

const loginRouter = require("./routes/login.routes");
const signUpRouter = require("./routes/signup.routes");

const app = express();
const PORT = process.env.PORT || 3000;
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "hbs");

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", express.json());
app.use("/", loginRouter);

app.use("/signup", signUpRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
