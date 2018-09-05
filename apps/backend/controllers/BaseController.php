<?php
namespace Mysomwhow\Backend\Controllers;

use Phalcon\Mvc\Controller;
use Phalcon\Http\Request;
use Phalcon\Http\Response\Cookies;
use Models\Setting;

class BaseController extends Controller
{

	protected $admin;

    public function initialize()
    {      	
        $this->admin = $this->session->get('admin');

        // kiểm tra nếu chưa chưa login thì login
    	if(!$this->admin){
    		//header('Location:'.$this->url->get('backend/login'));
    		$this->response->redirect('backend/login');
    	}

        $setting = Setting::findFirst();
        $this->view->setVar('setting', $setting);

        $controller = $this->router->getControllerName();
        $action = $this->router->getActionName();
        $this->view->setVar('controller', $controller);
        $this->view->setVar('action', $action);
    }

}