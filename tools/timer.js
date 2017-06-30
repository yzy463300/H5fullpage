/**
 * [定时器类]
 * @YZY
 * @DateTime  2017-04-18T10:48:07+0800
 * @param     {[object]}                 el       [显示时间的jquery对象]
 * @param     {[number]}                 time     [设置倒计时的时间]
 * @param     {Function}                 callback [回调函数]
 * @return    {[type]}                          [description]
 */
export default class Timer{
	constructor(el,times,callback){
		this.el = typeof el == 'string' ? $(el) : el;
		this.times = times;
		this.timer = null;
		this.callback = callback;
		this.interval();
	}
	interval(){//设置定时器
		this.el.css({
			backgroundColor: '#ccc',
			color: '#000',
		});
		this.el.text(`已发送(${--this.times})`);
		this.timer = setInterval(()=>{
			if (--this.times <= 0 ) {
				this.pause();
				this.callback();
			}else{
				if (this.el) {
					this.el.text(`已发送(${this.times})`);
				}
			}
		},1000);
	}
	pause(){
		clearInterval(this.timer);
	}
	play(){
		this.interval();
	}
}