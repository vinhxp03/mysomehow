<?php
namespace Mysomwhow\Backend\Controllers;

use Models\Users;

class UsersController extends BaseController
{   
    public function indexAction()
    {
        $users = Users::find();    	
        $this->view->setVar('users',$users);
    }

    // Update users
    public function updateAction($id = null)
    {
    	if($id){
    		$users = Users::findById($id);
    		if ($users) {
    			$this->view->setVar('users', $users);
    			// kiểm tra dữ liệu submit
		    	if ($this->request->isPost()) {
		    		$users->display_name = $this->request->getPost('display_name','string');
		    		$users->phone = $this->request->getPost('phone','string');
		    		//$users->email = $this->request->getPost('email','email');
		    		$users->address = $this->request->getPost('address','string');
		    		$users->updated_at = time();
		    		$users->save();		    	
		    		$this->flashSession->success('Update thông tin khách hàng thành công.');
	    			$this->response->redirect('backend/users');
		    	}
    		}else{
    			$this->flashSession->warning('Không tìm thấy khách hàng này.');
	    		$this->response->redirect('backend/users');
	    	}
    	}
    }

    // Delete users
    public function deleteAction($id = null)
    {
    	if ($id) {
    		$users = Users::findById($id);
    		if ($users) {
    			$users->delete();
    			$this->flashSession->success('Xóa thông tin khách hàng thành công.');
	    		$this->response->redirect('backend/users');
    		}else{
    			$this->flashSession->warning('Không tìm thấy khách hàng này.');
	    		$this->response->redirect('backend/users');
    		}
    	}
    }
}
