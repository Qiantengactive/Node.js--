1.get请求
             		         1.string=request.url
                                      |
	         			              |
	         			              |
	                     --------------------------
	http://localhost:8888/start?foo=bar&hello=world



                      		  2.url.parse(string).query
                                          |
      3.url.parse(string).pathname   |
                       |                  |
                       |                  |
                     ------ --------------------------
http://localhost:8888/test?"name=danhuang&book=node.js"
                              	  ---      		 -----
                              	   |       		   |
                              	   |       		   |
             	 querystring(string)["name"] 	   |
                                         		   |
                      		 		  querystring(string)["book"]

4.var param=querystring.parse('name=danhuang&book=node.js')
==》返回json对象{name:'danhuang',book:'node.js'}
param.name
param['name'];


1.__dirname