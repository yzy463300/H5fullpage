;(function() {
	var Laya_init = function(urls, options, callback) {
		if (!urls) {
			console.error('请传入需要预加载的资源');
		}
		this.width = options.width || 640;
		this.height = options.height || 1000;
		this.bgColor = options.bgColor || '#000';
		this.urls = urls;
		this.callback = callback;
		this.preload();
	}
	Laya_init.prototype = {
		init: function() {
			Laya.init(this.width, this.height);
			Laya.stage.scaleMode = Laya.stage.SCALE_NOBORDER;
			Laya.stage.alignH = Laya.stage.ALIGN_CENTER;
			Laya.stage.alignV = Laya.stage.ALIGN_MIDDLE;
			Laya.stage.bgColor = this.bgColor;
		},
		preload: function() {
			this.init();
			Laya.loader.load(this.urls, Laya.Handler.create(this, this.onLoaded), Laya.Handler.create(this, this.onLoading, null, false), Laya.Loader.TEXT);
		},
		onLoading : function(progress) {
			console.log('加载进度： ' + progress);
		},
		onError : function(err) {
			console.log('加载失败： ' + err);
		},
		onLoaded: function() {
			this.callback();
		}
	}
	window.Laya_init = Laya_init;
})();