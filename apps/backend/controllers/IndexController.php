<?php

namespace Mysomwhow\Backend\Controllers;

use Models\Orders;
use Models\Users;

class IndexController extends BaseController
{
    public function indexAction()
    {
    	$orders = Orders::find([
    		['status' => 'Hoàn thành']
    	]);
    	$revenue = 0;
    	$total_product = 0;
    	foreach ($orders as $value) {
    		$revenue += $value->total_price;
    		$total_product += count($value->product);
    	}

    	$users = Users::count();

    	$details = array(
    		'revenue' => $revenue,
    		'total_orders' => count($orders),
    		'total_product' => $total_product,
    		'users' => $users,
    	);
    	$this->view->setVar('details', $details);
    }
    
}
