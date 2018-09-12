/**
 * Created by Administrator on 2018/9/10.
 */
var username='Tom';
var obj={
    username:'jack',
    age:20
}
exports.ob=username;
exports.ob1=obj;    //第一个ob是变量名，后面是一个对象 {obj:{username:'jack',age:20}}  先用ob接收obj，之后再抛出
//module.exports=obj;   //{username:'jack',age:20}  直接把obj抛出
/*
* exports   module.exports  暴露
*/











