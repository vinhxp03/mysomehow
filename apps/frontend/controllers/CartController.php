<?php
namespace Mysomwhow\Frontend\Controllers;

use ShoppingCart;

class CartController extends BaseController
{
	public function initialize()
	{
		parent::initialize();
		$this->cart = new ShoppingCart();
	}

    public function indexAction()
    {
		// show cart to view
		$this->view->setVar('cart', $this->cart);

		if ($this->request->isPost()) {
			if (isset($_POST['update'])) {

				$quantity = $this->request->getPost('qty');

				$product_cart = array();
				// add product
				$i = 0;
				foreach ($this->cart->getContent() as $cart) {
					array_push($product_cart, array(
						'id' => $cart['id'],
						'name' => $cart['name'],
						'price' => $cart['price'],
						'qty' => $quantity[$i],
						'color' => $cart['color'],
                        'size' => $cart['size'],
                        'img' => $cart['img'],
					));
					$i += 1;
				}
				if($this->cart->updateMulti($product_cart) != false){
					$this->response->redirect('gio-hang');
				}
			}elseif (isset($_POST['checkout'])) {
			
				$this->response->redirect('mua-hang');
			}
		}
    }

    // delete product
    public function delAction($rowId = null)
    {
    	if ($rowId) {
    		foreach ($this->cart->getContent() as $cart) {
    			//check rowId
    			if ($rowId == $cart['rowId']) {
    				// delete product
    				if ($this->cart->removeProduct($rowId) != false) {
    					$this->response->redirect('gio-hang');
    				}
    			}
    		}
    	}else{
    		$this->flashSession->warning('Không tìm thấy sản phẩm này');
    		$this->response->redirect('gio-hang');
    	}
    }
}

