/**
 * Created by Administrator on 2018/9/6.
 */
//var http =require('http');
var fs = require('fs');
//http.createServer((req,res)=>{
//    res.writeHead(200,{'Content-type':'text/javascript;charset=utf-8'});
//    //读取文件
//    fs.readFile('./demo3.js',(err,data)=>{
//        res.end(data);
//    });
//}).listen(8080,'127.0.0.1');
//    fs.stat("3.txt",function(err,stats){
//        console.log(err);
//        console.log(stats);
////    获取文件的大小；
//        console.log(stats.size);
////    获取文件最后一次访问的时间；
//        console.log(stats.atime.toLocaleString());
////    文件创建的时间；
//        console.log(stats.birthtime.toLocaleString());
////    文件最后一次修改时间；
//        console.log(stats.mtime.toLocaleString());
////    状态发生变化的时间；
//        console.log(stats.ctime.toLocaleString())
////判断是否是目录；是返回true；不是返回false；
//        console.log(stats.isFile())
////    判断是否是文件；是返回true、不是返回false；
//        console.log(stats.isDirectory())
//        console.log(stats.isBlockDevice())
//        console.log(stats.isCharacterDevice())
//        console.log(stats.isSymbolicLink())
//        console.log(stats.isFIFO())
//        console.log(stats.isSocket())
//    })


fs.writeFile('3', 'Hello Node.js 你好','utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});










