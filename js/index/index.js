$(function(){
	// 绑定点击事件
	addNavClickEvent();
});



// 绑定点击事件
function addNavClickEvent(){
	$(".an_list").on("click",function(){
		$(".an_list").removeClass("active");
		$(this).addClass("active");
		var type = $(this).attr("yg_type");
		$(".cb_list").hide();
		if(type == "all"){
			$(".cb_list").show("normal");
			return false;
		}
		$(".cb_list."+type).show("normal");
	});
}