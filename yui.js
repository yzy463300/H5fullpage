/**
 * [弹窗插件]
 * @Young  410636163@qq.com
 * @DateTime  2017-06-13T09:40:26+0800
 * @param     {[type]}                 $   [description]
 * @param     {[type]}                 win [description]
 * @return    {[type]}                     [description]
 */
;(function($,win){
	var yui = function(){
		this.text = '';
		this.init();
		this.callback = null;
	}
	yui.prototype.init = function(){
		var that = this;
		$('body').on('click','.yui_alert .confirm', function(event) {
			if (that.callback !== null) {
				that.callback();
			}
			$('.yui').hide();
		});
	}
	yui.prototype.loading = function(text) {
		var t = text ||  '请求中...' ;
		var ele = $('.yui_loading');
		var html = '';
		if (ele.length !== 0) {
			ele.find('.text').text(t);
			ele.show();
		}else{
			html = '<div class="yui_loading yui" style="width: 100%;height: 100%;position: absolute;z-index: 9999999999;left: 0;top: 0;"><div class="yui_main" style="position: absolute;left: 50%;top: 50%;transform:translate3d(-50%,-50%,0);-webkit-transform:translate3d(-50%,-50%,0); width: 40%;background-color: rgba(0,0,0,.8);text-align: center;border-radius: 12px;padding: 30px 0;"><img class="yui_img"  src="http://img.cntapp.com/h5/loading.gif" alt=""><p class="yui_text" style="font-size: 24px;color: #fff;padding-top: 20px;">'+t+'</p></div></div>'
			$('body').append(html);
		}
	};
	yui.prototype.alert = function(text,callback) {
		var t = text;
		var ele = $('.yui_alert');
		var html = '';
		this.callback = callback;
		if (ele.length !== 0) {
			ele.find('.text').text(t);
			ele.show();
		}else{
			html = '<div class="yui_alert yui" style="width: 100%;height: 100%;position: absolute;z-index: 99999999999;left: 0;top: 0;background-color:rgba(0,0,0,.5);"><div class="yui_main" style="border: 1px solid #ccc; position: absolute;left: 50%;top: 50%;transform:translate3d(-50%,-50%,0);-webkit-transform:translate3d(-50%,-50%,0); width: 60%;background-color:#fff;text-align: center;border-radius: 12px;"><p class="text" style="font-size: 24px;padding: 60px 15px;">'+t+'</p><p class="confirm" style="cursor: pointer;border-top: 1px solid #ccc;font-size: 24px;;padding: 12px 0;vertical-align: middle;">确认</p></div></div>'
			$('body').append(html);
		}
	};
	yui.prototype.hide = function(){
		$('.yui').hide();
	}
	/**
	 * @param     {string}                 sour      弹出弹窗的按钮选择器
	 * @param     {string}                 target    弹窗的选择器
	 * @param     {string}                 targetBtn 弹窗的关闭按钮选择器
	 * @param     {Function}               callback  弹窗关闭后的回调函数
	 * @return    {[type]}                           [description]
	 */
	yui.prototype.showPop = function(sour,target,targetBtn,callback){
		var sour = $(sour);
		var target = $(target);
		var targetBtn = $(targetBtn);
		sour.on('click',function(event) {
			target.show();
		});
		targetBtn.on('click',function(event) {
			target.hide();
			if (callback !== undefined) callback();
		});
	}
	// 根据不同的屏幕重新设置弹窗大小
	yui.prototype.resetScreen = function(selector,rate1,rate2){
		var pageHeight = $(window).height();
		var rate = rate1/rate2;
		var scaleRate = (rate * pageHeight)/rate1;  
		$(selector).css('webkitTransform', 'scale('+scaleRate+')');
	}
	// 重新加载当前页面
	yui.prototype.reload = function(){
		var url = location.href;  
		if (location.href.match('&timestamp')) {
			location.href = url.replace(/(\\?|^|&|\#)name=([^&|^#]*)(&|$|#)/, "$1"+'timestamp'+"="+ ((new Date()).getTime()) +"$2");
		}else{
			location.href = location.href + '?timestamp='+((new Date()).getTime());
		}
	}
	win.yui = new yui();
})($,window);