
$(function(){
	
	$.ajax({
		type: 'GET',
		url: 'json/recommend.json',
		success: function(res){
			var str = null;
			$.each(res,function(i,e){
				var oDiv = $('<div>').addClass(e.ID);
				str = '.'+ e.ID;
				$('.tab_con').append(oDiv);
				$.each(e.cargoInfor,function(index,ele){
					var oDl = $('<dl>');
					var oDt = $('<dt>');
					var oDd = $('<dd>');
					var oAImg = $('<a>');
					var oImg = $('<img>').attr('src',ele.src);
					var oATit = $('<a>').html(ele.Introduction).addClass('comName');
					var obPri = $('<b>').html(ele.unit + ele.price).addClass('price');
					var oSpan = $('<span>').html(ele.mall);

					oImg.appendTo(oAImg);
					oAImg.appendTo(oDt);
					oATit.appendTo(oDd);
					oSpan.appendTo(oDd);
					obPri.appendTo(oDd);
					oDl.append(oDt);
					oDl.append(oDd);
					$(str).append(oDl);
				})
				
			});//一层
		}
	})
	//section1点击切换
	$('.recommend h3').delegate('a','mouseover',function(){
			$(this).addClass('act').siblings().removeClass('act');
			var n = $(this).index();
				$('.tab_con div').eq(n).show().siblings().hide();
	})

//section3 生成

	// $.ajax({
	// 	type:'GET',
	// 	url: 'json/photo.json',
	// 	success: function(res){

	// 		$.each(res,function(i,e){
	// 			var $oDiv = $('<div>').addClass('goods_content');
	// 			var $oDivL = $('<div>').addClass('row_l');
	// 			var $oDivM = $('<div>').addClass('row_m');
	// 			var $oDivR = $('<div>').addClass('row_r')
	// 		})
	// 	},error:function(res){


	// 	}//error结束
	// })//ajsx结束

//section3点击切换
	$('.flexNav').delegate('a','click',function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

//section3 导航固定
	//计算元素到body顶部的距离
	var sec3H = $('.flexNav').offset().top;
	var sTop = $(window).scrollTop();
	//滚动到一点距离时的触发的事件
	$(window).scroll(function(){
		sTop = $(window).scrollTop();
		if( sec3H<sTop){
			var winWidth = $(window).width();
			$('.flexNav').addClass('flexActive').css('width',winWidth);
		}else{
			$('.flexNav').removeClass('flexActive');
		}
		console.log(sec3H);
		console.log(sTop);
	})



})//文件结束