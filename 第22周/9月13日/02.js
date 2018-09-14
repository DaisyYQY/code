/**
 * Created by Administrator on 2018/9/13.
 */
var express = require('express');
var app = express();

app.get(/^\/student\/([\d]{9})$/,(req,res)=>{
    console.log(req.params);
    res.send('学生ID:'+req.params[0]);
    //req.params[0]  只有数字能够用中括号[0]   req.params返回地址栏的信息
});
app.get("/teacher/:gonghao", function (req,res) {
    res.send('老师的工号是：'+req.params.gonghao);
});
app.listen(8080);




















