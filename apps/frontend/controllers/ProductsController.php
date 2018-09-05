<?php
namespace Mysomwhow\Frontend\Controllers;

use Models\Products;
use Helper\Pagination;
use ShoppingCart;

class ProductsController extends BaseController
{

    public function indexAction($id = null)
    {
        // Get sort_by from url
        if ($this->request->isGet()) {
            $sort_by = $this->request->getQuery('sort_by');
        }else{
            $sort_by = null;
        }

        // check sort by
        switch ($sort_by) {
            case 'null':
                $input = null;
                break;
            case 'created-descending':
                $input = ['created_at' => -1];
                break;
            case 'best-selling':
                $input = ['sold' => -1];
                break;
            case 'price-ascending':
                $input = ['price' => 1];
                break;
            case 'price-descending':
                $input = ['price' => -1];
                break;
            case 'title-ascending':
                $input = ['_id' => 1];
                break;
            case 'title-descending':
                $input = ['_id' => -1];
                break;
            default:
                $input = null;
                break;
        }

        // Get current page from url
        if ($this->request->get('page')) {
            $currentPage = $this->request->get('page');
        }else{
            $currentPage = 1;
        }

        //set limit pages
        $limit = 8;

        //check params from url
        if ($id) {
            switch ($id) {
                case 'san-pham-moi':
                    //pagination product
                    $totalItems = Products::count();

                    if (!$input) {
                        $input = ['created_at' => -1];
                    }

                    // find products for input
                    $products = Products::find([
                        'sort' => $input,
                        'limit' => $limit,
                        'skip' => ($currentPage - 1) * $limit,
                    ]);
                    break;
                case 'san-pham-ban-chay':
                    //pagination product
                    $totalItems = Products::count();

                    if (!$input) {
                        $input = ['sold' => -1];
                    }
                    
                    // find products for input
                    $products = Products::find([
                        'sort' => $input,
                        'limit' => $limit,
                        'skip' => ($currentPage - 1) * $limit,
                    ]);
                    break;
                case 'all-item':
                    //pagination product
                    $totalItems = Products::count();

                    // find products for input
                    $products = Products::find([
                        'sort' => $input,
                        'limit' => $limit,
                        'skip' => ($currentPage - 1) * $limit,
                    ]);
                    break;
                default:
                    //pagination product
                    $totalItems = Products::count([
                        ['category' => $id],
                    ]);

                    // find products for input
                    $products = Products::find([
                        ['category' => $id],
                        'sort' => $input,
                        'limit' => $limit,
                        'skip' => ($currentPage - 1) * $limit,
                    ]);
                    break;
            }
        }else{
            //pagination product
            $totalItems = Products::count();

            // find products for input
            $products = Products::find([
                'sort' => $input,
                'limit' => $limit,
                'skip' => ($currentPage - 1) * $limit,
            ]);
        }

        $pagination = Pagination::add($currentPage, $totalItems, $limit);

        $this->view->setVar('params', $id);
        $this->view->setVar('products', $products);
        $this->view->setVar('pages', $pagination);
        $this->view->setVar('sort_by', $sort_by);
    }

    public function showAction($id = null)
    {
        if ($id) {
            $product = Products::findFirst([
                ['_id' => $id],
            ]);
            // if find success
            if ($product) {
                $this->view->setVar('product', $product);
                if ($this->request->isPost()) {
                    if (isset($_POST['add'])) {
                        // create cart
                        $this->cart = new ShoppingCart();

                        $params = $this->request->getPost();

                        $product_cart = array(
                            'id' => $product->_id,
                            'name' => $product->title,
                            'price' => $product->price['promo_price'],
                            'qty' => $params['quantity'],
                            'color' => $params['color'],
                            'size' => $params['size'],
                            'img' => $product->images[0]['link'],
                        );

                        // add cart
                        if ($this->cart->add($product_cart) != false) {

                            $this->flashSession->success("Thêm sản phẩm vào giỏ hàng thành công!");
                            $this->response->redirect('gio-hang');
                        }
                    }elseif (isset($_POST['buy'])) {
                        $this->response->redirect('gio-hang');
                    }
                }
            }else{
                echo "Không tìm thấy sản phẩm này";
                die();
            }
        }
    }

    public function searchAction($key = null)
    {
        if ($key) {
            $products = Products::find([
                ['title' => ['$regex' => mb_strtoupper(trim($key))]],
            ]);

            if ($products) {
                $this->view->setVar('count', count($products));
                $this->view->setVar('products', $products);
            }
        }
    }
}

