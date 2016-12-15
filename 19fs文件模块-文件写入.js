*
*
*	文件写入  注意：默认写入是覆盖
*
const fs=require('fs');
const path=require('path');

//fs.stringify 序列化
//fs.parse 反序列化

1.fs.writeFile(); 覆盖文件
	fs.writeFile(path.join(__dirname,'./aa.txt'),JSON.stringify({id:10}),function (err) {
		if(err) {
			console.log(err)
			//读取文件不存在报错
			//意外错误
			//文件权限问题
			//文件夹找不到
		}else{
			console.log("success");
		}
	})
2.fs.writeFileSync(); 覆盖文件
	try{

	}
	catch(error){

	}
3.fs.createWriteStream();
var createWrite=fs.createWriteStream(path.join(__dirname,'./aa.txt'));
setInterval(function(){
	createWrite.write('hello',function(){
		console.log('+1');
	});
},1000);

*
*
*	文件追加  
*
a.异步追加
	fs.appendFile(path.join(__dirname,'./aa.txt'),JSON.stringify({id:10}),function (err) {
			if(err) {
				console.log(err)
				//读取文件不存在报错
				//意外错误
				//文件权限问题
				//文件夹找不到
			}else{
				console.log("success");
			}
		})
b.同步追加  
tree 目录树
npm ls
fs.appendFileSync(file,data,[options]);


其他方法
fs.stats()
fs.lstat()
fs.fstat()

stats.isFile();
stats.isDirectory();
fs.readdir(.)
			// 打印当前目录所有文件
			const fs=require('fs');
			const path=require('path');
			require('./proto.js');
			// 获取当前有没有传入目录路径

			var target=path.join(__dirname,process.argv[2] || './');
			// 获取当前目录下所有文件  
			fs.readdir(target,function (err,files) {
				// files.forEach(function(file){
				// 	console.log(path.join(__dirname,file));
				// });
				files.forEach((file)=>{
					// console.log(path.join(target,file));
					fs.stat(path.join(target,file),(err,stats)=>{
						// stats.mtime
						// console.log(`${stats.mtime}\t${stats.size}\t${file}`);
						console.log(`${stats.mtime.format('yyyy/MM/dd HH:mm')}\t${stats.size}\t${file}`);
					})
				});
			});
*
*
*文件监视
*
*
fs.watchFile(filename.)
