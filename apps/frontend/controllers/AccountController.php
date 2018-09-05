<?php
namespace Mysomwhow\Frontend\Controllers;

use Models\Users;

class AccountController extends BaseController
{

    public function indexAction()
    {
    	
    }

    public function updateAction()
    {
    	if ($this->session->has('email')) {
    		$user = Users::findFirst([
    			['email' => $this->session->get('email')]
    		]);
    		if ($user) {
	    		$this->view->setVar('user', $user);
	    		if ($this->request->isPost()) {
	    			$user->display_name = $this->request->getPost('display_name');
	    			$user->address = $this->request->getPost('address');
	    			$user->phone = $this->request->getPost('phone');
	    			$user->save();
	    			$this->flashSession->success('Cập nhật thông tin thành công!');
	    			$this->response->redirect('account');
	    		}
    		}
    	}
    }

    public function resetPassAction()
    {
    	if ($this->session->has('email')) {
    		$user = Users::findFirst([
    			['email' => $this->session->get('email')]
    		]);
    		if ($user) {
	    		$this->view->setVar('user', $user);
	    		if ($this->request->isPost()) {
	    			$oldpassword = $this->request->getPost('oldpassword');
	    			$newpassword = $this->request->getPost('newpassword');
	    			$checkpassword = $this->request->getPost('checkpassword');

	    			// kiểm tra mật khẩu đúng
	    			if ($this->security->checkHash($oldpassword, $user->password)) {

	    				// kiểm tra nhập lại mật khẩu
	    				if ($newpassword != null && $newpassword == $checkpassword) {

	    					//lưu thông tin mật khẩu mới
	    					$user->password = $this->security->hash($newpassword);
	    					$user->save();
	    					$this->flashSession->success('Đổi mật khẩu thành công!');
	    					$this->response->redirect('account');
	    				}else{
	    					$this->flashSession->error('Nhập lại mật khẩu không trùng khớp!');
	    					$this->response->redirect('doi-mat-khau');
	    				}
	    			}else{
	    				$this->flashSession->error('Thông tin mật khẩu cũ không chính xác!');
	    				$this->response->redirect('doi-mat-khau');
	    			}
	    		}
    		}
    	}
    }

    public function logoutAction()
    {
        $this->session->remove("userName");
        return $this->response->redirect('');
    }
}

