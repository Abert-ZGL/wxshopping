
function GetCookie(name) {  
    var arg = name + "=";  
    var alen = arg.length;  
    var clen = document.cookie.length;  
    var i = 0;  
    while (i < clen) {  
        var j = i + alen;  
        if (document.cookie.substring(i, j) == arg) return getCookieVal(j);  
        i = document.cookie.indexOf(" ", i) + 1;  
        if (i == 0) break;  
    }  
    return null;  
}  
  
function getCookieVal(offset) {  
    var endstr = document.cookie.indexOf(";", offset);  
    if (endstr == -1) endstr = document.cookie.length;  
    return unescape(document.cookie.substring(offset, endstr));  
};
var token = GetCookie('loginCookie');
$(function() {
    // Side Bar Toggle
    $('.hide-sidebar').click(function() {
	  $('#sidebar').hide('fast', function() {
	  	$('#content').removeClass('span9');
	  	$('#content').addClass('span12');
	  	$('.hide-sidebar').hide();
	  	$('.show-sidebar').show();
	  });
	});

	$('.show-sidebar').click(function() {
		$('#content').removeClass('span12');
	   	$('#content').addClass('span9');
	   	$('.show-sidebar').hide();
	   	$('.hide-sidebar').show();
	  	$('#sidebar').show('fast');
	});
    if (!token) {
   	window.open("http://localhost:8001/admin/login", "_self"); 
//   	window.open("http://www.dsunyun.com:81/admin/login", "_self");
    } else {
    	console.log('已经登录')
    }
});