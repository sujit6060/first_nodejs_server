const express = require("express");
const app = express();

const data = [
  {
    name: "john",
    vaccinate: false,
  },
  {
    name: "Leeta",
    vaccinate: true,
  },
  {
    name: "Jeeta",
    vaccinate: false,
  },
];

app.set("view engine", "ejs");

app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home", { data: data });
});

app.get("/home", (req, res) => {
  res.json({ message: "success", data: data });
});

app.listen(9000, () => {
  console.log("Server Running on Port 9000");
});
