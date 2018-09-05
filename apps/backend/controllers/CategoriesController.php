<?php

namespace Mysomwhow\Backend\Controllers;

use Models\Categories;

class CategoriesController extends BaseController
{
    public function initialize()
    {
        parent::initialize();
        $categories = Categories::find();
        $this->view->setVar('categories', $categories);
    }

    public function indexAction()
    {
    	
    }

    // Add category
    public function addAction()
    {
        if ($this->request->isPost()) {
        	$category = new Categories;

        	$params  = $this->request->getPost();

            $category->_id = \Helper::getSlug(trim($params['title']));        	
            $category->title = $params['title'];
        	$category->parent_id = $params['parent_id'] != null ? trim($params['parent_id']) : null;

            //file
            if ($this->request->hasFiles()) {
                foreach ($this->request->getUploadedFiles() as $file) {
                    //save file
                    if ($file->getKey() == 'image') {
                        $file->moveTo('img/collection/' . $file->getName());
                        $category->images->image = $file->getName();
                    }elseif ($file->getKey() == 'banner') {
                        $file->moveTo('img/file/' . $file->getName());
                        $category->images->banner = $file->getName();
                    }
                }
            }else{
                die("Khong co file");
            }

        	$category->created_at = time();
        	$category->updated_at = time();

        	$category->save();
            $this->flashSession->success('Thêm mới danh mục thành công');
            $this->response->redirect('backend/categories');
        }
    }

    // update
    public function updateAction($id = null)
    {
        if ($id) {
            // find category $id
            $cat = Categories::findFirst([
                ['_id' => $id]
            ]);
            if ($cat) {
                $this->view->setVar('cat', $cat);
                
                // check submit form
                if ($this->request->isPost()) {
                    $params  = $this->request->getPost();

                    $cat->_id = \Helper::getSlug(trim($params['title']));          
                    $cat->title = $params['title'];
                    $cat->parent_id = $params['parent_id'] != null ? trim($params['parent_id']) : null;
                    
                    // Check file upload
                    if ($this->request->hasFiles()) {
                        foreach ($this->request->getUploadedFiles() as $file) {
                            //save file
                            if ($file->getKey() == 'image') {
                                $file->moveTo('img/collection/' . $file->getName());
                                $cat->images->image = $file->getName();
                            }elseif ($file->getKey() == 'banner') {
                                $file->moveTo('img/file/' . $file->getName());
                                $cat->images->banner = $file->getName();
                            }
                        }
                    }else{
                        die("Khong co file");
                    }

                    $cat->updated_at = time();

                    $cat->save();
                    $this->flashSession->success('Cập nhật danh mục thành công');
                    $this->response->redirect('backend/categories');
                }
            }
        }
    }

    //delete
    public function deleteAction($id = null)
    {
        if ($id) {
            $category = Categories::findFirst([
                ['_id' => $id]
            ]);
            if ($category) {
                $category->delete();
                $this->flashSession->success('Xóa danh mục thành công.');
                $this->response->redirect('backend/categories');
            }else{
                $this->flashSession->warning('Không tìm thấy danh mục này.');
                $this->response->redirect('backend/categories');
            }
        }
    }
}