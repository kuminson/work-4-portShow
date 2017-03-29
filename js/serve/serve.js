$(function(){
	// 树初始化
	initTree();
	// 初始化表格
	initDatagrid();
	// 初始化下拉树
	initComboTree();
	// 初始化日期
	initDateBox();
})

var datacolumn = [[
	{
		"field":"",
		"checkbox":true
	},{
		"field":"ywbz",
		"title":"原文",
		"align":"left",
		"width":30
	},{
		"field":"wjxh",
		"title":"序号",
		"align":"left",
		"width":30
	},{
		"field":"wjbh",
		"title":"采购凭证号",
		"align":"left",
		"width":100
	},{
		"field":"wjtm",
		"title":"题名",
		"align":"left",
		"width":350
	},{
		"field":"wjsj",
		"title":"技术完成日期",
		"align":"left",
		"width":100
	},{
		"field":"zrz",
		"title":"责任人",
		"align":"left",
		"width":100
	},{
		"field":"bgqx",
		"title":"保管期限",
		"align":"left",
		"width":100
	},{
		"field":"bzh",
		"title":"备注",
		"align":"left",
		"width":200
	}
]];


// 树初始化
function initTree(){
	$("#m_tree").tree({
		method: "get",
		url:rootUrl + "json/serve_tree_new.json"
	});
}

// 初始化表格
function initDatagrid(){
	$("#m_grid").datagrid({
		method: "get",
		url: rootUrl + "json/serve_grid_new.json",
		toolbar:"#m_tb",
		fitColumns: true,
		columns:datacolumn,
		resizeHandle: "both",
		striped: true,
		loadMsg: "请稍后...",
		pagination: true,
		rownumbers: true,
		pageNumber: 1,
		pageSize: 20,
		pageList: [20,40,60]
	});
}

// 初始化下拉树
function initComboTree(){
	$("#m_responsible").combotree({
		method: "get",
		url: rootUrl + "json/serve_comboTree.json",
		label:"责任人：",
		labelWidth:100,
		labelAlign:"right",
		width:250
	});
}

// 初始化日期
function initDateBox(){
	var cfg = {
		labelAlign:"right",
		currentText:"今天",
		closeText:"关闭",
		okText:"确定",
		formatter:function(date){
			var y = date.getFullYear();
            var m = date.getMonth()+1;
            var d = date.getDate();
            return y+'-'+(m<10?('0'+m):m)+'-'+(d<10?('0'+d):d);
		},
		parser:function(s){
            if (!s) return new Date();
            var ss = (s.split('-'));
            var y = parseInt(ss[0],10);
            var m = parseInt(ss[1],10);
            var d = parseInt(ss[2],10);
            if (!isNaN(y) && !isNaN(m) && !isNaN(d)){
                return new Date(y,m-1,d);
            } else {
                return new Date();
            }
        }
	}
	cfg.label = "技术完成日期：";
	cfg.labelWidth = 100;
	cfg.width = 250;
	$("#m_datastar").datebox(cfg);
	$("#m_datastar").datebox("setValue","2016-01-01");
	cfg.label = "至：";
	cfg.labelWidth = 60;
	cfg.width = 210;
	$("#m_dataover").datebox(cfg);
	$("#m_dataover").datebox("setValue","today");

}