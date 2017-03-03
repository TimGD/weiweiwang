$(function(){
//头部导航的省份选择
	$.ajax({
		type: 'GET',
		url: "json/address.json",
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

});//文件结尾