/*
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-08-18 18:42:26
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-08-19 16:24:13
 */
var MongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost:27017";

// 路径 mongo新版本需要设置这两个参数，否则会报警告
// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology:true},(err,db) => {
//   if(err) throw err
//   var dbo = db.db('xiaoyu')
//   var myobj = { username:"小羽", type:"帅",like:['唱','跳','开车','搞代码'] }
//   dbo.collection("user").insertOne(myobj,(err,res) => {
//     if(err) throw err
//     console.log("文档插入成功");
//     db.close()
//   })
// });

// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
//   if (err) throw err
//   var dbo = db.db('user')
//   var myobj = [
//     { username: "小羽", type: "帅", like: ['唱', '跳', '开车', '搞代码'] },
//     { username: "吴亦凡", type: "帅", like: ['唱', '跳', '大碗宽面'] },
//     { username: "肖战", type: "帅", like: ['唱', '跳', '爱粉丝'] },
//   ];
//   dbo.collection('users').insertMany(myobj, (err, res) => {
//     if (err) throw err
//     console.log("插入的文档数量为：" + res.insertedCount)
//     db.close()
//   })
// })

// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
//   if(err)  throw err
//   var dbo = db.db('xiaoyu')
//   dbo.collection('user').find().toArray((err,res) => {
//     if(err) throw err
//     console.log(res);
//     db.close()
//   })
// })

// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
//   if (err) throw err
//   var dbo = db.db('xiaoyu')
//   // var whereStr = {'username':'小羽'}
//   var whereStr = {
//     'username': {$in:['马云','小羽']}
//   }
//   dbo.collection('user').find(whereStr).toArray((err, res) => {
//     if (err) throw err
//     console.log(res);
//     db.close()
//   })
// })

// MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology: true},(err,db) => {
//   if(err) throw err
//   var dbo = db.db('xiaoyu')
//   var whereStr = {'username': '小羽'}
//   var updateStr = {$set:{type: '小帅'}}
//   dbo.collection('user').updateOne(whereStr,updateStr,(err, res) => {
//     if(err) throw err
//     console.log('文档更新成功');
//     db.close()
//   })
// })

// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
//   if (err) throw err
//   var dbo = db.db('xiaoyu')
//   var myobj = { height: 1 }
//   dbo.collection('user').find().skip(1).sort(myobj).toArray((err,res) => {
//     if(err) throw err
//     console.log(res);
//     db.close()
//   })
// })


// MongoClient.connect(url,{useNewUrlParser: true,useUnifiedTopology: true},(err,db) => {
//   if(err) throw err
//   var dbo = db.db('xiaoyu')
//   var whereStr = {username: '小羽'}
//   dbo.collection('user').deleteOne(whereStr,(err,res) => {
//     if(err) throw err
//     console.log('文档删除成功');
//     db.close()
//   })
// })

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// let obj = { _id: 1, product_id: 154, status: 1 }
// MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("xiaoyu");
//     dbo.collection("orders").insertOne(obj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
//     });
// });


// MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("xiaoyu");
//     var myobj =  [
//       { _id: 154, name: '笔记本电脑' },
//       { _id: 155, name: '耳机' },
//       { _id: 156, name: '台式电脑' }
//     ];
//     dbo.collection("products").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("插入的文档数量为: " + res.insertedCount);
//         db.close();
//     });
// });

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  var dbo = db.db("xiaoyu");
  dbo.collection("orders").aggregate([
    {
      $lookup:
      {
        from: 'products',            // 右集合
        localField: 'product_id',    // 左集合 join 字段
        foreignField: '_id',         // 右集合 join 字段
        as: 'orderdetails'           // 新生成字段（类型array）
      }
    }
  ]).toArray((err, res) => {
    if (err) throw err
    console.log(JSON.stringify(res));
    db.close();
  })
});