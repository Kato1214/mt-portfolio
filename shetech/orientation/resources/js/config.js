/* お問い合わせアコーディオン */
$(function() {
	$('#contact_btn').click(function(e) {
		$(this).next('form').slideToggle();
	});
});




/* バナー固定表示 */
$(function() {
	$(window).scroll(function(){
		var scr_count = $(document).scrollTop();
		if($('#last_section').length){
			var obj_t_pos = $('#last_section').offset().top;
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
		
		if($('#last_section').length){
			if(scr_count > obj_t_pos - $(window).height()){
				$('#bottom_banner').css('bottom','-50%');
			}else{
				$('#bottom_banner').css('bottom',0);
			}
		}
	});
});
