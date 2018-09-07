/**
 * Created by Administrator on 2018/9/6.
 */
var http =require('http');
var fs = require('fs');
http.createServer((req,res)=>{
    //fs.writeFile('2','这是一个文档','utf8',(err,data)=>{
    //    res.end(data);
    //});
    //res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    //创建文件夹
    fs.mkdir('./test/',(err,data)=>{
        console.log('创建成功');
        res.end();
    })

    //console.log("创建目录 /tmp/test/");
//异步
//    fs.mkdir("./1/",function(err){
//        if (err) {
//            return console.error(err);
//        }
//        console.log("tmp目录创建成功。");
        //fs.mkdir("./tmp/test/",function(err){
        //    if (err) {
        //        return console.error(err);
        //    }
        //    console.log("test目录创建成功。");
        //});
    //    res.end();
    //});
    //console.log("创建目录 /tmp1/test/");
//同步
//    fs.mkdirSync("./tmp1/");
//    fs.mkdirSync("./tmp1/test/");





    //fs.stat('./11',(err,data)=>{
    //    console.log(data.isDirectory());
    //    if(data.isDirectory()){
    //        console.log('这是一个目录');
    //    }else{
    //        console.log(1);
    //    }
    //    res.end();
    //});
/*
* 1.读取目录
* 2.判断当前目录里的数据（目录，文件）
* 3.遍历files
* 4.判断是否是目录
* */
    //如果是图标立刻返回
    //if(req.url=='favicon.ico'){
    //    return;
    //}
    //读取目录
    //fs.readdir('./11',(err,files)=>{
    //    //建立空文件夹等待放置目录
    //    //console.log(files);
    //    var arr=[];
    //    //迭代处理  以为开始是一个异步函数，通过迭代变成同步函数
    //    // 1执行后执行2  2执行后执行3
    //    (function item(i) {
    //        if(i==files.length){
    //            console.log(arr);
    //            return;
    //        }
    //        fs.stat('./11/'+files[i],(err,data)=>{
    //            if(data.isDirectory()){
    //                arr.push(files[i])
    //            }
    //            item(i+1)
    //        })
    //    })(0)
    //    res.end();
    //});


    //if(req.url=='favicon.ico'){
    //    return;
    //}
    //fs.readdir('',()=>{
    //
    //});









}).listen(8080,'127.0.0.1');


























