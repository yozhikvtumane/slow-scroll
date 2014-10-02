function __scroll_vertical__(hashTag,speed){
	$('html, body').animate({scrollTop: $(hashTag).offset().top}, speed);
}
