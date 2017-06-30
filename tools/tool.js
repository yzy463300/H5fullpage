// 获得当前的日期 格式: 2017-6-1
function getTodayTime(){
	var myDate = new Date();
	var year = myDate.getFullYear();
	var month = myDate.getMonth() + 1;
	var day = myDate.getDate();
	var time = year+'-'+month+'-'+day;
	return time
}
//设置和修改url中的参数
function ChangeParam(url,name,value){
	var url=url;
	var newUrl="";
	var reg = new RegExp("(^|)"+ name +"=([^&]*)(|$)");
	var tmp = name + "=" + value;
	if(url.match(reg) != null){
		newUrl= url.replace(eval(reg),tmp);
	}else{
		 if(url.match("[\?]")){
			 newUrl= url + "&" + tmp;
		 }else{
			 newUrl= url + "?" + tmp;
		 }
	}
	return newUrl;
 }
// 获取url中的参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	return r?decodeURIComponent(r[2]):null;
}

function setCookie(c_name,value,expiredays){
	var exdate = new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
function getCookie(c_name){
	if (document.cookie.length>0){
	  c_start=document.cookie.indexOf(c_name + "=")
	 	if (c_start!=-1) { 
		    c_start=c_start + c_name.length+1 
		    c_end=document.cookie.indexOf(";",c_start)
		    if (c_end==-1) c_end=document.cookie.length
		   	return unescape(document.cookie.substring(c_start,c_end))
	   	 } 
	}
	return ""
}
function checkCookie(){
	var username=getCookie('username');
	if (username === qqusername){
		return true;
	}
}
//读取上传图片的地址
function getObjectURL(file) {
	var url = null;
	if(window.createObjectURL != undefined) { // basic gun_5  put
		url = window.createObjectURL(file);
	} else if(window.URL != undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file);
	} else if(window.webkitURL != undefined) { // webkit or chrome put5
		url = window.webkitURL.createObjectURL(file);
	};
	return url;
};

//根据不同的屏幕重新设置弹窗的大小
function resetScreen(selector,rate1,rate2){
	var pageHeight = $(window).height();
	var rate = rate1/rate2;
	var scaleRate = (rate * pageHeight)/rate1;  
	$(selector).css('webkitTransform', 'scale('+scaleRate+')');
}
// 重新加载当前页面
function reload(){
	var url = location.href;  
	if (location.href.match('&timestamp')) {
		location.href =  url.replace(/(\\?|^|&|\#)name=([^&|^#]*)(&|$|#)/, "$1"+'timestamp'+"="+ ((new Date()).getTime()) +"$2");
	}else{
		location.href = location.href + '?timestamp='+((new Date()).getTime());
	}
}
