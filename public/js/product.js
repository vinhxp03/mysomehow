$('.option-1>li>a').click(function(){
	if(!$(this).hasClass('soldout')){
		$('.option-1 li ').removeClass('selected');
		$(this).parent('li').addClass('selected');
		index = $(this).parent('li').index();
		$('#product-select-option-0>option:nth-child('+(index+1)+')').prop('selected', true);
		$('#product-select-option-0').change();
		var op1 = $(this).data('op1');
		$('.option-2 a').removeClass('soldout');
		$('#product-select option[data-op1="'+op1+'"]').each(function(){
			if($(this).data("available") == false){
				$('.option-2 a[data-op2="'+$(this).data('op2')+'"]').addClass('soldout');
			}
		});
	}
});
$('.option-2>li>a').click(function(){
	if(!$(this).hasClass('soldout')){
		$('.option-2 li ').removeClass('selected');
		$(this).parents('li').addClass('selected');
		index = $(this).parent('li').index();
		$('#product-select-option-1>option:nth-child('+(index+1)+')').prop('selected', true);
		$('#product-select-option-1').change();
	}
});
$('.option-3>li>a').click(function(){
	$('.option-3 li ').removeClass('selected');
	$(this).parents('li').addClass('selected');
	index = $(this).parent('li').index();
	$('#product-select-option-2>option:nth-child('+(index+1)+')').prop('selected', true);
	$('#product-select-option-2').change();
});