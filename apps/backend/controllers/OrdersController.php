<?php

namespace Mysomwhow\Backend\Controllers;

use Models\Orders;
use Helper\Pagination;
use Models\Products;
use Models\Categories;

class OrdersController extends BaseController
{
    public function indexAction()
    {
        $totalItems = Orders::count();

        // Get current page
        if ($this->request->get('page')) {
            $currentPage = $this->request->get('page');
        }else{
            $currentPage = 1;
        }

        $limit = 5;
        $pagination = Pagination::add($currentPage, $totalItems, $limit);

        $orders = Orders::find([
            'sort' => ['created_at' => -1],
            'limit' => $limit,
            'skip'  => ($currentPage - 1) * $limit,
        ]);
        
        $this->view->setVar('orders', $orders);
        $this->view->setVar('pages', $pagination);
    }

    public function detailsAction($id = null)
    {
    	if ($id) {
    		$orders = Orders::findById($id);
    		if ($orders) {
    			$this->view->setVar('orders', $orders);
                if ($this->request->isPost()) {
                    $progress = $this->request->getPost('progress');
                    switch ($progress) {
                        case 'confirm':
                            $orders->status = 'Đã xác nhận';
                            $orders->save();
                            break;
                        case 'deliver':
                            $orders->status = 'Đang giao';
                            $orders->save();
                            break;
                        case 'completed':
                            $orders->status = 'Hoàn thành';
                            $orders->save();
                            break;
                        default:
                            break;
                    }   
                }
    		}
    	}
    }

    public function destroyAction($id = null)
    {
        if ($id) {
            $orders = Orders::findById($id);
            if ($orders) {
                $orders->status = 'Đã hủy';
                $orders->save();
                $this->response->redirect('backend/orders');
            }
        }
    }

    public function reportsAction()
    {
        if ($this->request->isGet()) {
            $params = $this->request->getQuery();
        }

        //set time
        if (is_null($params['from_month'])) {
            $params = array(
                'key_sort' => 'san-pham',
                'from_month' => 8,
                'from_year' => 2018,
            );
        }
        $lasttime = strtotime('31-'.$params['from_month'].'-'.$params['from_year'].' 23:59:59');
        $firsttime = strtotime('01-'.$params['from_month'].'-'.$params['from_year'].' 00:00:00');

        // get orders
        $orders = Orders::find([
            [
                'status' => 'Hoàn thành',
                'created_at' => ['$lte' => $lasttime, '$gte' => $firsttime],
            ],
            'sort' => ['created_at' => -1],
            'limit' => 6,
        ]);

        $report = array();

        switch ($params['key_sort']) {
            case 'loai-san-pham':
                foreach ($orders as $order) {
                    foreach ($order->product as $product) {
                        // find products 
                        $pro = Products::findFirst([
                            ['_id' => $product['id']],
                        ]);
                        // find category
                        $category = Categories::findFirst([
                            ['_id' => $pro->category],
                        ]);

                        //check id exists in $report
                        if (in_array($category->_id, array_column($report, 'id'))) {

                            // update value $report
                            foreach ($report as $key => $value) {
                                if ($value['id'] == $category->_id) {

                                    $report[$key]['quantity'] += $product['quantity'];
                                    $report[$key]['total_price'] += $product['total_price'];
                                }
                            }
                        }else{
                            // push data to report
                            array_push($report, array(
                                'id'            => $category->_id,
                                'name'          => $category->title,
                                'quantity'      => $product['quantity'],
                                'total_price'   => $product['total_price'],
                            ));
                        }
                    }
                }
                sort($report);
                $this->view->setVar('params', $params);
                $this->view->setVar('report', $report);

                break;
            case 'san-pham':
                foreach ($orders as $order) {
                    foreach ($order->product as $product) {

                        //check id exists in $report
                        if (in_array($product['id'], array_column($report, 'id'))) {

                            // update value $report
                            foreach ($report as $key => $value) {
                                if ($value['id'] == $product['id']) {

                                    $report[$key]['quantity'] += $product['quantity'];
                                    $report[$key]['total_price'] += $product['total_price'];
                                }
                            }
                        }else{
                            // push data to report
                            array_push($report, array(
                                'id'            => $product['id'],
                                'name'          => $product['name'],
                                'quantity'      => $product['quantity'],
                                'total_price'   => $product['total_price'],
                            ));
                        }
                    }
                }
                sort($report);
                $this->view->setVar('params', $params);
                $this->view->setVar('report', $report);
                break;
            default:
                
                break;
        }
    }

    public function testAction()
    {
        $crypt = new \Phalcon\Crypt;
    }
}