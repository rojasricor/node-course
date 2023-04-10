const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write("Hello World");
      return res.end();
    }

    if (req.url === "/about") {
      res.write("Acerca de");
      return res.end();
    }

    if (req.url === "/status") {
      res.write("Ryan");
      return res.end();
    }

    res.write("<h1>Not Found</h1>");
    res.end();
  })
  .listen(3000);

console.log("Server listening on port 3000...");
