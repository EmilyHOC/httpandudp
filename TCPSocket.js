var net=require('net');
var client=new net.Socket();
client.setEncoding('utf-8');
client.connect(8432,'localhost',function () {
    console.log('已连接到服务器');
    client.write('你好');
});
client.on('data',function (data) {
    console.log('已连接到服务器端发送的数据:'+data);
});