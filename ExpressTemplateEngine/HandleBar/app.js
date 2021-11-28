const express = require("express");
const app = express();
const { engine } = require("express-handlebars");

const data = [
  {
    name: "John",
    vaccinated: false,
  },
  {
    name: "Lita",
    vaccinated: true,
  },
  {
    name: "Preeti",
    vaccinated: true,
  },
];

app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/home", (req, res) => {
  res.render("home", { people: data });
});

app.get("/about", (req, res) => {
  res.render("about", { data: data });
});

app.post("/submit", (req, res) => {
  res.send(req.body);
  console.log(req.body);
});

app.listen(9000, () => {
  console.log("Server Running On Port 9000");
});
