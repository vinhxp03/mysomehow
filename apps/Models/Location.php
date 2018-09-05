<?php 
namespace Models;

use Phalcon\Mvc\Collection;

class Location extends Collection
{
	public $_id;
	public $noname;
	public $ref_id;
	public $full;
	public $nonchar;
	public $type;
	public $location;
	public $path;
	public $path_name;


    public function initialize()
    {
    	
    }

}