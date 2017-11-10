var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var MongoClient = require('mongodb').MongoClient;
//确定数据库名称vuetest
var mongoUrl = 'mongodb://localhost:27017/vuetest';
var _db;
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('dist'));
MongoClient.connect(mongoUrl, function (err, db) {
  if(err) {
    console.error(err);
    return;
  }
  console.log('mongodb have connected your project');
  _db = db;
  //监听端口8080
  app.listen(8080, function () {
    console.log('server is running at 8080');
  });
});

//增加书籍
app.post('/createBook', function(req, res, next) {
var request = req.body;
var collection = _db.collection('book');
if(!request.name || !request.teacher || !request.introduction || !request.shopUrl || !request.pictureUrl) {
  res.send({errcode:-1,errmsg:"参数不完整"});
  return;
}
collection.insert({name: request.name, teacher: request.teacher,introduction: request.introduction,shopUrl: request.shopUrl,pictureUrl: request.pictureUrl,}, function (err, ret) {
  if(err) {
    console.error(err);
    res.status(500).end();
  } else {
    res.send({errcode:0,errmsg:"ok"});
  }
});
});
//获取书籍列表
app.get('/book-list', function(req, res, next) {
  var collection = _db.collection('book');
  collection.find({}).toArray(function (err, ret) {
    if(err) {
      console.error(err);
      return;
    }
    res.json(ret);
  });
});
