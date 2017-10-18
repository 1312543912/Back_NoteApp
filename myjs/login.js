var loginObj = {
	loginIndex:function(cookietool,cb){
		$.ajax({
			url:"http://txspring.cn:8010/getUser",
			data:{"user":$('#username').val(),"password":$('#userpassword').val()},
			type:"POST",
			dataType:"json",
		    success:function(data){	    	
		    	loginObj.successLogin(data);
		    	cb(cookietool);
		    },
		    error:function(error,type,throwError){
		    	alert('登陆发生错误，请重新尝试!');		 
		    	cb();
		    }
		});
	},
	successLogin:function(data){
		   if(data.type == "0"){
		   	alert("用户名或者密码错误！");
		   }
		   else{
		   	 cookietool.setCookie("userid",data.userid,2);
		   	 console.log(cookietool.getCookie("userid"));
		   	 console.log(document.cookie);
		   	 location.href = "writeNote.html";
		   }
	}
}
