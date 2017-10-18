var writeObj = {
	clickWriteNote: function() {
		$('#menu>li').click(function() {

		});
	},
	writeNoteFun: function() {
		$('#xieWenZhng').attr("class", "show");
	},
	//选中类别
	SelecteClass: function() {
		$('#class>tr>td').click(function() {
			var tds = $('#class td');
			for(var i = 0; i < tds.length; i++) {
				$($(tds[i]).children()[1]).attr("class", "hide");
			}
			$($(this).children()[1]).attr("class", "selectedImg");
			selectClass = this.getAttribute("name");
		})
	},
	classSubmit: function() {
		$('#classSubmit').click(function() {
			$('#myModal').modal('hide');
			writeObj.writeNoteFun();
			$(".articleTitle").text(selectClass);
		});
	},
	//进入页面和编辑切换
	wirtingNote:function(){
		$("#startNow").click(function(){
			$("#writeNow").fadeOut(1000);
			$("#writing").fadeIn(2000);
		});
	},
	//提交按钮
	subMitAll: function() {
		var url = "http://txspring.cn:8010/sendDetailPages";
		$("#submitButton").click(function() {
			$.ajax({
				type: "POST",
				data: {
					content: editor.txt.text(),
					title: $("#inputPassword").val(),
					userid: cookietool.getCookie("userid"),
					classid: writeObj.returnClassid(selectClass)
				},
				url: url,
				dataTpe:"json",
				timeout:10000,
				
				success: function(data) {
					console.log(data);
					console.log(JSON.parse(data).type);
					if(JSON.parse(data).type=="1"){
						$("#showMessage").html('<div id="myAlert" class="alert alert-success alert-dismissible fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>恭喜用户，发表文章成功！</strong></div>');
						$('#xieWenZhng').attr("class", "hide");
					}
				},
				error: function(xhr, type, throwError) {
						$("#showMessage").html('<div id="myAlert" class="alert alert-danger alert-dismissible fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>抱歉，您发表文章失败，请查看错误信息</strong>（F12）哈哈哈哈哈</div>');
					console.log("error");
					console.log(type);
				}
			});
		});
	},
	returnClassid:function(name){
		if(name=="mysql"){
			return "001";
		}
		else if(name=="css"){
			return "002";
		}
		else if(name=="javascript"){
			return "003";
		}
		else if(name=="mui"){
			return "004";
		}
		else if(name=="project"){
			return "005";
		}
		else{
			//nodejs
			return "006";
		}
	}
}