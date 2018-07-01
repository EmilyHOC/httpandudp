var net=require('net');
var server=net.createServer(function (socket) {
    console.log('客户端与服务器连接建立');
});
server.listen(8431,'localhost',function () {
    address=server.address();
    console.log('被监听的端口地址是%j',address);
});