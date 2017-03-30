$(function(){
	// 绑定点击事件
	addNavClickEvent();
	// 绑定点击事件
	addIconBtnClickEvent();
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

// 绑定点击事件
function addIconBtnClickEvent(){
	$(".cb_list").on("click",function(){
		// 调用本地exe文件
		window.location.href = "tryDebug://";
	})
}