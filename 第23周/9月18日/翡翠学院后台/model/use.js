/**
 * Created by Administrator on 2018/9/17.
 */
var db = require('./db');
db.add("test2","col",{"_id":"111","name":"cccc"}, function (err,data) {
    console.log("插入成功");
})

//db.del("test2","col",{"_id":"111","name":"cccc"}, function (err,data) {
//    console.log("删除成功");
//})

db.update("test2","col",{"name":"cccc"},{"name":"bbb"}, function (err,data) {
    console.log("更新成功");
})

db.find("test2","col",{}, function (err,data) {
    console.log(data);
    console.log("查询成功");
});
























