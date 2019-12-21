[TOC]

# Node.js下jwt实现请求验证

## 1、JWT基本使用

JWT是我们用来实现基于token认证的一种实现方式，是目前实现web开发中跨域认证的一种常用方式。当然，你也可以基于这种方式实现自己签发和认证处理方式，这里首先介绍一下使用方式。

[jsonwebtoken官方网站](https://www.npmjs.com/package/jsonwebtoken)


- 安装jsonwebtoken

```
 npm install jsonwebtoken 
```



- 在登录的时候签发token，前端在拿到token后存储在本地（cookie、web storage都可以）

```
const jwt = require('jsonwebtoken');
const secret = '秘钥abcABC!@#'; 

   //jwt生成token
 const token = jwt.sign({
     name: web
  }, secret, {
     expiresIn:  60*60*2 //2个小时到期时间
  });
console.log(token);

```



- 服务器在客户端请求需要认证的接口时进行解密认证


```
//解密token
jwt.verify(token, secret, function (err, decoded) {
    if (!err){
          console.log(decoded.name);  //如果超时则验证出错
     }
})


```

## 2、JWT实现原理

客户端登录时请求服务器，签发一个token， json web token官方规定由三部分组成
Header(头部).Payload（负载）.Signature（签名），并且以 " . "分隔，


### 2.1）Header 中由两部分组成一个是加密方法，另一个是令牌类型

- 例如


```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### 2.2）Payload 这个指的是有效负载，简单的说就存放的实体数据，官方给了一些建议声明。

这些是一组预定义声明，不是强制性的，但建议使用，以提供一组有用的，可互操作的声明。其中一些是：iss（签发人），exp（到期时间），sub（主题），aud（观众）等。



```
{
    iss: "",
    exp: "",
    sub: "",
    aud: ""
}
```

> 也可以自己定义一些字段

```
{
    iss: "",
    exp: "",
    sub: "",
    aud: "" ,
    jid: ""//序号
    effect: "",//生效时间
}
```

> 然后使用Base64Url对Payload进行编码，形成令牌token的第二部分

### 2.3）Signature(签名)要创建签名部分，必须采用标头中指定的算法对Header,Payload，秘钥secret,对其进行签名，如下


```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

### 2.4）Base64URL

前面提到，Header 和 Payload 串型化的算法是 Base64URL。这个算法跟 Base64 算法基本类似，但有一些小的不同。

JWT 作为一个令牌（token），有些场合可能会放到 URL（比如 api.example.com/?token=xxx）。Base64 有三个字符+、/和=，在 URL 里面有特殊含义，所以要被替换掉：=被省略、+替换成-，/替换成_ 。这就是 Base64URL 算法。


## 3、顺带聊一下web开发中的一些认证机制

### 3.1）HTTP基本认证（HTTP Basic Auth）

在HTTP中，HTTP基本认证是一种允许Web浏览器或者其他客户端在请求时提供用户名和密码形式的身份凭证的一种登录验证方式。

### 3.2）Cookie与session认证机制

用户登录以后服务器会用session来保存用户的登录状态信息，用户下次请求时通过session来认证。


### 3.3）OAuth（开放授权）

OAuth 是一个开放标准，允许用户让第三方应用访问该用户在某一网站上存储的私密的资源（如照片，视频，联系人列表等），而无需将用户名和密码提供给第三方应用。


### 3.4）基于Token认证机制

客户端登录时，服务器会签发一个token给客户端，这个toekn有过期时间和使用范围，客户端保存在本地，客户端每次请求需要认证的接口，都要带上token，服务器判断是否有权限访问。

这种方式最大的缺点就是，在token未过期时，其他人拿到token也能使用，所以使用这种方式最好考虑清楚应对方式，


### 3.5）WebAuthn认证 一 浏览器上一种新的认证方式

W3C的WebAuthn API是一种可融入浏览器和相关Web平台基础架构的标准WebAPI，可为每个站点提供强大、唯一且基于公钥的凭证，消除了从某一站点窃取密码后被用于其他站点的风险。 使用FIDO身份验证器加载到设备上的在浏览器中运行的Web应用程序，可以通过密码操作代替密码交换，或除了密码交换之外，还可为服务提供者和用户带来诸多益处：

- 更简单的身份验证：用户只需使用一种手势登录PC、笔记本电脑和/或移动设备中的内部或内置认证器（如指纹或面部生物识别技术）使用CTAP进行设备到设备认证的外部认证器（如安全密钥和移动设备），一个由FIDO联盟开发的用于补充WebAuthn的外部认证器协议


- 更强的身份验证：FIDO身份验证比单纯依赖密码和相关身份验证方式要强大得多，并具有以下优点用户证书和生物识别模板永远不会离开用户的设备，也不会存储在服务器上帐户可以免受网络钓鱼，中间人攻击和使用被盗密码的反复攻击

- 开发人员可以开始在FIDO新的开发者资源页面上创建利用FIDO身份验证的应用程序和服务。

[查看FIDO项目组官方网站](http://www.fidoalliance.org/)


**参考文档**

[jwt官方网站](https://jwt.io/introduction/)

[Web开发中常见的认证机制 - 陈杰](https://chenhuichao.com/2017/03/13/fe/web-auth/)

[JSON Web Token 入门教程 - 阮一峰](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)

 

