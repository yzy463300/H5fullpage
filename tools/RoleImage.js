/**
 * 图片轮换抽奖类
 * @Young
 * @DateTime  2017-05-17T09:35:54+0800
 * @param     {[string]}                 obj    [存放图片的jquery选择器]
 * @param     {[number]}                 counts 图片需轮换的次数
 */

	function RoleImage(selector,counts,callback){
		this.imgLis = $(selector);
		this.pools = [];
		this.pools2 = [];
		this.count = 0;
		this.time = 100;
		this.COUNT = counts;
		this.callback = callback;
		this.init();
	}
	RoleImage.prototype.init = function(){
		var that = this;
		this.imgLis.last().clone().prependTo($('.bg > ul'));
		this.imgLis.each(function(index, el) {
			that.pools.unshift($(this));
		});
		this.role();
	}
	RoleImage.prototype.role = function(){
		var that = this;
		if(!this.pools.length) return;
		if (this.pools.length <= 1) {
			this.pools2.push(this.pools.shift());
			this.pools = this.pools2;
			this.pools2 = [];
			this.imgLis.css('opacity', 1);
		}
		var el = this.pools.shift();
		this.pools2.push(el);
		if (++this.count <= this.COUNT) {
			el.prev().addClass('active').siblings().removeClass('active');
			if (isAndroid) {
				setTimeout(function(){
					el.css('opacity', 0);
					that.role();
				},100)
			}else{
				el.transition({ 'opacity': 0 },100,'linear',function(){that.role()});
			}
		}else{
			this.callback();
		}
	}

//example
var ab = new RoleImage('.bg > ul li',30);