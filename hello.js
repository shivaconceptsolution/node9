const http = require('http')  //http is the module that is used to handle request and response
var obj = require('url');
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    var q = obj.parse(req.url, true);
    var qdata = q.query;
    var a = qdata.txtnum1;
    var b = qdata.txtnum2;
    var c = parseInt(a)+parseInt(b);
    res.end('result is '+c)
  })


  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  }) 

