<?php
namespace Mysomwhow\Frontend\Controllers;

use Models\Size;
use Models\Blogs;

class IntroduceController extends BaseController
{

    public function indexAction($id = null)
    {
        if ($id) {
            $blogs = Blogs::findFirst([
                ['_id' => $id]
            ]);
            if ($blogs) {
                $this->view->setVar('blogs', $blogs);
            }
        }
    }

    public function sizeAction($id = null)
    {
        if ($id) {
            $size = Size::findFirst([
                ['_id' => $id], 
            ]);
            if ($size) {
                $this->view->setVar('size', $size);
            }
        }else{
            $sizes = Size::find();
            $this->view->setVar('sizes', $sizes);
        }
    }

}

