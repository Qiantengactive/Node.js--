NPM(Node Packaged Modules)简介
express框架   	Nodejs的项目框架
request模块	 	解决HTTP请求处理模块	
socket.io模块	使用socket协议处理长连接请求的问题
forever模块		实现项目的运营 键控
jade模块		处理node.js无法内嵌html问题
什么是包：

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
	注意：
		a.node知道的npm不是最新的，可用下面命令更新到最新
		  npm install npm -g   (自己安装自己)
		b.默认安装到当前系统Node所在目录下
		c.nvm方式安装的node需要重新配置NPM的全局目录
3.包的加载机制
id:包名的情况require('http');
	***先在系统核心(优先级最高)的模块中找 
	然后再到当前项目中node_modules目录中找
	注意： 以后不要创建和现有的包重名的包
nvm安装配置：
	默认全局node安装路径是
	XXX\nodejs\node_modules
	npm管理node
	将nvm中的node_modules提取出来 放于npm目录nvm/npm下node_modules
npm config ls
显示：
chche="...";   缓存提高下载速度
prefix="....";
registry="....";

npm config set prefix  c:\users\nodejs\npm  a
	设置npm配置到其他目录时，必须将该目录放到环境变量中，否则无法再全局使用
npm install -g 的包会安装到a处
NRM:
可以通过NRM:Node Registry Manager
	npm install -g nrm  全局安装nrm
	nrm ls				显示可以用的源
	nrm use XXX(cnpm) 	设置使用源
	nrm test			测试连接错误


	eg：nrm test
	C:\Users\QT>nrm test

		* npm ---- 2299ms
		  cnpm --- 1067ms
		  taobao - 1228ms
		  nj ----- Fetch Error
		  rednpm - 3488ms
		  npmMirror  7526ms
		  edunpm - Fetch Error

		  常用NPM命令  官方链接 https://docs.npmjs.com
		  npm  config 
		  npm  init  			 初始化package.json文件
		  npm  search
		  npm  info   包的id     介绍信息
		  npm  install
		  npm  uninstall
		  npm  list				 测试用;打印当前项目依赖项  可以查看缺少那个项目依赖
		  npm  li --depth 0
		  npm  outdated          包过期；包更新没
		  npm  update     
		  npm  run               运行脚本
		  npm  cache             操作缓存
		  		npm cache ls     打印缓存
				npm cache clean  清理缓存
		  npm  install marked    安装marked
npm 
package.json
dependencied:{}    //生产环境依赖
devDependencies{   //开发环境依赖
	'':''
	'':''
	'':''
}
		  browsersync
		  npm install browser-sync   安装会报错需要安装python(2.7版本)  c++==> vs 2010
		  配置python环境 ruby环境以后需要
		  平行依赖 
		  npm  install fs-extra
