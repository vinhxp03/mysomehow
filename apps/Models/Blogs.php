<?php 
namespace Models;

use Phalcon\Mvc\Collection;

class Blogs extends Collection
{
	public $_id;
	public $title;
	public $content;
	public $created_at;
	public $updated_at;


    public function initialize()
    {
    	// không dùng id mặc đinh
    	$this->useImplicitObjectIds(false);
    }

}