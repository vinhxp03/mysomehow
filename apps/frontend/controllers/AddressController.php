<?php
namespace Mysomwhow\Frontend\Controllers;

use Models\Setting;

class AddressController extends BaseController
{

    public function indexAction()
    {

    }

    public function pagesAction($id = null)
    {
    	//find address has id = $id
    	$setting = Setting::findFirst();

    	foreach ($setting->info as $info) {
    		if ($id == $info['id']) {
    			$this->view->setVar('address_info', $info);
    		}
    	}
    }

}

