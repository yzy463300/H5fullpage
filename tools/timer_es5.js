function Timer(el,times,callback){
	this.el = typeof el == 'string' ? $(el) : el;
	this.times = times;
	this.timer = null;
	this.callback = callback;
	this.interval();
}
Timer.prototype = {
	interval:function(){
		var that = this;
		this.el.css({
			backgroundColor: '#ccc',
			color: '#000',
		});
		this.el.text('已发送('+(--this.times)+'s)');
		this.timer = setInterval(function(){
			if (--that.times <= 0 ) {
				that.pause();
				that.callback();
			}else{
				if (that.el) {
					that.el.text('已发送('+that.times+'s)');
				}
			}
		},1000);
	},
	pause:function(){
		clearInterval(timer);
	},
	play(){
		this.interval();
	}
}