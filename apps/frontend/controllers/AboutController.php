<?php
namespace Mysomwhow\Frontend\Controllers;

use Models\Blogs;

class AboutController extends BaseController
{

    public function indexAction()
    {
    	$about = Blogs::findFirst([
            ['_id' => 'gioi-thieu']
        ]);
        
        $this->view->setVar('about', $about);
    }

    public function apitestAction()
    {
    	$product = \Models\Products::find([
    		'limit' => 5
    	]);

    	$response = new \Phalcon\Http\Response();

    	if ($product) {
    		$data = [];

	    	foreach ($product as $key => $value) {
	    		$data[] = [
	    			'name' => $value->title,
	    			'category' => $value->category,
	    		];
	    	}

    		$response->setJsonContent([
    			'status' => 'OK',
    			'data' => $data
    		]);
    	}
    	
    	return $response;

    	die();
    }

    public function apitestloginAction()
    {
    	// Get user from Post
    	$user = $this->request->getJsonRawBody();

    	$check = \Models\Users::find([
    		['email' => $user->email]
    	]);

    	$response = new \Phalcon\Http\Response();

    	// Check user exist
    	if ($check) {
    		$response->setJsonContent([
    			'message' => 'Email này đã đăng ký rồi.'
    		]);
    	} else {
    		$response->setStatusCode(404, "Not found");

    		$response->setJsonContent([
    			'message' => 'Đăng nhập không thành công.'
    		]);
    	}

    	return $response;
    }

    public function apitestupdateAction()
    {
    	$body = $this->request->getJsonRawBody();

    	$user = \Models\Users::findFirst([
    		['email' => $body->email]
    	]);

    	// Create a response
    	$response = new \Phalcon\Http\Response();
    	$tag = $response->setEtag(md5(time()));

    	// Check user found
    	if ($user) {
    		$user->display_name = $body->display_name;

    		if ($user->save()) {
    			$response->setJsonContent([
    				'status' => 'OK',
    				'message' => 'Cập nhật thành công.',
    				'data' => $user
    			]);
    		}
    	} else {
    		// If error
    		$response->setStatusCode(409, 'Conflict');

    		$response->setJsonContent([
    			'status' => 'Lỗi', 
    			'errors' => 'Không tìm thấy user này',
    			'time' => $tag
    		]);
    	}

    	return $response;
    }

}

