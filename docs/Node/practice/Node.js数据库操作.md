---
sidebarDepth : 0
---

# Node.js数据库操作

[[toc]]

[参考文档](http://blog.fens.me/nodejs-mysql-intro/)
## 安装


```
npm install mysql

```

## 基础使用

### 连接数据库，在app.js使用
```
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database:'nodejs',
    port: 3306
});
conn.connect();
conn.query('SELECT * from table', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});
conn.end();
```

### 增删改查


```
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database: 'nodejs',
    port: 3306
});
conn.connect();

var insertSQL = 'insert into t_user(name) values("conan"),("fens.me")';
var selectSQL = 'select * from t_user limit 10';
var deleteSQL = 'delete from t_user';
var updateSQL = 'update t_user set name="conan update"  where name="conan"';

//delete
conn.query(deleteSQL, function (err0, res0) {
    if (err0) console.log(err0);
    console.log("DELETE Return ==> ");
    console.log(res0);

    //insert
    conn.query(insertSQL, function (err1, res1) {
        if (err1) console.log(err1);
        console.log("INSERT Return ==> ");
        console.log(res1);

        //query
        conn.query(selectSQL, function (err2, rows) {
            if (err2) console.log(err2);

            console.log("SELECT ==> ");
            for (var i in rows) {
                console.log(rows[i]);
            }

            //update
            conn.query(updateSQL, function (err3, res3) {
                if (err3) console.log(err3);
                console.log("UPDATE Return ==> ");
                console.log(res3);

                //query
                conn.query(selectSQL, function (err4, rows2) {
                    if (err4) console.log(err4);

                    console.log("SELECT ==> ");
                    for (var i in rows2) {
                        console.log(rows2[i]);
                    }
                });
            });
        });
    });
});

//conn.end();
```
### 使用连接池配置


```
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database: 'nodejs',
    port: 3306
});

var selectSQL = 'select * from t_user limit 10';

pool.getConnection(function (err, conn) {
    if (err) console.log("POOL ==> " + err);

    conn.query(selectSQL,function(err,rows){
        if (err) console.log(err);
        console.log("SELECT ==> ");
        for (var i in rows) {
            console.log(rows[i]);
        }
        conn.release();
    });
});
```

## 在express项目中使用

- 这是express目录结构 

![这是目录结构](http://www.fengdb.com/public/images/express04.png)

- model中是用来存储业务逻辑代码



```
var mysql = require('mysql');
var mysqlConfig = require('../conf/mysql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool( mysqlConfig );

var userSql = {
	insert:'INSERT INTO node_user(name,age) VALUES(?,?)',
	queryAll:'SELECT * FROM node_user',
	getUserById:'SELECT * FROM node_user WHERE id = ? '
};

var main = {
	add: function (request,callback) {
		// 从连接池获取连接
		pool.getConnection(function(err, connection) {
			var d = {};
			if ( err ) {
				d.connectError = err;
				return callback(d);
			}

			// 获取前台页面传过来的参数
			var param = request.query || request.params;

			// 建立连接 增加一个用户信息
			connection.query(userSql.insert, [param.name,param.age], function(err, result) {
				d.response = { err: err, success: result };
				callback(d);
				// 释放连接
				connection.release();

			});
		});
	},
	list: function (request,callback) {
		// 从连接池获取连接
		pool.getConnection(function(err, connection) {
			var d = {};
			if ( err ) {
				d.connectError = err;
				return callback(d);
			}
			// 建立连接 增加一个用户信息
			connection.query(userSql.queryAll,  function(err, result) {

				d.response = { err: err, success: result };
				callback(d);
				// 释放连接
				connection.release();

			});
		});
	}
};
module.exports = main;
```
然后在路由routes/user.js里面引进来使用，如下。


```
var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');

// 添加用户
router.post('/addUser', function(req, res, next){
	userModel.add(req,function (data) {

		if (data.connectError) {
			return res.json('connect database error')
		}

		if (data.response) {
			res.json(data.query.success);
		}


	});
});

router.get('/list', function(req, res, next){
	userModel.list(req,function (data) {
		if (data.connectError) {
			return res.json({code:'101',desc: 'db connect error!'})
		}

		if (data.response) {
			return res.json({code:'200',desc: 'success',data:data.response.success})
		}

	});
});

module.exports = router;

```






## 测试
