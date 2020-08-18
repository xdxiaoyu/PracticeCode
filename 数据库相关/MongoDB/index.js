var MongoClien = require('mongodb').MongoClient

var url = "mongodb://localhost:27017";

// 路径 mongo新版本需要设置这两个参数，否则会报警告
// MongoClien.connect(url, { useNewUrlParser: true, useUnifiedTopology:true},(err,db) => {
//   if(err) throw err
//   var dbo = db.db('xiaoyu')
//   var myobj = { username:"小羽", type:"帅",like:['唱','跳','开车','搞代码'] }
//   dbo.collection("user").insertOne(myobj,(err,res) => {
//     if(err) throw err
//     console.log("文档插入成功");
//     db.close()
//   })
// });

MongoClien.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) throw err
  var dbo = db.db('user')
  var myobj = [
    { username: "小羽", type: "帅", like: ['唱', '跳', '开车', '搞代码'] },
    { username: "吴亦凡", type: "帅", like: ['唱', '跳', '大碗宽面'] },
    { username: "肖战", type: "帅", like: ['唱', '跳', '爱粉丝'] },
  ];
  dbo.collection('users').insertMany(myobj, (err, res) => {
    if (err) throw err
    console.log("插入的文档数量为：" + res.insertedCount)
    db.close()
  })
})

