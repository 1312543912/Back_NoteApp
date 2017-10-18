var tool = {
	//判断是不是空的函数
	isNull:function(arr){
		for(var i = 0;i<arr.length;i++){
			if($(arr[i]).val()=='' || $(arr[i]).innerHTML==''){
				return false;
			}
		}
		return true;
	},
}

