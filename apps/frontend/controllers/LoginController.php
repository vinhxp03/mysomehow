<?php
namespace Mysomwhow\Frontend\Controllers;

use Models\Users;
use Helper\LoginValidation;

class LoginController extends BaseController
{
    public function indexAction()
    {
        if ($this->request->isPost()) {
            if ($this->security->checkToken()) {
                $email = $this->request->getPost('email');
                $password = $this->request->getPost('password');

                $user = Users::findFirst([
                    [
                        'email' => $email,
                    ],
                ]);
                if ($user && $this->security->checkHash($password, $user->password)) {
                    $this->session->set("userName", $user->display_name);
                    $this->session->set("email", $user->email);
                    return $this->response->redirect('account');
                }else{
                    $loginError = "Tên tài khoản hoặc mật khẩu không chính xác.";
                    $this->view->setVar('loginError', $loginError);
                }  
            }
        }
    }

    public function registerAction()
    {
        if ($this->request->isPost()) {
            $validation = new LoginValidation();

            $messages = $validation->validate($_POST);

            // Validate form
            if (count($messages)) {
                foreach ($messages as $message) {
                    $errors[$message->getField()] = $message->getMessage();
                }
                $this->view->setVar('errors',$errors);
            }else{
                // Nếu không có lỗi xảy ra thì tiến hành đăng ký
                $user = new Users();

                // Lấy dữ liệu từ Form
                $firstName = $this->request->getPost('first_name');
                $lastName = $this->request->getPost('last_name');
                $email = $this->request->getPost('email');
                $password = $this->security->hash($this->request->getPost('password'));
                
                $user->display_name = $firstName.' '.$lastName;
                $user->name = $email;
                $user->email = $email;
                $user->password = $password;
                $user->created_at = time();
                $user->updated_at = time();

                if ($user->save() == false) {

                    // đăng ký không thành công
                    $messages = $user->getMessages();
                    foreach ($messages as $message) {
                        echo $message;
                    }
                    $this->view->setVar('messages', $messages);
                    return $this->response->redirect('dang-ky');
                }else{
                    // đăng ký thành công
                    $this->session->set("userName", $user->display_name);
                    $this->session->set("email", $user->email);
                    return $this->response->redirect('account');
                }
            }
        }
    }

    public function checkUserAction()
    {
        $email = $this->request->getPost('email');
        $user = Users::findFirst([
            ['email' => $email],
        ]);
        if ($user) {
            echo 1; die();
        }else{
            echo 0; die();
        }
    }

}

