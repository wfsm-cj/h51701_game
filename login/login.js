$(document).ready(function(){
	tel.onblur=function(){
		var tel=document.getElementById("tel");
		//表单的value 不写默认为""
		if(tel.value===""){
			$("#errorTel").text("请输入手机号码").show();
		}else{
			isTel(tel.value)
		}
	}
	//生成验证码
	code()
	//点击更换验证码   被禁用的表单元素不能被执行事件
	$("#code").on("click",function(){
		code();
	})
	
	
	// 鼠标失去焦点时比较验证码是否正确
	$("#inputCode").on("blur",function(){
		if($("#inputCode").val()===""){
			$("#errorCode").text("验证码为空").show();
		}else{
			if(check()){
				$("#errorCode").hide();
				code();
			}else{
				$("#errorCode").text("验证码错误").show();
			}
		}
	})
	
	
	
	
	
})

//验证电话号码是否正确
	function isTel(telValue){
		var reg=/^1[3,4,5,7,8]\d{9}$/;
		
		
		var flag=reg.test(telValue);
		if(!flag){
			$("#errorTel").text("手机号码格式错误").show();
			tel.parentNode.id="warn";
		}else{
			$("#errorTel").hide()
			tel.parentNode.id="";
		}
	}
	
	
	//生成验证码  默认为五位
	function code(len){
		//26+26+10   48-57阿拉伯数字  65-90为26个大写英文字母  97-122为26小写字母
		len=len || 5;
		var str="";
		for(var i=0;i<len;i++){
			var index=Math.floor(Math.random()*75)+48;
			while(index>57 && index<65 || index>90 && index<97){
				index=Math.floor(Math.random()*75)+48;
			}
			str+=String.fromCharCode(index);
		}
		$("#code").text(str)
	}
	
	
	function check(){
		var code=$("#code").text();
		var inputCode=$("#inputCode").val();
		//str.toUpperCase()
		if(code.toUpperCase()===inputCode.toUpperCase()){
			return true;
			
		}else{

			return false;
		}
		

//	console.log(code.toUpperCase())
	}
