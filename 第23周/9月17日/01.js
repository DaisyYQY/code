/**
 * Created by Administrator on 2018/9/17.
 */
    //加载mongodb模块
    var mongodb=require('mongodb').MongoClient;
//链接数据库
var url ='mongodb://localhost:27017';
mongodb.connect(url,function(err,db){

    console.log(db);
    var dbbase=db.db('test1');
    ////链接集合查询数据
    //
    dbbase.collection("col").insert({"_id":"12","name":"bbb"}, function (data,err) {
        console.log('插入成功');
        //关闭数据库
        db.close();
    });

    dbbase.collection("col").remove({"_id":"009","name":"aaa"}, function (err,data) {
        console.log('删除成功');
        //关闭数据库
        db.close();
    })

    dbbase.collection("col").update({"name":"bbb"},{$set:{"name":"bb"}}, function (err,data) {
        console.log('更新成功');
        //关闭数据库
        db.close();
    })

    dbbase.collection("col").find({}).toArray(function(err,data){
        console.log("查询成功");
        console.log(data);
        db.close();
    });

})



































