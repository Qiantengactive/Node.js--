NPM(Node Packaged Modules)简介
express框架   	Nodejs的项目框架
request模块	 	解决HTTP请求处理模块	
socket.io模块	使用socket协议处理长连接请求的问题
forever模块		实现项目的运营 键控
jade模块		处理node.js无法内嵌html问题
1.NPM 概述
	a.NPM(Node Packed Modules)是Node.js的包管理器
	b.大部分模块，都是开发者提供的。
	c.开发者通过NPM提交个人Node.js模块，其他开发者可以使用NPM下载NPM模块包，并将其应用到项目中
2.配置
		a.node自带
		b.npm-v查看版本信息
		  npm-help查看NPM的指令
		  npm install安装模块  会在本目录下新增一个node_modules文件夹，并会在node_modeule文件夹中添加NPM模块
		  npm uninstall卸载模块
		  npm init配置package.json
		c.cnpm安装
	      npm install -g cnpm --registry=https://registry.npm.taobao.org
	      
