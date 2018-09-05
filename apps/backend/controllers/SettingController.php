<?php

namespace Mysomwhow\Backend\Controllers;

use Models\Setting;

class SettingController extends BaseController
{
    public function indexAction()
    {
        $setting = Setting::findFirst();
        $this->view->setVar('setting', $setting);

        if ($this->request->isPost()) {
            $params = $this->request->getPost();

            $setting->title = $params['title'];
            $setting->description = $params['description'];
            $setting->keywords = $params['keywords'];

            //images
            $i = 0;
            $images = array();
            if ($this->request->hasFiles()) {
                foreach ($this->request->getUploadedFiles() as $file) {
                    switch ($file->getKey()) {
                        case 'web_thumbnail':
                            if ($file->getName() == '') {
                                $setting->web_thumbnail = $setting->web_thumbnail;
                            }else{
                                $file->moveTo('img/14/' . $file->getName());
                                $setting->web_thumbnail = $file->getName();
                            }
                            break;
                        case 'web_logo':
                            if ($file->getName() == '') {
                                $setting->web_logo = $setting->web_logo;
                            }else{
                                $file->moveTo('img/14/' . $file->getName());
                                $setting->web_logo = $file->getName();
                            }
                            break;
                        case 'images'.$i.'':
                            // if filename = null
                            if ($file->getName() == '') {
                                $images[] = $setting->info[$i]['images'];
                            }else{
                                // has file >> save file
                                $file->moveTo('img/14/' . $file->getName());
                                $images[] = $file->getName();
                            }
                            $i += 1;
                            break;
                        default:
                            # code...
                            break;
                    }
                }
            }

            // fb and instagram
            $setting->social = array(
                'facebook' => $params['facebook'],
                'instagram' => $params['instagram'],
            );

            $setting->phone_support = $params['phone_support'];

            // address and phone
            $setting->info = array();
            $len = count($params['address']);
            for ($i=0; $i < $len; $i++) { 
                array_push($setting->info, array(
                    'id' => \Helper::getSlug(trim($params['address'][$i])),
                    'address' => $params['address'][$i],
                    'phone' => $params['phone'][$i],
                    'images' => $images[$i],
                    'maps' => $params['maps'][$i],
                ));
            }

            $setting->updated_at = time();

            $setting->save();
            $this->flashSession->success('Cập nhật thành công.');
            $this->response->redirect('backend/setting');
        }
    }

}