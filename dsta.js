var http=require('http');
var server =http.createServer(function (req,res) {
    if(req.url!=="fac.ico"){
        res.setHeader("Content-Type","text/plain");
        res.setHeader("Access-Control-Allow-Origin","http://localhost");
        res.write("abc");
    }
    res.end();
}).listen(63341,"localhost");