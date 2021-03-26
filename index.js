const http = require('http')
const nstatic = require('node-static')
const fserver = new nstatic.Server('./public')
const port = 5000

http.createServer((req,res) => {
  fserver.serve(req, res)
}).listen(port)