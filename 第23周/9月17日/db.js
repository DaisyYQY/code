/**
 * Created by Administrator on 2018/9/17.
 */
var mongodb = require("mongodb").MongoClient;
var setting = require("./setting");
function connectDB(callback){
    var url=setting.url;
    mongodb.connect(url, function (err,db) {
        //var dbBase=db.db('test1');
        if(err){
            callback(err,null);
        }
        callback(err,db);
    });
}
/*
* insert
* insert({},function(){})
*
*/
exports.add= function (dab,collection,json,callback) {
    connectDB(function (err,db) {
        var dbBase=db.db(dab);
        dbBase.collection(collection).insert(json, function (err,data) {
            callback(err,data);
            db.close();
        })
    })
};
exports.del= function (dab,collection,json,callback) {
    connectDB(function (err,db) {
        var dbBase=db.db(dab);
        dbBase.collection(collection).remove(json, function (err,data) {
            callback(err,data);
            db.close();
        })
    })
}
exports.update= function (dab,collection,json,json1,callback) {
    connectDB(function (err,db) {
        var dbBase=db.db(dab);
        dbBase.collection(collection).update(json,{$set:json1}, function (err,data) {
            callback(err,data);
            db.close();
        })
    })
}
exports.find= function (dab,collection,json,callback) {
    connectDB(function (err,db) {
        var dbBase=db.db(dab);
        dbBase.collection(collection).find(json).toArray(function (err,data) {
            callback(err,data);
            db.close();
        })
    })
}













