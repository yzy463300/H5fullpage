/**
 * 转盘抽奖类
 * @yzy
 * @DateTime  2017-05-05T14:34:16+0800
 * @param     {[type]}                 num [奖品数量]
 * @return    {[type]}                     [description]
 */
// export default class {
// 	constructor(select='',options={'num':0,'prizeList':[],'targetShow':'','loseID':undefined},callback=null){
// 		this.loseID = options.loseID;
// 		this.targetShow = options.targetShow;//显示抽奖结果的jquery选择器
// 		this.prizeList = options.prizeList;//存放所有奖品的数组
// 		this.num = options.num;//奖品数量
// 		this.select = select;//需要转动的jquery选择器
// 		this.unit = 360/this.num;//把圓盤分成均勻的等分
// 		this.init();
// 	}
// 	init(){
// 		$(this.select).css('-webkit-transition', '4s ');
// 	}
// 	draw(type){
// 		var $type = type || Math.floor(Math.random()*this.num);//抽到的奖品类型，索引从0开始
// 		console.log($type);
// 		$(this.select).css('webkitTransform', `rotate(${-3600-this.unit*$type}deg)`);
// 		$(this.select)[0].addEventListener('webkitTransitionEnd',()=>{
// 			console.log(112213);
// 			console.log(this.prizeList[$type]);
// 			$(this.targetShow).text(this.prizeList[$type]);
// 			if ($type !== this.loseID) {
// 				$('.win').show();
// 			}else{
// 				$('.lose').hide();
// 			}
// 		})
// 	}
// }

function drawWheel(select,options){
	this.select = typeof el == 'string' ? $(select) : select;
	this.loseID = options.loseID;
	this.targetShow = options.targetShow;//显示抽奖结果的jquery选择器
	this.targetDetails = options.targetDetails;//显示抽奖结果的jquery选择器
	this.prizeList = options.prizeList;//存放所有奖品的数组
	this.prizeDetails = options.prizeDetails;//存放奖品详情的数组
	this.num = options.num;//大转盘分割的块数
	this.select = select;//需要转动的jquery选择器
	this.unit = 360/this.num;//把圓盤分成均勻的等分
	this.init();
}
drawWheel.prototype={
	init:function(){
		$(this.select).css('-webkit-transition', '4s ');
	},
	draw:function(type){
		var that = this;
		var $type = type || Math.floor(Math.random()*this.num);//抽到的奖品类型，索引从0开始
		var angle = -3600-this.unit*$type
		console.log(this.prizeList[$type])
		$(this.select).css('webkitTransform', 'rotate('+angle+'deg)');
		$(this.select)[0].addEventListener('webkitTransitionEnd',function(){
			$(that.targetShow).text(that.prizeList[$type]);
			$(that.targetDetails).text(that.prizeDetails[$type]);
			if ($type !== that.loseID[1]){
				$('.win').show();
			}else{
				$('.lose').show();
			}
		})
	}
}