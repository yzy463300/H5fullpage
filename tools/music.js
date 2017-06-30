/**
*option:
* audio::string
* img::string
* useArrow:: bool
**/
export default(option)=>{
	var autoplay =  'autoplay="autoplay"' ;
	var loopPlay =  'loop="loop"' ;
	var src = option.audio;
	if (option.img) {
		var musicImg = 'url(' + option.img + ')';
	}
	$('body').append('<div class="bgm playing"><audio id="audios" src='+src+' '+autoplay+' '+loopPlay+'></audio></div>');
	$('.bgm').css({
		width: '48px',
		height: '48px',
		backgroundImage:  musicImg || 'url(http://img.cntapp.com/h5/color.png)',
		position:'fixed',
		right:'30px',
		top:'30px',
		zIndex:'99',
		backgroundPosition:'-48px 0',
		'-webkit-animation':'rotate 3s linear infinite '
	});
	$('.bgm').click(function(event) {
		event.stopPropagation();
		if ($(this).hasClass('playing')) {
			$(this).removeClass('playing');
			$(this).css('-webkit-animation-play-state', 'paused');
			$(this).css('backgroundPosition', '0 0');
			$('#audios')[0].pause();
		}else{
			$(this).addClass('playing');
			$(this).css('backgroundPosition', '-48px 0');
			$(this).css('-webkit-animation', 'rotate 3s linear infinite');
			$('#audios')[0].play();
		}
	});
	document.addEventListener("WeixinJSBridgeReady", function(){
	    $('#audios')[0].play();
	 }, false);
	if (option.useArrow) {
		$('body').append('<div class="arrow"></div>');
		$('.arrow').css({
			position:'fixed',
			left:'0',
			bottom:'30px',
			zIndex:'998',
			width: '100%',
			height: '40px',
			background:'url(http://img.cntapp.com/h5/arrow_down.png) no-repeat center',
			'-webkit-animation' : '1s arrow_ ease infinite'
		});
	}
}