1.解决文件上传问题
模块安装：
npm install formidable
如何使用：
a.require模块 
b.new form对象
c.

var formidable=require('formidable');
var form=new formidable.IncomingForm();
form.encoding='utf-8'
form.parse(request,function (err,fields,files) {
	//fields:为POST数据
	//files:为文件对象
	console.log(fields);
	console.log(files);
})