var net=require('net');
var server=net.createServer();
server.on('connection',function (socket) {
    console.log('客户端与服务器连接已经建立');
    socket.setEncoding('utf-8');
    socket.on('data',function (data) {
        console.log('已经接收到客户端发送的数据'+data);
        socket.write('确认数据:'+data);
    });
});
server.listen(8432,'localhost');