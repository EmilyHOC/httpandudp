var net=require('net');
var server=net.createServer(function (socket) {
    console.log('客户端与服务器连接建立');
});
server.listen(8431,'localhost',function () {
    console.log('服务器开始监听');
});
