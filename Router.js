;(function(){
	function Router(){
		this.routes = {};
		this.currentUrl = '';
		this.init();
	}
	Router.prototype = {
		init : function(){
			window.addEventListener('load',this.refresh.bind(this),false);
			window.addEventListener('hashchange',this.refresh.bind(this),false);
		},
		route : function(path,callback){
			this.routes[path] = callback || function(){};
		},
		refresh : function(){
			this.currentUrl = location.hash.slice(1) || '/';
			this.routes[this.currentUrl]();
		}
	}
	window.Router = new Router();
})()