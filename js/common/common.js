$(function(){
	// 弹性高度
	autoHeight($("#headermenu,#footer"));
});

var rootUrl = "";

// 弹性高度
function autoHeight($obj){
	$(window).resize(function(){
		var $main = $("#main");
		var ah = $(window).height();
		for(var i=0; i<$obj.length; i++){
			var $box = $obj.eq(i);
			ah -= $box.height()
			      + parseInt($box.css("margin-top"),10)
			      + parseInt($box.css("margin-bottom"),10)
			      + parseInt($box.css("padding-top"),10)
			      + parseInt($box.css("padding-bottom"),10)
			      + parseInt($box.css("border-top-width"),10)
			      + parseInt($box.css("border-bottom-width"),10);
		}
		$("#main").height(ah);
	});
	$(window).resize();
}