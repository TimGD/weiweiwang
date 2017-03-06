
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

	//section3点击切换
	$('.flexNav').delegate('a','click',function(){
		$(this).addClass('active').siblings().removeClass('active');
	});

	// $(window).scroll(function(){
	// 	var sec3H = $('.flexNav').offset().top;
	// 	var sTop = $(window).scrollTop();
	// 	var k = sTop + sec3H;
	// 	console.log(sec3H);
	// 	console.log(sTop);
	// 	console.log(k);
	// })

})//文件结束