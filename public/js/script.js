$(document).ready(function(){
	$('img').each(function(){
		var element         = $(this);
		var topOfElement    = element.offset().top;
		var bottomOfElement = element.offset().top + element.outerHeight(true);

		var scrollTopPosition   = $(window).scrollTop()+$(window).height();
		var windowScrollTop     = $(window).scrollTop()
		if( windowScrollTop > topOfElement && windowScrollTop < bottomOfElement) {
			// Element is partially visible (above viewable area)
			//console.log("Element is partially visible (above viewable area)");
			$(this).attr('src',$(this).data('src')).removeAttr('data-src');

		}else if( windowScrollTop > bottomOfElement && windowScrollTop > topOfElement ) {
			// Element is hidden (above viewable area)
			//console.log("Element is hidden (above viewable area)");

		}else if( scrollTopPosition < topOfElement && scrollTopPosition < bottomOfElement ) {
			// Element is hidden (below viewable area)
			//console.log("Element is hidden (below viewable area)");

		}else if( scrollTopPosition < bottomOfElement && scrollTopPosition > topOfElement ) {
			// Element is partially visible (below viewable area)
			//console.log("Element is partially visible (below viewable area)");
			$(this).attr('src',$(this).data('src')).removeAttr('data-src');
		}else{
			// Element is completely visible
			//console.log("Element is completely visible");
			$(this).attr('src',$(this).data('src')).removeAttr('data-src');
		}
		//if( ($(this).offset().top < window.innerHeight) || ($(this).offset().top + $(this).height() >= document.body.scrollTop && $(this).offset().top + $(this).height() <= document.body.scrollTop + window.innerHeight) && $(this).attr('data-src')){
		//$(this).attr('src',$(this).data('src')).removeAttr('data-src');
		//}
	});
	var img_loaded = false;
	window.addEventListener("scroll", function(){
		if (img_loaded == false){
			if ((document.documentElement.scrollTop != 0) || (document.body.scrollTop != 0)) {
				var imgDefer = document.getElementsByTagName('img');
				for (var i=0; i<imgDefer.length; i++) {
					if(imgDefer[i].getAttribute('data-src') != null) {
						imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
					} 
				}
				img_loaded = true;
			}
		}
	});
	//$('[data-toggle="tooltip"]').tooltip();
});

$(window).scroll(function() {

	if ($(this).scrollTop() > 100) {
		$('.scrollToTop').fadeIn();
		$('.cart-fixscroll').removeClass('hidden');
	} else {
		$('.scrollToTop').fadeOut();
		$('.cart-fixscroll').addClass('hidden');
	}
});

//Click event to scroll to top
$('.scrollToTop').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 600);
	return false;
});

$(document).ready(function(){
	$("#owl-index").owlCarousel({
		navigation : true, // Show next and prev buttons
		navigationText:["<i class=\"fa fa-angle-left \"><\/i>","<i class=\"fa fa-angle-right\"><\/i>"],
		slideSpeed : 300,
		pagination: false,
		paginationSpeed : 400,
		singleItem:true,
		autoPlay: 4000,
		afterAction: function(el){
			//remove class active
			this.$owlItems.removeClass('active')
			//add class active
			this.$owlItems.eq(this.currentItem).addClass('active')    
		} 
	});
	$("#owl-product-index").owlCarousel({
		navigation : true,
		pagination: false,
		margin: 30,
		itemsCustom: [
			[0, 2],
			[480, 2],
			[768, 3],
			[992, 4],
			[1200, 5]
		],
		slideSpeed : 300,
		paginationSpeed : 400,
		navigationText:["<i class=\"fa fa-angle-left \"><\/i>","<i class=\"fa fa-angle-right\"><\/i>"]
	});
	$("#owl-product-index2").owlCarousel({
		navigation : true,
		pagination: false,
		margin: 30,
		itemsCustom: [
			[0, 2],
			[480, 2],
			[768, 3],
			[992, 3],
			[1200, 3]
		],
		slideSpeed : 300,
		paginationSpeed : 400,
		navigationText:["<i class=\"fa fa-angle-left \"><\/i>","<i class=\"fa fa-angle-right\"><\/i>"]
	});
	$("#owl-product-related").owlCarousel({
		navigation : true,
		pagination: false,
		margin: 30,
		itemsCustom: [
			[0, 2],
			[480, 2],
			[768, 3],
			[992, 4],
			[1200, 5]
		],
		slideSpeed : 300,
		paginationSpeed : 400,
		navigationText:["<i class=\"fa fa-angle-left \"><\/i>","<i class=\"fa fa-angle-right\"><\/i>"]
	});
	$('#sliderproduct').owlCarousel({
		navigation : true,
		pagination: false,
		itemsCustom: [
			[0, 3],
			[480, 3],
			[768, 5]
		],
		slideSpeed : 300,
		paginationSpeed : 400,
		navigationText:["<i class=\"fa fa-angle-left \"><\/i>","<i class=\"fa fa-angle-right\"><\/i>"]
	});

	/*$('#mmenu').slicknav({
		label:'',
		allowParentLinks: 1,
		prependTo:'#header-mobile-menu'
	});*/

	var slidebars=function(){var t=$("[canvas]"),e={},i=!1,n=!1,s=["top","right","bottom","left"],r=["reveal","push","overlay","shift"],o=function(i){var n=$(),s="0px, 0px",r=1e3*parseFloat(e[i].element.css("transitionDuration"),10);return("reveal"===e[i].style||"push"===e[i].style||"shift"===e[i].style)&&(n=n.add(t)),("push"===e[i].style||"overlay"===e[i].style||"shift"===e[i].style)&&(n=n.add(e[i].element)),e[i].active&&("top"===e[i].side?s="0px, "+e[i].element.css("height"):"right"===e[i].side?s="-"+e[i].element.css("width")+", 0px":"bottom"===e[i].side?s="0px, -"+e[i].element.css("height"):"left"===e[i].side&&(s=e[i].element.css("width")+", 0px")),{elements:n,amount:s,duration:r}},c=function(t,i,n,s){return a(t)?!1:void(e[t]={id:t,side:i,style:n,element:s,active:!1})},a=function(t){return e.hasOwnProperty(t)?!0:!1};this.init=function(t){return i?!1:(n||($("[off-canvas]").each(function(){var t=$(this).attr("off-canvas").split(" ",3);return t&&t[0]&&-1!==s.indexOf(t[1])&&-1!==r.indexOf(t[2])?void c(t[0],t[1],t[2],$(this)):!1}),n=!0),i=!0,this.css(),$(f).trigger("init"),void("function"==typeof t&&t()))},this.exit=function(t){if(!i)return!1;var e=function(){i=!1,$(f).trigger("exit"),"function"==typeof t&&t()};this.getActiveSlidebar()?this.close(e):e()},this.css=function(t){if(!i)return!1;for(var n in e)if(a(n)){var s;s="top"===e[n].side||"bottom"===e[n].side?e[n].element.css("height"):e[n].element.css("width"),("push"===e[n].style||"overlay"===e[n].style||"shift"===e[n].style)&&e[n].element.css("margin-"+e[n].side,"-"+s)}this.getActiveSlidebar()&&this.open(this.getActiveSlidebar()),$(f).trigger("css"),"function"==typeof t&&t()},this.open=function(t,n){if(!i)return!1;if(!t||!a(t))return!1;var s=function(){e[t].active=!0,e[t].element.css("display","block"),$(f).trigger("opening",[e[t].id]);var i=o(t);i.elements.css({"transition-duration":i.duration+"ms",transform:"translate("+i.amount+")"}),setTimeout(function(){$(f).trigger("opened",[e[t].id]),"function"==typeof n&&n()},i.duration)};this.getActiveSlidebar()&&this.getActiveSlidebar()!==t?this.close(s):s()},this.close=function(t,n){if("function"==typeof t&&(n=t,t=null),!i)return!1;if(t&&!a(t))return!1;if(t||(t=this.getActiveSlidebar()),t&&e[t].active){e[t].active=!1,$(f).trigger("closing",[e[t].id]);var s=o(t);s.elements.css("transform",""),setTimeout(function(){s.elements.css("transition-duration",""),e[t].element.css("display",""),$(f).trigger("closed",[e[t].id]),"function"==typeof n&&n()},s.duration)}},this.toggle=function(t,n){return i&&t&&a(t)?void(e[t].active?this.close(t,function(){"function"==typeof n&&n()}):this.open(t,function(){"function"==typeof n&&n()})):!1},this.isActive=function(){return i},this.isActiveSlidebar=function(t){return i&&t&&a(t)?e[t].active:!1},this.getActiveSlidebar=function(){if(!i)return!1;var t=!1;for(var n in e)if(a(n)&&e[n].active){t=e[n].id;break}return t},this.getSlidebars=function(){if(!i)return!1;var t=[];for(var n in e)a(n)&&t.push(e[n].id);return t},this.getSlidebar=function(t){return i&&t&&t&&a(t)?e[t]:!1},this.events={};var f=this.events;$(window).on("resize",this.css.bind(this))};

	$('.search').on('click', function () {
		$('.search-on-mobile').addClass('open');
		$('#input-search-mobile').focus();
	})
	$('.close-search-mobile').on('click', function () {
		$('.search-on-mobile').removeClass('open');
	});

	var controller = new slidebars();

	controller.init();

	$( '.js-toggle-left-slidebar' ).on( 'click', function ( event ) {
		//$( '.three-bars-icon' ).addClass( 'close' );
		$('.trigger-menu .text').html('Đóng');
		event.stopPropagation();
		controller.toggle( 'slidebar-1' );
	} );

	$( '.filter-button' ).on( 'click', function ( event ) {
		event.stopPropagation();
		controller.toggle( 'slidebar-2' );
		$(".over-mid").fadeIn();
		$(".over-mid").addClass( 'js-close-any-slidebar' );
	} );

	// Close any
	$( controller.events ).on( 'opened', function () {
		$( '[canvas="container"]' ).addClass( 'js-close-any-slidebar' );
	} );

	$( controller.events ).on( 'closed', function () {
		//$( '.three-bars-icon' ).removeClass( 'close' );
		$('.trigger-menu .text').html('Menu');
		$( '[canvas="container"]' ).removeClass( 'js-close-any-slidebar' );
	} );

	$( 'body' ).on( 'click', '.js-close-any-slidebar', function ( event ) {
		event.stopPropagation();
		controller.close();
		$(".over-mid").fadeOut("slow");
	});

	/*$('#cart .item-quantity').change(function(){
		var quan = $(this).val();
		$('#cart .item-quantity').val(quan);
	});*/

});





