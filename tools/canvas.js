/**
 * [description]
 * @AuthorHTL
 * @DateTime  2017-04-14T09:35:27+0800
 * @param     {[obj]}                 	 canvas [画布jquery对象]
 * @param     {[number]}                 width  [画布宽度]
 * @param     {[number]}                 height [画布高度]
 * @param     {[string]}                 src    [刮刮乐区域遮罩图片路径]
 * @return    {[type]}                        [description]
 */
export default class drawCanvas{
		constructor(canvas,width,height,mask,callback){
			this.count = 0;
			this.hasAlert = true;
			this.canvas = canvas;
			this.canvas[0].width = width;
			this.canvas[0].height = height;
			this.ctx = this.canvas[0].getContext('2d');
			this.callback = callback;
			this.init(mask);
		}
		init(mask){
			var that = this;
			this.img = new Image();
			this.img.src = mask;
			console.log(this.img);
			this.img.onload = function(){
				that.ctx.drawImage(that.img,0,0);
			}
			this.canvas.on('touchstart',function(event) {
				event.preventDefault();
				that.canvas.on('touchmove',function(event) {
						event.preventDefault();
						let x = event.originalEvent.touches[0].pageX - $(this).offset().left;
						let y = event.originalEvent.touches[0].pageY - $(this).offset().top;
						if (x >= 102 && y>= 30) {
							that.count++;
						}
						that.ctx.globalCompositeOperation = "destination-out";  
						that.ctx.beginPath();  
						that.ctx.arc(x,y,30,0,2*Math.PI,true);  
						that.ctx.fill(); 
						that.ctx.closePath(); 
						return false; 
					});
					that.canvas.on('touchend', function(event) {
						event.preventDefault();
						if (that.count >= 35 && that.hasAlert) {
							that.hasAlert = false;
							that.callback();
							console.log(12)
						}
					});
			});
		}
	
}