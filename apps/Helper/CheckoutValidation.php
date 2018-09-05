<?php 
namespace Helper;

use Phalcon\Validation;
use Phalcon\Validation\Validator\PresenceOf;
use Phalcon\Validation\Validator\Email;

class CheckoutValidation extends Validation
{
	public function initialize()
    {
    	$this->add(
    		'billing_name',
    		new PresenceOf (
    			[
    				'message' => 'Vui lòng nhập họ tên',
    			]
    		)
    	);

    	$this->add(
    		'billing_email',
    		new PresenceOf (
    			[
    				'message' => 'Vui lòng nhập email',
    			]
    		)
    	);

    	$this->add(
    		'billing_phone',
    		new PresenceOf (
    			[
    				'message' => 'Vui lòng nhập số điện thoại',
    			]
    		)
    	);

    	$this->add(
    		'billing_address',
    		new PresenceOf (
    			[
    				'message' => 'Vui lòng nhập địa chỉ',
    			]
    		)
    	);

    	$this->add(
    		'billing_email',
    		new Email (
    			[
    				'message' => 'Vui lòng nhập đúng định dạng email',
    			]
    		)
    	);

    	$this->add(
    		'customer_shipping_province',
    		new PresenceOf (
    			[
    				'message' => 'Vui lòng chọn tỉnh thành',
    			]
    		)
    	);
    }
}
 ?>