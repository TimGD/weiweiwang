	//参数一：li的最小宽度
	//参数二：盖在li左边元素的宽度
	function changeImgW(min_width,oWidth ){

		var liWidth = $('.banner li').width();
		var l = (liWidth-min_width)/2-oWidth + 'px';
		$('.banner ul li img').css('left',l);
		//div大小自适应
		var w = $(window).width();
		if(w>min_width){
			$('#b03').css('width',w+'px');
		}else{
			$('#b03').css('width',min_width + 'px');
		}

	};
	

	function imgReload(){
				var imgHeight = 0;
				var wtmp = $("body").width();
				
				if(wtmp>1200){
					$("#b03 ul li").each(function(){
						$(this).css({width:wtmp + "px"});
					});

					$(".sliderimg").each(function(){
						$(this).css({width:wtmp + "px"});
						imgHeight = $(this).height();
					});
					
				}else{
					$("#b03 ul li").each(function(){
						$(this).css({width:"1200px"});
					});

					$(".sliderimg").each(function(){
						$(this).css({width:"1200px"});
						imgHeight = $(this).height();
					});
					
				}
			
			}

			$(window).resize(function(){
				imgReload();
				changeImgW('1200','358');
			});

			$(document).ready(function(e){
				imgReload();
				changeImgW('1200','358');
			});
				$('#b03').unslider({
					dots: true,
				});
