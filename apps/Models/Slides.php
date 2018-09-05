<?php 
namespace Models;

use Phalcon\Mvc\Collection;

class Slides extends Collection
{
	public $_id;
	public $title;
	public $description;
	public $links;
	public $images;
	public $created_at;
	public $updated_at;


    public function initialize()
    {
    	
    }

}