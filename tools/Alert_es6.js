export default class Alert{
	/**
	 * [constructor description]
	 * @AuthorHTL
	 * @DateTime  2017-04-17T15:38:54+0800
	 * @param     {[object]}                 sour   [接受点击时间的按钮]
	 * @param     {[object]}                 target [显示出来的弹窗]
	 * @param     {[object]}                 close  [弹窗关闭按钮]
	 * @return    {[type]}                        [description]
	 */
	constructor(sour,target,close){
		this.sour = sour;
		this.target = target;
		this.close = close;
		this.showCallback = null;
		this.hideCallback = null;
		this.hasShow = false;//弹窗是否已显示
		this.init();
	}
	init(){//初始化，给参数绑定事件监听
		let that = this;
		if (this.sour instanceof jQuery) {
			this.sour.on('click',function(){
				if (!that.hasShow) {
					that.hasShow = true;
					that.showEvent();
					that.target.show();
				}
       		});
		}else{
			this.sour.addEventListener('click',function(){
				if (!that.hasShow) {
					that.hasShow = true;
					that.showEvent();
					that.target.display.style = 'block';
				}
			});
		}
        if (this.close instanceof jQuery) {
        	this.close.on('click',function(){
        		if (that.hasShow) {
        			that.hasShow = false;
        			that.hideEvent();
        			that.target.hide();
        		}
        	});	
        }else{
        	this.close.addEventListener('click',function(){
        		if (that.hasShow) {
        			that.hasShow = false;
        			that.hideEvent();
        			that.target.display.style = 'none';
        		}
        	});	
        }
	}
	showListener(func){//弹窗显示时的回调函数
		this.showCallback = func;
	}
	hideListener(func){//弹窗隐藏式的回调函数
		this.hideCallback = func;
	}
	showEvent(){//弹窗显示时的回调函数
		if (this.showCallback !== null) {
			this.showCallback();
		}
	}
	hideEvent(){//弹窗关闭时的回调函数
		if (this.hideCallback !== null) {
			this.hideCallback();
		}
	}
}
