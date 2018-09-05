<?php 
namespace Helper;

use Phalcon\Validation;
use Phalcon\Validation\Validator\PresenceOf;
use Phalcon\Validation\Validator\Alnum;

class ProductsValidation extends Validation
{
	public function initialize()
    {
    	// Validate register form
	    $this->add(
	        'in_price',
	        new Alnum(
	            [
	            	'message' => 'Giá nhập chỉ có thể là số.',
	            ]
	        )
	    );

	    $this->add(
	        'sale_price',
	        new Alnum(
	            [
	            	'message' => 'Giá gốc chỉ có thể là số.',
	            ]
	        )
	    );

	    $this->add(
	        'promo_price',
	        new Alnum(
	            [
	            	'message' => 'Giá khuyến mãi chỉ có thể là số.',
	            ]
	        )
	    );

	    $this->add(
	        'total',
	        new Alnum(
	            [
	            	'message' => 'Số lượng chỉ có thể là số.',
	            ]
	        )
	    );
	}
}
 ?>