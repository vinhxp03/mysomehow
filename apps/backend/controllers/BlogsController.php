<?php

namespace Mysomwhow\Backend\Controllers;

use Models\Size;
use Models\Blogs;

class BlogsController extends BaseController
{
    public function initialize()
    {
        parent::initialize();
        $this->assets->addJs('https://cloud.tinymce.com/stable/tinymce.min.js?apiKey=764iwjtnidikr297cozestajy78urrvoxuhlkhxgt00a8h9d');
        $this->assets->addJs('ad/js/tinymce.js');
    }

    public function indexAction()
    {   
        $blogs = Blogs::find();
        $this->view->setVar('blogs', $blogs);
    }

    public function addBlogsAction()
    {
        if ($this->request->isPost()) {
            $blogs = new Blogs;

            $params  = $this->request->getPost();

            $blogs->_id = \Helper::getSlug(trim($params['title']));    
            $blogs->title = $params['title'];    
            $blogs->content = $params['content']; 

            $blogs->created_at = time();
            $blogs->updated_at = time();

            $blogs->save();
            $this->flashSession->success('Thêm mới bài viết thành công');
            $this->response->redirect('backend/blogs');   
        }
    }

    public function updateBlogsAction($id = null)
    {
        if ($id) {
            $blog = Blogs::findFirst([
                ['_id' => $id],
            ]);

            if ($blog) {
                $this->view->setVar('blog', $blog);
                if ($this->request->isPost()) {

                    $params  = $this->request->getPost();

                    $blog->_id = \Helper::getSlug(trim($params['title']));    
                    $blog->title = $params['title'];    
                    $blog->content = $params['content']; 

                    $blog->updated_at = time();

                    $blog->save();
                    $this->flashSession->success('Cập nhật bài viết thành công');
                    $this->response->redirect('backend/blogs');   
                }
            }
        }
    }

    public function deleteBlogsAction($id = null)
    {
        if ($id) {
            $blog = Blogs::findFirst([
                ['_id' => $id],
            ]);
            if ($blog) {
                $blog->delete();
                $this->flashSession->success('Xóa bài viết thành công.');
                $this->response->redirect('backend/blogs');
            }else{
                $this->flashSession->warning('Không tìm thấy bài viết này.');
                $this->response->redirect('backend/blogs');
            }
        }
    }

    public function sizeAction()
    {
        $sizes = Size::find();
        $this->view->setVar('sizes', $sizes);
    }

    public function addSizeAction()
    {
        if ($this->request->isPost()) {
            $size = new Size();
            $params = $this->request->getPost();

            $size->_id = \Helper::getSlug(trim($params['title']));
            $size->title = $params['title'];
            
            if ($this->request->hasFiles()) {
                foreach ($this->request->getUploadedFiles() as $file) {
                    //save file
                    if ($file->getKey() == 'images') {
                        $file->moveTo('img/article/' . $file->getName());
                        $size->images = $file->getName();
                    }elseif ($file->getKey() == 'images_details') {
                        $file->moveTo('img/article/details/' . $file->getName());
                        $size->images_details = $file->getName();
                    }
                }
            }
            $product->create_at = time();
            $product->updated_at = time();

            $size->save();
            $this->flashSession->success('Thêm mới thành công.');
            $this->response->redirect('backend/blogs/size');
        }
    }
}