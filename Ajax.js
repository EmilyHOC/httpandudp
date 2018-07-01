var http=require('http');
var server=http.createServer(function (req,res) {
}).listen(1337,"localhost");
server.on('connect',function (socket) {
    console.log('客户端连接已建立');
});