const express = require("express");
const bcrypt = require("bcryptjs");
const app = express();
const tableMockData = require("./json/tableData.json");
const auth = require("./middleware/middleware");
const { loginController, logoutController } = require("./controller/auth");

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", async (req, res) => {
  res.send("Health check");
});

app.post("/api/login", loginController);

app.post("/api/transaction-list", auth, async (req, res) => {
  const data = tableMockData;
  res.status(200).json(data);
});

app.post("/hash-password", async (req, res) => {
  console.log("body - ", req.body);
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);
  res.json({ hash, password: req.body.password });
});

app.listen(5001, () => {
  console.log("Server is up and running in 5001");
});
