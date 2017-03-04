
$(function(){
	//获取生成导航
	$.ajax({
		type: "GET",
		url: "json/chosenGoods.json",
		success: function(res){
			//遍历json赋值给响应标签
			var str=null;
			$.each(res,function(index,ele){
				//创建标签
				var oDl = $('<dl>');
				var oDt = $('<dt>');
				var oDd = $('<dd>');
				var oA = $('<a>').attr('href',ele.href ).html(ele.goodsClass);
			
				//二级遍历
				$.each(ele.secondaryClass,function(_index, _ele){

					var oSa = $('<a>').attr('href',_ele.s_href).html(_ele.secondaryName);
					oDd.append(oSa);
					var oSa_ = $('<a>').attr('hre',_ele.s_href).html(_ele.secondaryName);
					//横幅下拉框标签生成
					var oSdl =$('<dl>').addClass(ele.goodsId);
					var oSdt = $('<dt>');
					var oSdd = $('<dd>');
					//三级遍历
					$.each(_ele.threeLevel,function(t_index, t_ele){
						var oTa = $('<a>').attr('href',t_ele.t_href).html(t_ele.t_L_Name);
						oSdd.append(oTa);
					});
					//标签插入
					oSdt.append(oSa_);
					oSdl.append(oSdt);
					oSdl.append(oSdd);

					$('.sumNav').append(oSdl);
				})

				//标签插入
				oDt.append(oA);
				oDl.append(oDt);
				oDl.append(oDd);
				$('.nav_side').append(oDl);
				//移入显示
				// var aNavLi = $('.nav_menu li');
				
				$('.nav_menu').delegate('li','mouseover',function(){
					if( $(this).attr('class') == ele.Num){
						str = '.'+ ele.goodsId;
						$('.sumNav').show();
						$(str).show();
					}
				});
				//移出隐藏
				$('.nav_menu').delegate('li','mouseout',function(){
					if( $(this).attr('class') == ele.Num){
						$(str).hide();
					}
				});
				//鼠标移入移出事件
				$('.sumNav').hover(function(){
					$(str).show()
					$(this).show();
				}, function(){
					$(str).hide()
					$(this).hide();
				});
			})
		}
	});
	//导航生成及动作功能结束


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

})//文件结束