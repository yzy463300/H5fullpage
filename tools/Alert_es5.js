;(function(){
	/**
	 * [layer description]
	 * @Young 410636163@qq.com
	 * @DateTime  2017-05-31T11:11:27+0800
	 * @param     {[type]}                 sour      [弹出弹窗按钮的选择器]
	 * @param     {[type]}                 target    [弹窗的选择器]
	 * @param     {[type]}                 targetBtn [弹窗关闭按钮的选择器]
	 * @param     {Function}               callback  [弹窗关闭后的回调函数]
	 * @return    {[type]}                           [description]
	 */
	var layer = function(sour,target,targetBtn,callback){
		this.sour = $(sour);
		this.target = $(target);
		this.targetBtn = $(targetBtn);
		this.callback = callback;
		this.init();
	}
	layer.prototype.init = function(){
		var that = this;
		this.sour.on('click', function(event) {
			that.target.show();
		});
		this.targetBtn.on('click', function(event) {
			that.target.hide();
			if (that.callback !== undefined) that.callback();
		});
	}
	window.layer = layer;
	})();