require(['./js/config.js'],function(){
	 require(['mui','dom','BScroll'],function(mui,dom,BScroll){
		console.log(55555)
		mui.init()
		mui.ajax("/api/select",{
			dataType:'json',
			success:function(res){
				console.log(res)
				renderimg(res.data)
			}
		});
		//渲染
		function renderimg(data){
			var url = "http://192.168.2.177:7000/images/";
			var str = '';
			data.forEach((i)=>{
				str += `<li class="mui-table-view-cell mui-media mui-col-xs-6">
					<a href="#">
						<img class="mui-media-object" src="${url}${i.url}">
						<div class="mui-media-body">${i.con}</div>
						<div class="mui-media-body">$${i.price}</div>
					</a>
				</li>`
			})
			dom(".mui-grid-view").innerHTML = str;
		};
		
		//better-scroll
		var scroll = new BScroll('.mui-content',{
			scrollY:true,
			
		})
		
	})
})