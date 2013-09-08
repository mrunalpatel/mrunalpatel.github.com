$(document).ready(function(){

console.log("haha");
var path = window.location.pathname;

$('#NavMenu li').each(
    function(){
       var href = $(this).find('a')[0].pathname;
		if((path.indexOf(href)>-1 && href.length>1) || path==href)
		{
			$(this).addClass('active');
		}else
		{
		    if($(this).hasClass('active'))
			{
				$(this).removeClass('active');	
			}
		}
	}
);

}
);


