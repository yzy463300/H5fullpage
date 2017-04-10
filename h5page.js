/*
*author: 410636163@qq.com
*H5全屏滚动插件
*
*/
;(function(){
	var opt = {
		pageShow:function(){},
		'useMusic':{
			'autoPlay':true,
			'loopPlay':true,
		}
	}
	var pageHeight = $(window).height();
	var dragStart = 0;//开始拖动时手指Y的位置
	var moveDistance = 0;//手指移动的距离
	var percentage = 0;//手指滑动的距离相对于屏幕高度的百分比

	var flag = true;//每屏是否切换完成
	var pageIndex = 0;//当前页面index
	var zIndex = 1;
	var page = $('.H5 .item');
	var len = page.length - 1;
	$('.H5').on({
		'touchstart':touchStart,
		'touchmove':touchMove,
		'touchend':touchEnd
	});
	function touchStart(e){
		dragStart = e.originalEvent.targetTouches[0].clientY;
		console.log('start: '+ dragStart);
	}
	function touchMove(e){
		moveDistance = e.originalEvent.targetTouches[0].clientY - dragStart;
		console.log('move: '+ moveDistance);
	}
	function touchEnd(e){
		$('.H5').off('tochmove');
		$('.H5').off('tochend');
		console.log('end: ' + moveDistance);
		percentage = moveDistance / pageHeight;
		if ( moveDistance < 0) {//up
			if (flag) {
				flag = false
				pageIndex++;
				if (pageIndex > len) {
					pageIndex = 0;
				}
				zIndex++;
				page.eq(pageIndex).css({'top': '100%','zIndex':zIndex,'-webkit-transform':'translate3d(0,0,0)'});
				page.eq(pageIndex).show();
				page.eq(pageIndex).transition({y : -pageHeight},800,function(){
					flag = true;
					if (pageIndex == 0) {
						page.eq(len).hide()
					}else{
						page.eq(pageIndex-1).hide();
					}
				})  
			}
		}else if (moveDistance > 0) {//down
			console.log(flag);
			if (flag) {
				flag = false;
				pageIndex--;
				if (pageIndex < 0) {
					pageIndex = len;
				}
				zIndex++;
				page.eq(pageIndex).css({'top': '-100%','zIndex':zIndex,'-webkit-transform':'translate3d(0,0,0)'});
				page.eq(pageIndex).show();
				page.eq(pageIndex).transition({y : pageHeight},800,function(){
					flag = true;
					console.log(pageIndex);
					if (pageIndex == len) {
						page.eq(0).hide()
					}else{
						page.eq(pageIndex+1).hide();
						if (pageIndex+1 == 3) {
							
						}
					}
				});
			}
		}
		showTime(pageIndex)
	}
	function initMuisc(opt,option){
		console.log(option);
		if (opt.useMusic) {
			var autoplay = opt.useMusic.autoPlay ? 'autoplay="autoplay"' : '';
			var loopPlay = opt.useMusic.loopPlay ? 'loop="loop"' : '';
			var src = option.audio;
		}
		if (option.img) {
			var musicImg = 'url(' + option.img + ')';
		}
		$('body').append('<div class="bgm playing"><audio id="audio" src='+src+' '+autoplay+' '+loopPlay+'></audio></div>');
		$('.bgm').css({
			width: '48px',
			height: '48px',
			backgroundImage:  musicImg || 'url(http://img.cntapp.com/h5/dragon/assets/music.png)',
			position:'fixed',
			right:'30px',
			top:'30px',
			zIndex:'9999',
			backgroundPosition:'-48px 0'  
		});
		$('.bgm').click(function(event) {
			event.stopPropagation();
			if ($(this).hasClass('playing')) {
				$(this).removeClass('playing');
				$(this).css('backgroundPosition', '0 0');
				$('#audio')[0].pause();
			}else{
				$(this).addClass('playing');
				$(this).css('backgroundPosition', '-48px 0');
				$('#audio')[0].play();
			}
		});
		document.addEventListener("WeixinJSBridgeReady", function(){
		    $('#audio')[0].play();
		 }, false);
	}
	function initDom(){//初始化dom，把该隐藏的隐藏掉
		$('.part').each(function(index, el) {
			$(this).addClass('hide')
		});
	}
	function showTime(index){//控制元素动画出现的时间
		console.log(index); 
		page.eq(index).find('.part').each(function(index, el) {
			$(this).attr('data-delay');
		});
	}
	// function initDom(){
	// 	return
	// 	$('.H5').swipe({
	// 		swipe:function(event,direction,distance,duration,fingerCount){
	// 			if (direction == 'up') {
	// 				console.log(flag);
	// 				if (flag) {
	// 					flag = false
	// 					pageIndex++;
	// 					if (pageIndex > len) {
	// 						pageIndex = 0;
	// 					}
	// 					zIndex++;
	// 					page.eq(pageIndex).css({'top': '100%','zIndex':zIndex,'-webkit-transform':'translate3d(0,0,0)'});
	// 					page.eq(pageIndex).show();
	// 					page.eq(pageIndex).transition({y : -pageHeight},800,function(){
	// 						flag = true;
	// 						console.log(pageIndex);
	// 						if (pageIndex == 0) {
	// 							page.eq(len).hide()
	// 						}else{
	// 							page.eq(pageIndex-1).hide();
	// 						}
	// 					})  
	// 				}
	// 			}else if (direction == 'down') {
	// 				console.log(flag);
	// 				if (flag) {
	// 					flag = false;
	// 					pageIndex--;
	// 					if (pageIndex < 0) {
	// 						pageIndex = len;
	// 					}
	// 					zIndex++;
	// 					page.eq(pageIndex).css({'top': '-100%','zIndex':zIndex,'-webkit-transform':'translate3d(0,0,0)'});
	// 					page.eq(pageIndex).show();
	// 					page.eq(pageIndex).transition({y : pageHeight},800,function(){
	// 						flag = true;
	// 						console.log(pageIndex);
	// 						if (pageIndex == len) {
	// 							page.eq(0).hide()
	// 						}else{
	// 							page.eq(pageIndex+1).hide();
	// 							if (pageIndex+1 == 3) {
									
	// 							}
	// 						}
	// 					});
	// 				}
	// 			}
	// 		}
	// 	});
	// }
	window.h5 = {
		init:function(option){
			initMuisc(opt,option);
			initDom();
		}
	}
})()