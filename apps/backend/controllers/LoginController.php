<?php
namespace Mysomwhow\Backend\Controllers;

use Phalcon\mvc\Controller;
use Models\Admin;

class LoginController extends Controller
{
    public function indexAction()
    {
    	/*$newAdmin = new Admin;
    	$newAdmin->display_name = 'Trần Danh Đại';
    	$newAdmin->phone 		= '0976805225';
    	$newAdmin->email 		= 'daitran@hhdgroup.com';
    	$newAdmin->address 		= '136 Cô Bắc , Quận 1, TP HCM';
    	$newAdmin->password 	= $this->security->hash('123@123');
    	$newAdmin->roler 		= 'roots';
    	$newAdmin->created_at = time();
    	$newAdmin->updated_at = time();
    	$newAdmin->save();	*/   

        // kiểm tra nếu login rồi thì không cho login nữa
        if ($this->session->get('admin') && ($this->router->getControllerName() == 'login')) {
            $this->response->redirect('backend');
        }

        if ($this->request->isPost()) {
            // lay noi dung login
            $email = $this->request->getPost('username');
            $password = $this->request->getPost('password');

            $admin = Admin::findFirst([
                [
                    'email' => $email
                ]
            ]);
            if ($admin && $this->security->checkHash($password, $admin->password)) {
                $this->session->set('admin', $admin->display_name);
                $this->response->redirect('backend');
            }else{
                $loginError = "Tên tài khoản hoặc mật khẩu không chính xác.";
                $this->view->setVar('loginError', $loginError);
            }
        }
    }

}
