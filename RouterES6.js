export default class Router{
	constructor(){
		this.routes = {};
		this.currentUrl = '';
		this.init();
	}
	init(){
		window.addEventListener('load',this.refresh.bind(this),false);
		window.addEventListener('hashchange',this.refresh.bind(this),false);
	}
	route(path,callback){
		this.routes[path] = callback || function(){};
	}
	refresh(){
		this.currentUrl = location.hash.slice(1) || '/';
		this.routes[this.currentUrl](); 
	}
}
