export default class {
	constructor(options,callback){
		if (!options.urls) {
			console.error('请传入需要预加载的资源');
		}
		this.UI = UI;
		this.initScene = null;
		this.width = options.width || 640;
		this.height = options.height || 1000;
		this.bgColor = options.bgColor || '#000';
		this.urls = options.urls;
		this.callback = callback;
	}
	//场景初始化
	init(){
		Laya.init(this.width,this.height);
		Laya.stage.scaleMode = Laya.stage.SCALE_NOBORDER;
		Laya.stage.alignH = Laya.stage.ALIGN_CENTER;
		Laya.stage.alignV = Laya.stage.ALIGN_MIDDLE;
		Laya.stage.bgColor = this.bgColor;
	}
	//预加载资源
	preload(){
		this.init();
		Laya.loader.load(this.urls,Laya.Handler.create(this,this.onLoaded),Laya.Handler.create(this, this.onLoading, null, false), Laya.Loader.TEXT);
	}
	onLoading(progress){
		console.log('加载进度： ' + progress);
	}
	onError(err){
		console.log('加载失败： ' + err);
	}
	//资源加载完成的回调函数
	onLoaded(texture){
		// Laya.class(initSence,'initSence',this.UI);
		// this.initScene = new initSence();
		// Laya.stage.addChild(this.initScene);
		this.callback();
	}
}