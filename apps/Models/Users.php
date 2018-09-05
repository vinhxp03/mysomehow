<?php 
namespace Models;

use Phalcon\Mvc\Collection;
use Phalcon\Mvc\Model\Message;
use Phalcon\Mvc\Model\Validator\Uniqueness;
use Phalcon\Mvc\Model\Validator\InclusionIn;

class Users extends Collection
{
	public $_id;
	public $display_name;
	public $name;
	public $phone;
	public $email;
	public $address;
	public $password;
	public $source;
	public $created_at;
	public $updated_at;


    public function initialize()
    {
    	
    }

}