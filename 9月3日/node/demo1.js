/**
 * Created by Administrator on 2018/9/3.
 */
//    引入http模块   require 加载
var http = require('http');
var server = http.createServer(function (req,res) {
    //req  => request  请求   res  =>  response  响应
    //console.log(arguments);
    res.end("Hello World!");
})
//console.log(http);
server.listen(3000,"localhost");











