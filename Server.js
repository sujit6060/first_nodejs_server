const http = require("http");
const port = 3002;
const querystring = require("query-string");
const fs = require("fs");

const Server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url == "/") {
    res.writeHead(200);
    data = {
      name: "data",
    };
    res.end(data.toString());
  } else if (method === "POST" && url == "/post") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      body = Buffer.concat(body).toString();
      const parsed = querystring.parse(body);
      console.log(parsed);
      res.writeHead(200);
      res.write(JSON.stringify(parsed));
      res.end();
    });
  } else if (method === "GET" && url == "/html") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("File not Found");
      } else {
        res.writeHead(200);
        res.write(data);
        res.end();
      }
    });
  }
});

Server.listen(port, () => {
  console.log("Server Runing On Port 3002");
});
