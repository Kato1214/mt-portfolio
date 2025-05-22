/* バナー固定表示 */
$(function() {
	$(window).scroll(function(){
		var scr_count = $(document).scrollTop();
		if($('#cont14').length){
			var obj_t_pos = $('#cont14').offset().top;
		}
		
		if(scr_count>300){
			if($('.only_smart').css('display')=="none"){
				$('#topbtn').css('bottom','250px');
			}else{
				$('#topbtn').css('bottom','150px');
			}
		}else{
			$('#topbtn').css('bottom','-150px');
		}
		
		if($('#cont14').length){
			if(scr_count > obj_t_pos - $(window).height()){
				$('#bottom_banner').css('bottom','-50%');
			}else{
				$('#bottom_banner').css('bottom',0);
			}
		}
	});
});
