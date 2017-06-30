export default class Url{
	constructor(url){
		if (url == 'undefined') console.error('请传入url');
		this.url = url;
	}
	init(){

	}
	//获取参数
	getParam(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		return r?decodeURIComponent(r[2]):null;
	}
	// 设置和修改url中的参数
	changeParam(url=undefined,name,value){
		var url = url || this.url;
		var newUrl = '';
		var reg = new RegExp("(^|)" + name + "=([^&*])(|$)");
		var tmp = name + "=" + value;
		if (url.match(reg) != null) {
			newUrl = url.replace(eval(reg),tmp);
		}else{
			 if(url.match("[\?]")){
				 newUrl= url + "&" + tmp;
			 }else{
				 newUrl= url + "?" + tmp;
			 }
		}
		return newUrl;
	}
}