const http = require('http');

const PORT = process.env.PORT ?? 5001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello from server with docker)');
});

server.listen(PORT, () => {
  console.log(`Server is listening port ${PORT}`);
});
