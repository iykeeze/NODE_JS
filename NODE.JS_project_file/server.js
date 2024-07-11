import http from "http";
const server = http.createServer((req, res) => {
  console.log(req);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("<h1>hello world??????</h1>\n");
});

// creating a port number 5000
const port = 5000;

// listen on port 3000
server.listen(5000, () => {
  console.log("server running at http://localhost:5000/");
});
