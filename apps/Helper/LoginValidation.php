<?php 
namespace Helper;

use Phalcon\Validation;
use Phalcon\Validation\Validator\Email;
use Phalcon\Validation\Validator\StringLength;
use Phalcon\Validation\Validator\PresenceOf;

class LoginValidation extends Validation
{
	public function initialize()
    {
    	// Validate register form
		$this->add(
	        'first_name',
	        new StringLength(
	            [
	            	'min' => 2,
	            	'max' => 8,
	                'messageMinimum' => 'Tên quá ngắn',
	                'messageMaximum' => 'Tên quá dài',
	            ]
	        )
	    );

	    $this->add(
	        'last_name',
	        new StringLength(
	            [
	            	'min' => 2,
	            	'max' => 8,
	                'messageMinimum' => 'Họ quá ngắn',
	                'messageMaximum' => 'Họ quá dài',
	            ]
	        )
	    );

		$this->add(
	        'email',
	        new Email(
	            [
	                'message' => 'Email không hợp lệ',
	            ]
	        )
	    );
	}
}
 ?>