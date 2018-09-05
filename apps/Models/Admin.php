<?php 
namespace Models;

use Phalcon\Mvc\Collection;

class Admin extends Collection
{
	public $_id;
	public $display_name;
	public $phone;
	public $email;
	public $address;
	public $password;
	public $roler;
	public $created_at;
	public $updated_at;


    public function initialize()
    {
    	
    }

}