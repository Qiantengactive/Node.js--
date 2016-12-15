文件读取操作
fs模块对文件的几乎所有的操作都有同步和异步的两种形式
readFile() 和 readFileSync()两种方式
区别：同步调用回阻塞代码的执行，异步则不会
异步调用会将读取任务下达到任务队列，知道任务执行完才会回调
异常处理方面：
	同步必须使用try catch方式
	异步可以通过回调函数的第一个参数
1.readFile &&readFileSync  readFile的方式的确是使用buffer,但是也是一次性读取
eg：
	const fs=require('fs');
	const path=require('path');

	console.time('async');
	fs.readFile(path.join(__dirname,'../b.js'),'utf8',(error,data)=>{
		if(error) throw error;  
		console.log(data);
	})
	console.timeEnd('async');

	console.time('async2');
	try{
		var data2=fs.readFileSync(path.join(__dirname,'../b.js'),'utf8')
		console.log(data2);
	}catch(error){
	   throw error;
	}
	console.timeEnd('async2');
2.Buffer   分布读取
	buf.toString([encoding],[start],[end]);
	buf.write('12',2);   写入两个长度
	buf.isEncoding(encoding);

*****node解决各种操作系统编码问题：iconv-lite编码转换(npm install iconv-lite)

		a.编码格式 读取文件没有制定编码格式默认读取的是一个Buffer()
		b.缓冲区就是内存中操作数据的容器
		c.只是数据容器而已
		d.通过缓冲区可以很方便的操作二进制数据
		d.而且在大文件操作时必须有缓冲区
	eg：
	const fs=require('fs');utf
	const path=require('path');

	console.time('async');
		fs.readFile(path.join(__dirname,'../b.js'),(error,data)=>{
			if(error) throw error;
			console.log(data.toString('utf8'));
			console.log(data.toString());  不写默认是utf8
		})
		console.timeEnd('async');

		console.time('async2');
		try{
			var data2=fs.readFileSync(path.join(__dirname,'../b.js'))
			console.log(data2.toString('utf8'));
		}catch(error){
		   throw error;
		}
		console.timeEnd('async2');
为什么要有缓冲区
	创建长度为4个字节的缓冲区
	var buffer=new Buffer(4);   
		buffer.write('sssssss') 默认编码是utf8
		buffer.toString('utf8')   //ssss
	通过制定数组内容的方式创建
	var buffer=new Buffer([00,01]);
	通过制定编码的方式创建
	var buffer=new Buffer('hello','utf8');

在开发中使用LE
网络中传输数据使用BE
buf.writeInt8(12);  占用一个内存空间

var buf=new Buffer
buf.writeInt32LE(12);//buf.writeInt16LE(12);
var buf2=new Buffer(4);
buf2.writeInt32LE(10)
buf
<Buffer 0a 00 00 00>
buf2.writeInt32BE(10) //buf2.writeInt16BE(10)
buf
<Buffer 00 00 00 0a>
读取图片



const fs=require('fs');
const path=require('path');
const iconv=require('iconv-lite');

fs.readFile(path.join(__dirname,'./../lyaaaa.lrc'),(error,data)=>{
	console.log(iconv.decode(data,'gbk'));
});
win/r/n 
linux /n


文件写入操作
确保写入没有额外问题，一定使用绝对路径的方式

	1.异步文件写入
		fs.writeFile(file,data,[option],callback(err));
		注意：
		callback只有err对象
	2.同步文件写入
		fs.writeFileSync(file,data,[option]);
	3.流式文件写入
		fs.createWriteStream(path,[option]);