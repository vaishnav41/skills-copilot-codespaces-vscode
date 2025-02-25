// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === '/comments' && req.method === 'GET') {
    fs.readFile(path.join(__dirname, 'comments.json'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});