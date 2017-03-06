$(function(){
//头部导航的省份选择
	$.ajax({
		type: 'GET',
		url: $topNavUrl,
		success: function(res){
			var $ul= $('<ul>').addClass('province');

			//遍历添加a和li标签
			$.each(res,function(_index, ele){
				var $li = $('<li>');
				var $a = $('<a href="javascript:void(0)">').html(ele.name);

				//给a标签加动作
				$a.mouseover(function(){
					if(!$(this).attr('class')){$(this).addClass('over');}
				});

				$a.mouseout(function(){
					$('a').removeClass('over');
				});

				$a.click(function(){
					$('.con a').removeClass();
					$(this).addClass('active');
					var str = $(this).html().substring(0,2);
					$('.address em').html(str);
				});

				$li.append($a);
				$ul.append($li);
			});
			$('.address').append($ul);
			$('.province a').eq(0).addClass('active');
		}
	});

	//鼠标移入ul显示
	$('.address').mouseover(function(){
		$('.address_t').addClass('addressOver');
		$('.province').css('display','block');
	});
	//鼠标移出ul消失
	$('.address').mouseout(function(){
		$('.address_t').removeClass('addressOver');
		$('.province').css('display','none');
	});
//头部导航地址选择结束

//购物车
var oCart = $('.shopping_cart');
var oCartDt = $('.shopping_cart dt');
var oCartDd = $('.shopping_cart dd');

oCart.mouseover(function(){
	oCartDt.addClass('cart_active');
	oCartDd.css('display','block');
});
oCart.mouseout(function(){
	oCartDt.removeClass('cart_active');
	oCartDd.css('display','none');
})
//购物车结束


//获取生成主导航

	$.ajax({
		type: "GET",
		url: $navUrl,
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
				//二级菜单鼠标移入移出事件
				$('.sumNav').hover(function(){
					$(str).show()
					$(this).show();
				}, function(){
					$(str).hide()
					$(this).hide();
				});

				//侧边导航移入移出事件
				if(sideshow){
					
					$('#nav .title').hover(function(){
						$('.nav_side').show();
					},function(){
						$('.nav_side').hide();
					});

					$('.nav_side').hover(function(){
						$(this).show();
					},function(){
						$(this).hide();
					})
				}else{
					$('.nav_side').css('display','block');
				}
				
			})
		}
	});
	//导航生成及动作功能结束


//侧边栏
	var wHeight = $(window).height();
	var wWidth = $(window).width();
	function sideChange(){
		
		var t = (wHeight-$('.rSide_con').height())/2;
		$('#rightSide').css('height',wHeight+'px');
		$('.rSide_con').css('top', t+'px');
		if( wWidth<1300){
			$('#rightSide').css('background','none').hover(function(){
				$(this).css('background','black');
				$('.side_User').show();
				$('.side_qq').show();
			},function(){
				$(this).css('background','none');
				$('.side_User').hide();
				$('.side_qq').hide();
			});

			$('.side_User').hide();
			$('.side_qq').hide();
		}

		$('.side_User').hover(function(){
			$('.sideUser').show();

		},function(){
			$('.sideUser').hide();

		});
		$('.sideUser').hover(function(){
			$(this).show();
		},function(){
			$(this).hide();
		})
		console.log(wHeight);
		console.log(t);
	}
	sideChange();

	$(window).resize(function(){
		wHeight = $(window).height();
		wWidth = $(window).width();

		sideChange()

		



	})
	

});//文件结尾