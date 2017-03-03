
$(function(){
	//横幅导航
	$.ajax({
		type: "GET",
		url: "json/chosenGoods.json",
		success: function(res){
			//遍历json赋值给响应标签
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
					if()
					var oSdl =$('<dl>');
					var oSdt = $('<dt>');
					var oSdd = $('<dd>');
					//三级遍历
					$.each(ele.secondaryClass.threeLevel,function(t_index,t_ele){
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
			})
		}
	});


})//文件结束