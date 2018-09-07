/**
 * Created by Administrator on 2018/9/6.
 */
var http = require('http');
http.createServer((req,res)=>{
    var url = req.url;
    /*
    1.根据地址栏信息   eg:/student/  显示学员信息  并限制id长度，输出id
    1.1req.url获取地址栏字段
    1.2通过正则匹配
    2.根据地址栏信息   eg:/teacher/  显示老师信息  并限制id长度，输出id
    3.如果匹配不到，显示无此人员
     substring和substr的区别
     substring:含头不含尾
     substr:   限制长度  第二个参数是位数
    */
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
   if(req.url=='/favicon.ico'){
       return;
   }
    if(url.substring(0,9)=="/student/"){
        var studentId=url.substr(9);
        if((/^\d{3}$/).test(studentId)){
            res.write('学员id：' +  studentId);
            console.log('学员id：' + studentId);
        }else{
            res.write('学员id不正确');
            console.log('学员id不正确');
        }
    }else if(url.substring(0,9)=="/teacher/"){
        var teacherId=url.substr(9);
        if((/^\d{9}$/).test( teacherId)){
            res.write('教师id：' +  teacherId);
            console.log('教师id：' +  teacherId);
        }else{
            res.write('教师id不正确');
            console.log('教师id不正确');
        }
    }else{
        res.write('无此id');
        console.log('无此id');
    }
    res.end();

}).listen(8080,'localhost');

























