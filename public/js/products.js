$(document).ready(function(){
	if($('.collection-left').outerHeight() > $('.collection-img .img').height()){
		$('.collection-img .img').height($('.collection-left').outerHeight());
	}

	if($(window).width() < 768){
		$('.product-filter').click(function(){
			$(this).toggleClass('active');
		});
		$(document).on('click', function(event) {
			if (!$(event.target).closest('.product-filter').length) {
				$('.product-filter').removeClass('active');
			}
		});
		$('.product-filter .filter-container').click(function(e){
			e.stopPropagation();
		});
	}
	$('.filter-tag ul li').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).parent('ul').find('li').removeClass('active');
			$(this).addClass('active');
		}
	});
	$('.filter-btn a').click(function(){
		Stringfilter();
		$('.product-filter').removeClass('active');
	});

	str = "";
	var Stringfilter = function(){
		var q="", total_page=0, cur_page=1;
		var strhistory = "", gia2 ="", vendor2 = "";	
		var handle_coll = 'all';
		
		q="filter=(collectionid:product>0)";
		 

			$('.filter-tag .active').each(function(){
				vendor2 = vendor2 + $(this).data('filter') + '&&';
			})

			vendor2 = vendor2.substring(0,vendor2.length -2);
			 if(vendor2 != ""){
				 vendor2='('+vendor2+')';
				 q+= encodeURIComponent('&&'+vendor2);
			 }

			 str = q;
			 //console.log(q);

			 $.ajax({ // lấy tổng số trang của kết quả filter
				 url: "/search?q="+q+"&view=pages",	
				 async: false,
				 success:function(data){
					 total_page = parseInt(data);
				 }
			 })
			 if(cur_page <= total_page){
				 $('.paginate').show();
				 $.ajax({
					 url : "/search?q="+q+"&view=filter",
					 success: function(data){
						 $(".product-lists").html(data);
					 }
				 })
				 $.ajax({  // đoạn code 
					 url: "/search?q="+q+"&view=paginate",
					 async: false,
					 success:function(data){
						 $(".paginate").html(data); // in phân trang
					 }
				 })
			 }else{
				 $(".product-lists").html("<div class='col-sm-12 text-center no-product'>Không có sản phẩm phù hợp!</div>");
				 $('.paginate').hide();
			 }
			 $('.paginate').on("click","a",function(){ // bắt sự kiện click các nút phân trang
				 var link = $(this).attr("data-link");
				 if(link == 'm'){
					 link = cur - 1;
				 }
				 if(link == 'p'){
					 link = cur + 1;
				 }
				 link = parseInt(link);
				 $.ajax({
					 url : "/search?q="+str+"&view=filter&page="+link, 
					 success: function(data){
						 $(".product-lists").html(data);
						 cur = link;
					 }
				 })
				 $.ajax({ 
					 url: "/search?q="+str+"&view=paginate&page="+link,	
					 success:function(data){
						 $(".paginate").html(data);
					 }
				 })
			 })
			}
		 })