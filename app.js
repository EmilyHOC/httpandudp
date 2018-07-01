var fs=require('fs');
var file=fs.createReadStream('C:\\Users\\10579\\Desktop\\项目须知.txt',{start:3,end:12});
file.on('open',function (fd) {
    console.log('开始读取文件');

});
file.on('data',function (data) {
    console.log('读取数据');
    console.log(data);
});
file.on('end',function () {
    console.log('文件已全部读取完毕');
});
file.on('close',function () {
    console.log('文件已经关闭');
});