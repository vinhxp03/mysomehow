<?php 
namespace Models;

use Phalcon\Mvc\Collection;

class Categories extends Collection
{
	public $_id;
	public $title;
	public $parent_id;
	public $images;
	public $created_at;
	public $updated_at;

    public function initialize() {
    	// không dùng id mặc định
        $this->useImplicitObjectIds(false);    
    }

}