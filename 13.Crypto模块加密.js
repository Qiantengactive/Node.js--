1Crypto介绍  秘密赞同者 秘密党员
加密模块需要底层系统提供OppenSSL的支持。
它提供一个安全凭证的封装方式，可以用于HTTPS安全网络以及普通HTTP链接

crypto是node.js中实现加密和解密的模块 在node.js中，使用OpenSSL类库作
为内部实现加密解密的手段 OpenSSL是一个经过严格测试的可靠的加密与解密算法的实现工具

1>.哈希(散列)算法
      散列算法也叫哈希算法，用来把任意长度的输入变换成固定长度的输出
      crypto.createHash()  //md5 sha1 sha256  sha512 ripemd160 
      进制
      	hex		十六进制
      	binary  二进制
      	base64  


      获取所有的散列算法
      console.log(crypto.getHashes());

      相同的输入会产生相同的输出
      不同的输出会产生不同的输出
      任意的输入长度输出长度是相同的
      不能从输出推算出输入的值

      散列算法示例
      	eg:
      /*	获取Node.js的原声模块crypto*/
      	var crypto=require('crypto');
      /*调用crypto模块的hash编码*/ 
      // 设置模块的加密方式   //md5 sha1 sha256  sha512 ripemd160
      	var hash=crypto.createHash("md5");
      /*	应用hash编码方式实现加密*/
      	hash.update(new Buffer('huangdanhua','binary')); 
      //指定要摘要的原始内容,可以在摘要被输出之前使用多次update方法来添加摘要内容
      // 使用哪种编码方式输出加密字符串
      //  binary可省 默认binary 可设置hex binary base64 	

      	var encode=hash.digest('hex'); 
      //摘要输出，在使用digest方法之后不能再向hash对象追加摘要内容。
      	console.log(encode);
      //调用digest方法后 hash对象将被清空 再次使用再次新建hash对象

    多次update

    var fs = require('fs');
    var shasum = crypto.createHash('sha1');//返回sha1哈希算法
    var rs = fs.createReadStream('./readme.txt');
    rs.on('data', function (data) {
        shasum.update(data);//指定要摘要的原始内容,可以在摘要被输出之前使用多次update方法来添加摘要内容
    });
    rs.on('end', function () {
        var result = shasum.digest('hex');//摘要输出，在使用digest方法之后不能再向hash对象追加摘要内容。
        console.log(result);
    })

2>.HMAC算法
    HMAC算法将散列算法与一个密钥结合在一起，以阻止对签名完整性的破坏 生成私钥
    一个密钥和一个消息为输入 生成一个消息摘要

    $ openssl genrsa -out key.pem 1024
    var crypto = require('crypto');
    /*crypto.createHmac(algorithm,key);
      创建并返回一个hmac对象，制定算法和密钥的加密hmac
      algorithm:为OpenSSL支持的算法与createHash中的方法相同
      key为hmac使用的密钥  可以为任意字符串
    */
    var hmac=crypto.createHmac('md5','dan');
    hmac.update(new Buffer('huangdanhua','binary'));
    var encode=hmac.digest('hex');
    console.log("bnary data"+excode);

    var shasum = crypto.createHmac('sha1', 'zfpx');
    var result = shasum.update('hello').digest('hex');
    console.log(result);

3>.Cipher和Decipher秘密 双向加密
    blowfish算法是一种对称的加密算法,对称的意思就是加密和解密使用的是同一个密钥
    珠峰案例：
    var crypto = require('crypto');
    var fs = require('fs');

    function cipher() {
        var cipher = crypto.createCipher('blowfish',
        fs.readFileSync('key.pem', 'ascii'));//指定算法和密码
        cipher.update('123456', 'utf8', 'hex');//指定要加密的内容
        return cipher.final('hex');//输出加密后的结果
    }
    var result = cipher();
    console.log(result);

    var decipher = crypto.createDecipher('blowfish',
     fs.readFileSync('key.pem', 'ascii'));//指定算法和密码
    decipher.update(result, 'hex', 'utf8');//指定要解密的内容
    var result = decipher.final('utf8');//输出解密后的结果
    console.log(result);

    node.js开发实战案例
    var crypto=require('crypto');
    var key='salt_from';
    var plaintext='danhuang';
    // 获取cipher加密对象  (算法类型，需要加密的私密)
    var cipher=crypto.createCipher('aes-256-cbc',key);
    cipher.update(plaintext,'utf8','hex');
    var encryptefPassword=cipher.final('hex');
    console.log("encrypted：",encryptefPassword)


    // 获取Decipher解密对象
    var decipher=crypto.createDecipher('aes-256-cbc',key);
    decipher.update(encryptefPassword,'hex','utf8');
    var decryptefPassword=decipher.final('utf8');
    console.log("decrypted：",decryptefPassword)

    注意：对一个字符进行加密和反加密
    必须保证cipher对象和decipher对象加密的私钥和加密算法是相同的
    解密和加密调用的所有函数类似

4.Web数据密码的安全

    校验性数据====》密码
    系统校验数据可使用不可逆加密

    储存性数据    ====》用户私有数据 ====》系统用户统计数据
    需要解密后返回给用户的数据 或者系统统计后的用户数据



