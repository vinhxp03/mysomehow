<?php

namespace Mysomwhow\Backend\Controllers;

use Models\Slides;

class SlidesController extends BaseController
{
    public function indexAction()
    {
    	$slides = Slides::find();
    	$this->view->setVar('slides', $slides);
    }

    public function addAction()
    {
        if ($this->request->isPost()) {
            $slides = new Slides();

            $params = $this->request->getPost();
            $slides->title = $params['title'];
            $slides->description = $params['description'];
            $slides->links = $params['links'];

            if ($this->request->hasFiles()) {
                foreach ($this->request->getUploadedFiles() as $file) {
                    if (!is_null($file)) {
                        $file->moveTo('img/slides/' . $file->getName());
                        $slides->images = $file->getName();
                    }
                }
            }

            $slides->created_at = time();
            $slides->updated_at = time();

            $slides->save();
            $this->flashSession->success('Thêm mới dữ liệu thành công.');
            $this->response->redirect('backend/slides');
        }
    }

    public function updateAction($id = null)
    {
        if ($id) {
            $slide = Slides::findById($id);
            if ($slide) {
                $this->view->setVar('slide', $slide);

                if ($this->request->isPost()) {

                    $params = $this->request->getPost();
                    $slide->title = $params['title'];
                    $slide->description = $params['description'];
                    $slide->links = $params['links'];

                    if ($this->request->hasFiles()) {
                        foreach ($this->request->getUploadedFiles() as $file) {
                            if ($file->getName() == '') {
                                $slide->images = $slide->images;
                            }else{
                                $file->moveTo('img/slides/' . $file->getName());
                                $slide->images = $file->getName();
                            }
                        }
                    }

                    $slide->updated_at = time();

                    $slide->save();
                    $this->flashSession->success('Cập nhật dữ liệu thành công.');
                    $this->response->redirect('backend/slides');
                }
            }
        }
    }

    public function deleteAction($id = null)
    {
        if ($id) {
            $slide = Slides::findById($id);
            if ($slide) {
                $slide->delete();
                $this->flashSession->success('Xóa dữ liệu thành công.');
                $this->response->redirect('backend/slides');
            }
        }
    }
}