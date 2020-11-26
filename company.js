var webAppName ="";
var pripid ="";
var type = "";
var entName ="";
function setParam(webAppName_p,pripid_p){
	webAppName=webAppName_p;
	pripid=pripid_p;
	defaultLoad();//调用默认加载方法
}

//默认加载(需要修改)
function defaultLoad(){
	hiddenAll();
	$("#content_big_1").css("display","block");
	$("#cc_1_1").css("display","block");
	loadData("s_big_1_1");
}

//通过模块ID，加载数据
function loadData(id){
	if(id=="s_big_1_1"){//1.登记信息
		$("#"+id).load(webAppName+"/com/base/cid/"+pripid);
	}
	if(id=="s_big_1_2"){//企业简介
		$("#"+id).load(webAppName+"/com/about/cid/"+pripid);
	}
	if(id=="s_big_1_3"){//行业评价信息
		$("#"+id).load(webAppName+"/com/icomment/cid/"+pripid);
	}
	if(id=="s_big_1_4"){//媒体评价信息
		$("#"+id).load(webAppName+"/com/mcomment/cid/"+pripid);
	}
	if(id=="s_big_1_5"){//金融信贷信息
		$("#"+id).load(webAppName+"/com/credit/cid/"+pripid);
	}
	if(id=="s_big_1_6"){//企业运营信息
		$("#"+id).load(webAppName+"/com/operate/cid/"+pripid);
	}
	if(id=="s_big_1_7"){//企业运营信息
		$("#"+id).load(webAppName+"/com/check/cid/"+pripid);
	}
	if(id=="s_big_2_1"){//2.企业年报
		$("#"+id).load(webAppName+"/com/annual/cid/"+pripid);
	}
	if(id=="s_big_2_2"){//股东及出资信息
		$("#"+id).load(webAppName+"/com/capital/cid/"+pripid);
	}
	if(id=="s_big_2_3"){//股权变更信息
		$("#"+id).load(webAppName+"/com/change/cid/"+pripid);
	}
	if(id=="s_big_2_4"){//行政许可信息
		$("#"+id).load(webAppName+"/com/license/cid/"+pripid);
	}
	if(id=="s_big_2_5"){//知识产权出质登记信息
		$("#"+id).load(webAppName+"/com/pledge/cid/"+pripid);
	}
	if(id=="s_big_2_6"){//行政处罚信息
		$("#"+id).load(webAppName+"/com/sanction/cid/"+pripid);
	}
	if(id=="s_big_3_1"){//3.市场反馈信息
		$("#"+id).load(webAppName+"/com/market/cid/"+pripid);
	}
	if(id=="s_big_3_2"){//我要评论
		$("#"+id).load(webAppName+"/com/comment/cid/"+pripid);
	}
	
}


//动态切换选项卡:1、切换选项卡；2、判断加载数据
function rMethod(id){
	//动态显示子选项卡
	if(id=="big_1_1"){
		hiddenAll();
		$("#content_big_1").css("display","block");
		$("#cc_1_1").css("display","block");
		loadData("s_"+id);
	}else if(id=="big_1_2"){
		hiddenAll();
		$("#content_big_1").css("display","block");
		$("#cc_1_2").css("display","block");
		loadData("s_"+id);
	}else if(id=="big_1_3"){
		hiddenAll();
		$("#content_big_1").css("display","block");
		$("#cc_1_3").css("display","block");
		loadData("s_"+id);
	}else if(id=="big_1_4"){
		hiddenAll();
		$("#content_big_1").css("display","block");
		$("#cc_1_4").css("display","block");
		loadData("s_"+id);
	}else if(id=="big_1_5"){
		hiddenAll();
		$("#content_big_1").css("display","block");
		$("#cc_1_5").css("display","block");
		loadData("s_"+id);
	}else if(id=="big_1_6"){
		hiddenAll();
		$("#content_big_1").css("display","block");
		$("#cc_1_6").css("display","block");
		loadData("s_"+id);
	}else if(id=="big_1_7"){
		hiddenAll();
		$("#content_big_1").css("display","block");
		$("#cc_1_7").css("display","block");
		loadData("s_"+id);
	}else if(id=="big_2_1"){
		hiddenAll();
		$("#content_big_2").css("display","block");
		$("#cc_2_1").css("display","block");
		loadData("s_"+id);
	}else if(id=="big_2_2"){
		hiddenAll();
		$("#content_big_2").css("display","block");
		$("#cc_2_2").css("display","block");
		loadData("s_"+id);
	}else if(id=="big_2_3"){
		hiddenAll();
		$("#content_big_2").css("display","block");
		$("#cc_2_3").css("display","block");
		loadData("s_"+id);
	}else if(id=="big_2_4"){
		hiddenAll();
		$("#content_big_2").css("display","block");
		$("#cc_2_4").css("display","block");
		loadData("s_"+id);
	}else if(id=="big_2_5"){
		hiddenAll();
		$("#content_big_2").css("display","block");
		$("#cc_2_5").css("display","block");
		loadData("s_"+id);
	}else if(id=="big_2_6"){
		hiddenAll();
		$("#content_big_2").css("display","block");
		$("#cc_2_6").css("display","block");
		loadData("s_"+id);
	}else if(id=="big_3_1"){
		hiddenAll();
		$("#content_big_3").css("display","block");
		$("#cc_3_1").css("display","block");
		loadData("s_"+id);
	}else if(id=="big_3_2"){
		hiddenAll();
		$("#content_big_3").css("display","block");
		$("#cc_3_2").css("display","block");
		loadData("s_"+id);
	}
}

//隐藏所有
function hiddenAll(){
		$("#content_big_1").css("display","none");
		$("#cc_1_1").css("display","none");
		$("#cc_1_2").css("display","none");
		$("#cc_1_3").css("display","none");
		$("#cc_1_4").css("display","none");
		$("#cc_1_5").css("display","none");
		$("#cc_1_6").css("display","none");
		$("#cc_1_7").css("display","none");
		$("#content_big_2").css("display","none");
		$("#cc_2_1").css("display","none");
		$("#cc_2_2").css("display","none");
		$("#cc_2_3").css("display","none");
		$("#cc_2_4").css("display","none");
		$("#cc_2_5").css("display","none");
		$("#cc_2_6").css("display","none");
		$("#content_big_3").css("display","none");
		$("#cc_3_1").css("display","none");
		$("#cc_3_2").css("display","none");
	
}

//左边选项卡切换
function togo(str){
	if(str=='1'){
		hiddenAll();
		$("#content_big_1").css("display","block");
		$("#cc_1_1").css("display","block");
		$("#big_1_1").addClass("current");
		$("#big_1_2").removeClass("current");
		$("#big_1_3").removeClass("current");
		$("#big_1_4").removeClass("current");
		$("#big_1_5").removeClass("current");
		$("#big_1_6").removeClass("current");
		$("#big_1_7").removeClass("current");
	}else if(str=='2'){
		hiddenAll();
		$("#content_big_2").css("display","block");
		$("#cc_2_1").css("display","block");
		loadData("s_big_2_1");
		$("#big_2_1").addClass("current");
		$("#big_2_2").removeClass("current");
		$("#big_2_3").removeClass("current");
		$("#big_2_4").removeClass("current");
		$("#big_2_5").removeClass("current");
		$("#big_2_6").removeClass("current");
	}else if(str=='3'){
		hiddenAll();
		$("#content_big_3").css("display","block");
		$("#cc_3_1").css("display","block");
		loadData("s_big_3_1");
		$("#big_3_1").addClass("current");
		$("#big_3_2").removeClass("current");
	}
}

//改变选项卡样式
 function changeStyle(divId,ele){
    var liAry=document.getElementById(divId).getElementsByTagName("li");             
    var liLen=liAry.length;
    var liID=ele.id;
    for(var i=0;i<liLen;i++)
    {
        if(liAry[i].id==liID)
        {
            liAry[i].className="current";
        }
        else
        {
           liAry[i].className="";
        }
    }
}