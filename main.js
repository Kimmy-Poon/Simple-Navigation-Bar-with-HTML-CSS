$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$(".nav > div").mouseover(function() {
    $(this).animateCss('tada');
});

$(".nav > div").click(function() {
	$(".nav > div").css('color', '#444');
	$(".nav > div").css('border-left', '0');
	$(".nav > div").css('border-right', '0');
	
    $(this).css('color', '#ff0000');
    $(this).css('border-left', '1px solid #ff0000');
    $(this).css('border-right', '1px solid #ff0000');
});