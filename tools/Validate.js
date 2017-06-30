/**
	var Validate = new Validate({
		'#username':'请输入姓名',
		'#phone' :'请输入正确的手机号',
	})

	if(Validate.check()){
		#ajax...
	}

*/
;(function($,window){
	var Validate = function(options){
		this.options = options;
		this.checkNum = 0;
		this.checkSuccess = 0;
		this.map = [];
		for(x in this.options){
			this.map.push(x);
		}
	}
	Validate.prototype = {
		init : function(){

		},
		check : function(){
			var len = this.map.length;
			for (var i = 0; i < len; i++) {
				var obj = this.map[i];
				var message = this.options[obj];
				if (obj.indexOf('username') > -1) {
					if (!$(obj).val()) {
						alert(message);
						return false
					}
				}
				if (obj.indexOf('phone') > -1) {
					if (!$(obj).val() || !(/^1[34578]\d{9}$/.test($(obj).val()))) {
						alert(message);
						return false
					}
				}
				if (obj.indexOf('address') > -1) {
					if (!$(obj).val()) {
						alert(message);
						return false
					}
				}
				if (obj.indexOf('company') > -1) {
					if (!$(obj).val()) {
						alert(message);
						return false
					}
				}
				if (obj.indexOf('code') > -1) {
					if (!$(obj).val()) {
						alert(message);
						return false
					}
				}
				if (i == len-1) {
					return true;
				}
			}
		},
	}
	window.Validate = Validate;
})(jQuery,window);

