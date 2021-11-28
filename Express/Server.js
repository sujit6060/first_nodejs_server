const express = require("express");
const app = express();
const port = 3003;

app.get("/", (req, res) => {
  res.json({
    name: "sujit",
  });
});

app.listen(port, () => {
  console.log("Server running at Port 3003");
});
