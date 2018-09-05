<?php 
namespace Models;

use Phalcon\Mvc\Collection;

class Orders extends Collection
{
	public $_id;
	public $customer_name;
	public $customer_email;
	public $customer_phone;
	public $customer_address;
	public $product;
	public $total_price;
	public $status;
	public $created_at;
	public $updated_at;


    public function initialize()
    {
    	
    }

}