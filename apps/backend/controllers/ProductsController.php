<?php

namespace Mysomwhow\Backend\Controllers;

use Models\Products;
use Models\Categories;
use Helper\ProductsValidation;
use Helper\Pagination;
use Phalcon\Paginator\Adapter\Model as PaginatorModel; //Paginator

class ProductsController extends BaseController
{
    public function initialize()
    {
        // get info category
        parent::initialize();
        $categories = Categories::find();
        $this->view->setVar('categories', $categories);
    }

    public function indexAction()
    {
        $total = Products::count();

        // Get current page
        if ($this->request->get('page')) {
            $currentPage = $this->request->get('page');
        }else{
            $currentPage = 1;
        }

        $limit = 5;
        $pagination = Pagination::add($currentPage, $total, $limit);

        // The data set to paginate
        $products = Products::find([
            'limit' => $limit,
            'skip'  => ($currentPage - 1) * $limit,
        ]);

        $this->view->setVar('products', $products);
        $this->view->setVar('pages', $pagination);
    }

    public function addAction()
    {
        if ($this->request->isPost()) {
            $validation = new ProductsValidation;

            $messages = $validation->validate($_POST);

            // check validate
            if (count($messages)) {
                foreach ($messages as $message) {
                    $errors[$message->getField()] = $message->getMessage();
                } 
                $this->view->setVar('errors', $errors);
            }else{
                $product = new Products;

                // submit data from form
                $params = $this->request->getPost(); 

                // Check file upload
                if ($this->request->hasFiles()) {
                    // data color
                    $colors = $params['color']; 
                
                    $product->images = array();
                    $file = $this->request->getUploadedFiles();
                    $len = count($file);
                    for ($i=0; $i < $len; $i++) {
                        // luu file
                        $file[$i]->moveTo('img/product/' . $file[$i]->getName());
                        // tao thumbnail
                        \Helper::createThumbs($file[$i]->getName()); 
                        // them vao csdl
                        array_push($product->images, array(
                            'link' => $file[$i]->getName(),
                            'color' => $colors[$i],
                        ));
                    }
                }

                // import data to $product
                $product->_id = \Helper::getSlug(trim($params['title']));
                $product->title = $params['title'];
                $product->category = $params['category'];

                // kiem tra gia khuyen mai am
                if ((int) $params['promo_price'] <= 0) {
                    $params['promo_price'] = $params['sale_price'];
                }

                $product->price = array(
                    'in_price' => (int) $params['in_price'],
                    'sale_price' => (int) $params['sale_price'],
                    'promo_price' => (int) $params['promo_price'],
                );
                $product->total = (int) $params['total'];

                //data size
                $sizes = explode(",", $params['size']);
                foreach ($sizes as $size) {
                    $product->details->size[] = $size;
                }
                $product->details->description = $params['description'];
                $product->created_at = time();
                $product->updated_at = time();

                // kiểm tra còn hàng
                if ($product->total == 0) {
                    $product->status = "Hết hàng";
                }else{
                    $product->status = "Đang bán";
                }

                $product->save();
                $this->flashSession->success('Thêm mới dữ liệu sản phẩm thành công.');
                $this->response->redirect('backend/products');
            }
        }
    }

    public function newAction()
    {
        $total = Products::count();

        // Get current page
        if ($this->request->get('page')) {
            $currentPage = $this->request->get('page');
        }else{
            $currentPage = 1;
        }

        $limit = 5;
        $pagination = Pagination::add($currentPage, $total, $limit);

        // The data set to paginate
        $products = Products::find([
            'sort' => ['created_at' => -1],
            'limit' => $limit,
            'skip'  => ($currentPage - 1) * $limit,
        ]);

        $this->view->setVar('products', $products);
        $this->view->setVar('pages', $pagination);
    }

    public function bestsellersAction()
    {
        $total = Products::count();

        // Get current page
        if ($this->request->get('page')) {
            $currentPage = $this->request->get('page');
        }else{
            $currentPage = 1;
        }

        $limit = 5;
        $pagination = Pagination::add($currentPage, $total, $limit);

        // The data set to paginate
        $products = Products::find([
            'sort' => ['sold' => -1],
            'limit' => $limit,
            'skip'  => ($currentPage - 1) * $limit,
        ]);

        $this->view->setVar('products', $products);
        $this->view->setVar('pages', $pagination);
    }

    public function updateAction($id = null)
    {
    	if ($id) {
            $product = Products::findFirst([
                ['_id' => $id]
            ]);
            if ($product) {
                $this->view->setVar('product', $product);
                // check POST
                if ($this->request->isPost()) {
                    $validation = new ProductsValidation;

                    $messages = $validation->validate($_POST);

                    // check validate
                    if (count($messages)) {
                        foreach ($messages as $message) {
                            $errors[$message->getField()] = $message->getMessage();
                        } 
                        $this->view->setVar('errors', $errors);
                    }else{
                        // submit data from form
                        $params = $this->request->getPost();    
                        
                        // Check file upload
                        if ($this->request->hasFiles()) {
                            // data color
                            $colors = $params['color']; 
                        
                            $file = $this->request->getUploadedFiles();
                            $len = count($file);
                            for ($i=0; $i < $len; $i++) {
                                // luu file
                                $file[$i]->moveTo('img/product/' . $file[$i]->getName());
                                // tao thumbnail
                                \Helper::createThumbs($file[$i]->getName()); 
                                // them vao csdl
                                array_push($product->images, array(
                                    'link' => $file[$i]->getName(),
                                    'color' => $colors[$i],
                                ));
                            }
                        }

                        // import data to $product
                        $product->_id = \Helper::getSlug(trim($params['title']));
                        $product->title = $params['title'];
                        $product->category = $params['category'];

                        // kiem tra gia khuyen mai am
                        if ((int) $params['promo_price'] <= 0) {
                            $params['promo_price'] = $params['sale_price'];
                        }
                
                        $product->price = array(
                            'in_price' => (int) $params['in_price'],
                            'sale_price' => (int) $params['sale_price'],
                            'promo_price' => (int) $params['promo_price'],
                        );
                        $product->total = (int) $params['total'];

                        //data size, unset array size
                        $product->details['size'] = array(); // set size = null
                        $sizes = explode(",", $params['size']);
                        foreach ($sizes as $size) {
                            // kiểm tra size null
                            if (trim($size) == '') {
                                break;
                            }else{
                                // chèn dữ liệu vào cơ sở dữ liệu
                                array_push($product->details['size'], $size);
                            }
                        }
                        $product->details['description'] = $params['description'];
                        $product->updated_at = time();

                        // kiểm tra còn hàng
                        if ($product->total == 0) {
                            $product->status = "Hết hàng";
                        }else{
                            $product->status = "Đang bán";
                        }

                        $product->save();
                        $this->flashSession->success('Cập nhật dữ liệu sản phẩm thành công.');
                        $this->response->redirect('backend/products');
                    }
                }
            }else{
                $this->flashSession->warning('Không tìm thấy sản phẩm này.');
                $this->response->redirect('backend/products');
            }
        }
    }

    public function showAction($id = null)
    {
        if ($id) {
            $product = Products::findFirst([
                ['_id' => $id]
            ]);
            if ($product) {
                $this->view->setVar('product', $product);
            }
        }
    }

    public function deleteAction($id = null)
    {
        if ($id) {
            $product = Products::findFirst([
                ['_id' => $id]
            ]);
            if ($product) {
                // delete images
                $images = $product->images;
                foreach ($images as $image) {
                    foreach ($image as $link) {
                        $image_link = 'img/product/'.$link;
                        $image_link_small = 'img/product/thumbs/'.$link;
                        if (file_exists($image_link)) {
                            unlink($image_link);
                            unlink($image_link_small);
                        }
                    }
                }
                $product->delete();
                $this->flashSession->success('Xóa dữ liệu sản phẩm thành công.');
                $this->response->redirect('backend/products');
            }else{
                $this->flashSession->warning('Không tìm thấy sản phẩm này.');
                $this->response->redirect('backend/products');
            }
        }
    }
}