<?php
namespace Mysomwhow\Frontend\Controllers;

use Phalcon\Mvc\View;
use ShoppingCart;
use Models\Location;
use Models\Orders;
use Models\Products;
use Helper\CheckoutValidation;

class CheckoutController extends BaseController
{
	public function initialize()
	{
		parent::initialize();
		$this->cart = new ShoppingCart();
		$this->assets->addCss('css/checkouts.css');
		$this->assets->addCss('img/14/check_out.css');
		$this->assets->addJs('js/jquery.validate.js');
	}

    public function indexAction()
    {
    	// check have cart
    	if (!$this->cart->getContent()) {
    		$this->response->redirect('');
    	}

		/*$this->view->disableLevel(
			View::LEVEL_MAIN_LAYOUT
		);*/

		$provinces = Location::find([
			['type' => 'prov'],
			'sort' => ['noname' => 1],
		]);

		if ($this->request->isPost()) {
			// validation form
			$params 	= $this->request->getPost();
			$validation = new CheckoutValidation();
			$messages 	= $validation->validate($params);

			// check validate
			if (count($messages)) {
				foreach ($messages as $message) {
					$errors[$message->getField()] = $message->getMessage();
				}
				$this->view->setVar('params', $params);
				$this->view->setVar('errors', $errors);
			}else{
				// no error
				$orders = new Orders();

				$orders->customer_name = $params['billing_name'];
				$orders->customer_email = $params['billing_email'];
				$orders->customer_phone = $params['billing_phone'];
				$orders->customer_address = $params['billing_address'];

				$orders->product = array();
				$products_id = array();

				foreach ($this->cart->getContent() as $cart) {

					// get id products
					// sold = sold + 1
					$product = Products::findFirst([
						['_id' => $cart['id']],
					]);

					$product->sold = $product->sold + 1;
					$product->save();

					array_push($orders->product, array(
						'id' => $cart['id'],
						'name' => $cart['name'],
						'price' => (int) $cart['price'],
						'quantity' => (int) $cart['qty'],
						'size' => $cart['size'],
						'total_price' => (int) $cart['total'],
					));
				}

				$orders->total_price = $this->cart->getTotal();
				$orders->status = "Mới";
				$orders->created_at = time();
				$orders->updated_at = time();

				// delete cart
				$this->cart->destroy();

				$orders->save();
				$this->flashSession->success("Cảm ơn bạn đã đặt hàng của chúng tôi!");
				$this->response->redirect('gio-hang');
			}
		}

		$this->view->setVar('provinces', $provinces);
		$this->view->setVar('cart', $this->cart);
	}

	public function districtAction($path = null)
	{
		$districts = Location::find([
			[
				'type' => 'dist',
				'path' => '/'.$path.'/',
			],
		]);
		foreach ($districts as $district) {
			echo '<option data-code="'.$district->_id.'" value="'.$district->ref_id.'" >'.$district->full.'</option>';
		}
		die();
	}

	public function successAction($code = null)
	{
		// check have cart
    	/*if (!$this->cart->getContent()) {
    		$this->response->redirect('');
    	}*/
    	
    	$this->view->disableLevel(View::LEVEL_MAIN_LAYOUT);
	}
}

