Session模块实现

客户端请求Session==>服务端检查Session对应的Session id==》创建Session id
													 ==》Cookie中读取Session id
1.start        启动Session管理
2.newSession   创建新的Session id
3.cleanSession 清除Session数据

1.start
	var  start=function (res,req) {
			var conn={response:res,request:req};
			var cookies={};

			if(typeof conn.request.headers.cookies!=="undefined"){
				//判断是否存在cookie
				conn.request.headers.cookies.split(';').forEach(function(cookie){
					var parts=cookie.split('=');
					cookies[parts[0].trim()]=(parts[1] || "").trim();
				});
			}else{
				cookies.SESSID=0;
			}
			// get current sessid
			var SESSID=cookies.SESSID;
			if(typeof sessions[SESSID]!=="undefined"){
				// 判断是否存在session
				session=session[SESSID];
				if(session.expires< Date()){
					delete sessions[SESSID];
					return newSession(conn.request);
				}else{
					var dt=new Date();
					dt.setMinutes(dt.getMinutes()+30);

					session.expires=dt;
					return sessions[SESSID];
				}
			}else{
				return newSession(conn.response);
			}
	}

	exports.start=start
2.newSession
	function newSession(res){
		var chars="0123456789ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwxyz";
		var SESSID="";
		for (var i = 0; i <40;i++) {
				var rnum=Math.floor(Math.random()*chars.length);
				SESSID+=chars.substring(rnum,rnum+1);
		}
		if(typeof sessions[SESSID]!=="undefined"){
			return newSession(res);
		}
		var dt=new Date();
		dt.setMinutes(dt.getMinutes()+30);
		var session={
			SESSID:SESSID,
			expires:dt
		};
		sessions[SESSID]=session;

		response.setHeader('Set-Cookie','SESSID='+SESSID);
		return session;
	}
3.cleanSession
	function cleanSessions(){
		for (sess in sessions){
			if(sess.expires<Date()){
				delete sessions[sess.SESSID];
			}
		}
	}
