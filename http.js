var http=require('http');
var server=http.createServer(function (req,res) {
    if(req.url!=="fa.ico") {
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': 'http://localhost'
        });
        res.write("abc");
    }
        res.end();

}).listen(1337,"localhost");