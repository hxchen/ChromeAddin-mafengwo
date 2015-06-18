console.log("蚂蜂窝自动捡粽子，实时监控ing");
$(document).ready(function(){
	var sites = [
	             'http://www.mafengwo.cn/',
	             'http://www.mafengwo.cn/activity/zongzi2015.php?fromhead',
	             'http://www.mafengwo.cn/gonglve/',
	             'http://www.mafengwo.cn/mdd/',
	             'http://www.mafengwo.cn/wenda/',
	             'http://www.mafengwo.cn/sales/'
	             ]
	function GetRandomNum(Min,Max){   
		var Range = Max - Min;   
		var Rand = Math.random();   
		return(Min + Math.round(Rand * Range));   
	}  
	function killZongzi(){
		var number = GetRandomNum(1,5);
		location.href = sites[number];
		$(".pickZongzi").each(function(){
		    $(this).click();
		});
		console.log('杀死粽子！');
	}
	setTimeout(killZongzi, 2500);
});
