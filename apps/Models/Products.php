<?php 
namespace Models;

use Phalcon\Mvc\Collection;

class Products extends Collection
{
	public $_id;
	public $title;
	public $category;
	public $price;
	public $total;
	public $images;
	public $details;
	public $created_at;
	public $updated_at;


    public function initialize()
    {
    	// không dùng id mặc đinh
    	$this->useImplicitObjectIds(false);
    }

}