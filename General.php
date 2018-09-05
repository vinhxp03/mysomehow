<?php

/**
 * Created by PhpStorm.
 * User: ChienNguyen
 * Date: 23/03/2016
 * Time: 8:56 SA
 */

namespace My;
use Phalcon\Mvc\Url;

class General {

    const MAIL_TYPE_REGISTER = 1;
    const MAIL_TYPE_FORGOTPASS = 2;
    const MAIL_TYPE_SEND_INFO = 3;
    const MAIL_TYPE_REGISTER_AND_SAVE_POST = 4;

    public static function sendMail($to, $subject, $emailContent, $config) {

        $client = \Aws\Ses\SesClient::factory(
                        array(
                            'key' => $config['access_key'],
                            'secret' => $config['serect_key'],
                            'region' => $config['region'],
                            'version' => $config['version'],
                        )
        );

        $sourceMail = $config['mail_server'];

        $msg = array();
        $msg['Source'] = $sourceMail;
        $msg['Destination']['ToAddresses'][] = $to;
        $msg['Message']['Subject']['Data'] = $subject;
        $msg['Message']['Subject']['Charset'] = "UTF-8";
        $msg['Message']['Body']['Text']['Data'] = "Text data of email";
        $msg['Message']['Body']['Text']['Charset'] = "UTF-8";
        $msg['Message']['Body']['Html']['Data'] = $emailContent;
        $msg['Message']['Body']['Html']['Charset'] = "UTF-8";


        try {
            $result = $client->sendEmail($msg);
            //save the MessageId which can be used to track the request
            $msg_id = $result->get('MessageId');

            if ($msg_id) {

                /* DỰ KIẾN CHÈN LOG EMAIL */

                return true;
            } else {
                return false;
            }
        } catch (\Exception $exp) {
            //An error happened and the email did not get sent
            echo($exp->getMessage());
            die();
        }
    }

    /* Validate Image NewPost */

    public static function checkImageNewPost($inputFile) {
        $result = false;

        if (empty($inputFile) || empty($inputFile['multiple']) || empty($inputFile['multiple']['name'])) {
            return false;
        }
    }

    public function setcookie($name,$value,$time=null){
        if(empty($time)) $time = time() + 15 * 86400;
        $this->cookies->set($name);
        $cookies =  $this->cookies->get($name);
        $cookies->setValue($value);
        $cookies->setExpiration($time);
        return true;
    }

    public static function checkImage($inputFile) {
        $validation = new \Phalcon\Validation();
        $file = new \Phalcon\Validation\Validator\File(array(
            'maxSize' => '3MB',
            'messageSize' => 'Hình ảnh upload không được vượt quá 3MB !',
            'allowedTypes' => array('image/jpeg', 'image/png'),
            'messageType' => 'Chỉ được úp file có định dạng: jpeg/png',
            'messageEmpty' => 'No image uploaded'
        ));
        $validation->add('logo', $file);
        return $validation->validate($inputFile);
    }

    /**
     * Upload images
     *
     * @param array $arrFile array images to upload
     * @return array
     */
    public static function ImageUpload($arrFile = array(), $userId) {
        $arrResult = array();

        if (empty($arrFile)) {
            return $arrResult;
        }

        /*
         * Thư mục chứa file upload
         */
        $strFolderType = APP_PATH . '/public/files';
        /* Kiểm tra đã có thư mục đó chưa, chưa có thì tạo thư mục và set quyền ghi */
        if (!is_dir($strFolderType)) {
            mkdir($strFolderType, 0777, true);
        }

        /* Kiểm tra thư mục đó set quyền ghi va đọc chưa? chưa thì set lại */
        if (!is_writable($strFolderType) || !is_readable($strFolderType)) {
            chmod($strFolderType, 0777);
        }

        /*
         * Folder sẽ chứa file upload $strTime . uid
         */
        $strTime = date('Y') . '/' . date('m') . '/' . date('d') . '/';
        $strFolderByDate = $strFolderType . '/' . $strTime . $userId . '/';
        $strFolderThumb = $strFolderByDate . 'thumbs/';
        if (!is_dir($strFolderByDate)) {
            mkdir($strFolderByDate, 0777, true);
            chmod($strFolderByDate, 0777);
            mkdir($strFolderThumb, 0777, true);
            chmod($strFolderThumb, 0777);
        }

        $strExtension = pathinfo($strFolderByDate . $arrFile->getName(), PATHINFO_EXTENSION);
        $newFileName = microtime(true) . '.' . $strExtension;

        /*
         * write file to folder
         */
        $isWrite = $arrFile->moveTo($strFolderByDate . $newFileName);
        if (!$isWrite) {
            return $arrResult;
        }
        $sourceImage = 'public/files/' . $strTime . $userId . '/' . $newFileName;

        $arrResult['source'] = $sourceImage;

        /*
         * Write thumbs to folder thumb
         */
        $arrThumb = self::getThumbSize();
        $serviceImage = new \Intervention\Image\ImageManager();

        /* resize lại hình */

        foreach ($arrThumb as $thumbSize) {
            list($width, $height) = explode('x', $thumbSize);
            $thumbFileDir = $strFolderThumb . $thumbSize . '/';
            if (!is_dir($thumbFileDir)) {
                mkdir($thumbFileDir, 0777, true);
                chmod($thumbFileDir, 0777);
            }
            $image = $serviceImage->make($strFolderByDate . $newFileName)->fit($width);
            $resultThumb = $image->save($thumbFileDir . $newFileName);

            if ($resultThumb) {
                $arrThumbImage[$thumbSize] = 'public/files/' . $strTime . $userId . '/thumbs/' . $thumbSize . '/' . $newFileName;
            }
        }

        if (!empty($arrThumbImage)) {
            $arrResult['thumbs'] = $arrThumbImage;
        }
        return $arrResult;
    }

    public static function uploadImageNewPost($arrFile = array(), $userId) {
        $arrResult = array();

        if (empty($arrFile)) {
            return $arrResult;
        }

        /*
         * Thư mục chứa file upload
         */
        $strFolderType = APP_PATH . '/public/files/newpost';
        /* Kiểm tra đã có thư mục đó chưa, chưa có thì tạo thư mục và set quyền ghi */
        if (!is_dir($strFolderType)) {
            mkdir($strFolderType, 0777, true);
        }

        /* Kiểm tra thư mục đó set quyền ghi va đọc chưa? chưa thì set lại */
        if (!is_writable($strFolderType) || !is_readable($strFolderType)) {
            chmod($strFolderType, 0777);
        }

        /*
         * Folder sẽ chứa file upload $strTime . uid
         */
        $strTime = date('Y') . '/' . date('m') . '/' . date('d') . '/';

        $strFolderByDate = $strFolderType . '/' . $strTime;
        if (!empty($userId)) {
            $strFolderByDate = $strFolderType . '/' . $strTime . $userId . '/';
        }

        $strFolderThumb = $strFolderByDate . 'thumbs/';
        if (!is_dir($strFolderByDate)) {
            mkdir($strFolderByDate, 0777, true);
            chmod($strFolderByDate, 0777);
            mkdir($strFolderThumb, 0777, true);
            chmod($strFolderThumb, 0777);
        }
        $strExtension = pathinfo($strFolderByDate . $arrFile->getName(), PATHINFO_EXTENSION);
        $newFileName = microtime(true) . '.' . $strExtension;

        /*
         * write file to folder
         */
        $isWrite = $arrFile->moveTo($strFolderByDate . $newFileName);
        if (!$isWrite) {
            return $arrResult;
        }
        if (empty($userId)) {
            $sourceImage = 'public/files/newpost/' . $strTime . $newFileName;
        } else {
            $sourceImage = 'public/files/newpost/' . $strTime . $userId . '/' . $newFileName;
        }

        $arrResult['source'] = $sourceImage;

        /*
         * Write thumbs to folder thumb
         */
        $arrThumb = self::getThumbSize();
        $serviceImage = new \Intervention\Image\ImageManager();

        /* resize lại hình */

        foreach ($arrThumb as $thumbSize) {
            list($width, $height) = explode('x', $thumbSize);
            $thumbFileDir = $strFolderThumb . $thumbSize . '/';
            if (!is_dir($thumbFileDir)) {
                mkdir($thumbFileDir, 0777, true);
                chmod($thumbFileDir, 0777);
            }
            $image = $serviceImage->make($strFolderByDate . $newFileName)->resize($width, $height);
            $resultThumb = $image->save($thumbFileDir . $newFileName);

            if ($resultThumb) {
                if (empty($userId)) {
                    $arrThumbImage[$thumbSize] = 'public/files/newpost/' . $strTime . 'thumbs/' . $thumbSize . '/' . $newFileName;
                } else {
                    $arrThumbImage[$thumbSize] = 'public/files/newpost/' . $strTime . $userId . '/thumbs/' . $thumbSize . '/' . $newFileName;
                }
            }
        }

        if (!empty($arrThumbImage)) {
            $arrResult['thumbs'] = $arrThumbImage;
        }
        return $arrResult;
    }

    /**
     * @return Array
     * @throws \Exception
     */
    public static function getThumbSize() {
        return array(
            '120x120',
            '104x78'
        );
    }

    public static function getSlug($string, $maxLength = 255, $separator = '-') {
        $arrCharFrom = array("ạ", "á", "à", "ả", "ã", "Ạ", "Á", "À", "Ả", "Ã", "â", "ậ", "ấ", "ầ", "ẩ", "ẫ", "Â", "Ậ", "Ấ", "Ầ", "Ẩ", "Ẫ", "ă", "ặ", "ắ", "ằ", "ẳ", "ẵ", "ẫ", "Ă", "Ắ", "Ằ", "Ẳ", "Ẵ", "Ặ", "Ẵ", "ê", "ẹ", "é", "è", "ẻ", "ẽ", "Ê", "Ẹ", "É", "È", "Ẻ", "Ẽ", "ế", "ề", "ể", "ễ", "ệ", "Ế", "Ề", "Ể", "Ễ", "Ệ", "ọ", "ộ", "ổ", "ỗ", "ố", "ồ", "Ọ", "Ộ", "Ổ", "Ỗ", "Ố", "Ồ", "Ô", "ô", "ó", "ò", "ỏ", "õ", "Ó", "Ò", "Ỏ", "Õ", "ơ", "ợ", "ớ", "ờ", "ở", "ỡ", "Ơ", "Ợ", "Ớ", "Ờ", "Ở", "Ỡ", "ụ", "ư", "ứ", "ừ", "ử", "ữ", "ự", "Ụ", "Ư", "Ứ", "Ừ", "Ử", "Ữ", "Ự", "ú", "ù", "ủ", "ũ", "Ú", "Ù", "Ủ", "Ũ", "ị", "í", "ì", "ỉ", "ĩ", "Ị", "Í", "Ì", "Ỉ", "Ĩ", "ỵ", "ý", "ỳ", "ỷ", "ỹ", "Ỵ", "Ý", "Ỳ", "Ỷ", "Ỹ", "đ", "Đ");
        $arrCharEnd = array("a", "a", "a", "a", "a", "A", "A", "A", "A", "A", "a", "a", "a", "a", "a", "a", "A", "A", "A", "A", "A", "A", "a", "a", "a", "a", "a", "a", "a", "A", "A", "A", "A", "A", "A", "A", "e", "e", "e", "e", "e", "e", "E", "E", "E", "E", "E", "E", "e", "e", "e", "e", "e", "E", "E", "E", "E", "E", "o", "o", "o", "o", "o", "o", "O", "O", "O", "O", "O", "O", "O", "o", "o", "o", "o", "o", "O", "O", "O", "O", "o", "o", "o", "o", "o", "o", "O", "O", "O'", "O", "O", "O", "u", "u", "u", "u", "u", "u", "u", "U", "U", "U", "U", "U", "U", "U", "u", "u", "u", "u", "U", "U", "U", "U", "i", "i", "i", "i", "i", "I", "I", "I", "I", "I", "y", "y", "y", "y", "y", "Y", "Y", "Y", "Y", "Y", "d", "D");
        $arrCharnonAllowed = array("©", "®", "Æ", "Ç", "Å", "Ç", "๏", "๏̯͡๏", "Î", "Ø", "Û", "Þ", "ß", "å", "", "¼", "æ", "ð", "ñ", "ø", "û", "!", "ñ", "[", "\"", "$", "%", "'", "(", ")", "♥", "(", "+", "*", "/", "\\", ",", ":", "¯", "", "+", ";", "<", ">", "=", "?", "@", "`", "¶", "[", "]", "^", "~", "`", "|", "", "_", "?", "*", "{", "}", "€", "�", "ƒ", "„", "", "…", "‚", "†", "‡", "ˆ", "‰", "ø", "´", "Š", "‹", "Œ", "�", "Ž", "�", "ॐ", "۩", "�", "‘", "’", "“", "”", "•", "۞", "๏", "—", "˜", "™", "š", "›", "œ", "�", "ž", "Ÿ", "¡", "¢", "£", "¤", "¥", "¦", "§", "¨", "«", "¬", "¯", "°", "±", "²", "³", "´", "µ", "¶", "¸", "¹", "º", "»", "¼", "¾", "¿", "Å", "Æ", "Ç", "?", "×", "Ø", "Û", "Þ", "ß", "å", "æ", "ç", "ï", "ð", "ñ", "÷", "ø", "ÿ", "þ", "û", "½", "☺", "☻", "♥", "♦", "♣", "♠", "•", "░", "◘", "○", "◙", "♂", "♀", "♪", "♫", "☼", "►", "◄", "↕", "‼", "¶", "§", "▬", "↨", "↑", "↓", "←", "←", "↔", "▲", "▼", "⌂", "¢", "→", "¥", "ƒ", "ª", "º", "▒", "▓", "│", "┤", "╡", "╢", "╖", "╕", "╣", "║", "╗", "╝", "╜", "╛", "┐", "└", "┴", "┬", "├", "─", "┼", "╞", "╟", "╚", "╔", "╩", "╦", "╠", "═", "╬", "╧", "╨", "╤", "╥", "╙", "╘", "╒", "╓", "╫", "╪", "┘", "┌", "█", "▄", "▌", "▐", "▀", "α", "Γ", "π", "Σ", "σ", "µ", "τ", "Φ", "Θ", "Ω", "δ", "∞", "φ", "ε", "∩", "≡", "±", "≥", "≤", "⌠", "⌡", "≈", "°", "∙", "·", "√", "ⁿ", "²", "■", "¾", "×", "Ø", "Þ", "ð", "ღ", "ஐ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "•", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "•", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Ƹ", 'Ӝ', 'Ʒ', "★", "●", "♡", "ஜ", "ܨ");
        $string = str_replace($arrCharFrom, $arrCharEnd, $string);
        $finalString = str_replace($arrCharnonAllowed, '', $string);
        $url = iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $finalString);
        $url = preg_replace("/[^a-zA-Z0-9\/_|+ -]/", '', $url);
        $url = trim(substr(strtolower($url), 0, $maxLength));
        $url = preg_replace("/[\/_|+ -]+/", $separator, $url);
        return $url;
    }

    public static function genRandomDigits($length = 9,$post = null) {
        $characters = '0123456789';

        if($post){
            do {
                $code = rand(100000000,999999999);
            } while (self::existCode($code));
        }else{
            $code = rand(100000000,999999999);
        }
            
        return (string)$code;
    }

    public static function existCode($code) {
        $exist = \Nhadat\Models\Post::findFirst(array(array("code" => $code)));
        if ($exist) return true; else return false;
    }


    public static function nonChar($string, $maxLength = 255) {
        $arrCharFrom = array("ạ", "á", "à", "ả", "ã", "Ạ", "Á", "À", "Ả", "Ã", "â", "ậ", "ấ", "ầ", "ẩ", "ẫ", "Â", "Ậ", "Ấ", "Ầ", "Ẩ", "Ẫ", "ă", "ặ", "ắ", "ằ", "ẳ", "ẵ", "ẫ", "Ă", "Ắ", "Ằ", "Ẳ", "Ẵ", "Ặ", "Ẵ", "ê", "ẹ", "é", "è", "ẻ", "ẽ", "Ê", "Ẹ", "É", "È", "Ẻ", "Ẽ", "ế", "ề", "ể", "ễ", "ệ", "Ế", "Ề", "Ể", "Ễ", "Ệ", "ọ", "ộ", "ổ", "ỗ", "ố", "ồ", "Ọ", "Ộ", "Ổ", "Ỗ", "Ố", "Ồ", "Ô", "ô", "ó", "ò", "ỏ", "õ", "Ó", "Ò", "Ỏ", "Õ", "ơ", "ợ", "ớ", "ờ", "ở", "ỡ", "Ơ", "Ợ", "Ớ", "Ờ", "Ở", "Ỡ", "ụ", "ư", "ứ", "ừ", "ử", "ữ", "ự", "Ụ", "Ư", "Ứ", "Ừ", "Ử", "Ữ", "Ự", "ú", "ù", "ủ", "ũ", "Ú", "Ù", "Ủ", "Ũ", "ị", "í", "ì", "ỉ", "ĩ", "Ị", "Í", "Ì", "Ỉ", "Ĩ", "ỵ", "ý", "ỳ", "ỷ", "ỹ", "Ỵ", "Ý", "Ỳ", "Ỷ", "Ỹ", "đ", "Đ");
        $arrCharEnd = array("a", "a", "a", "a", "a", "A", "A", "A", "A", "A", "a", "a", "a", "a", "a", "a", "A", "A", "A", "A", "A", "A", "a", "a", "a", "a", "a", "a", "a", "A", "A", "A", "A", "A", "A", "A", "e", "e", "e", "e", "e", "e", "E", "E", "E", "E", "E", "E", "e", "e", "e", "e", "e", "E", "E", "E", "E", "E", "o", "o", "o", "o", "o", "o", "O", "O", "O", "O", "O", "O", "O", "o", "o", "o", "o", "o", "O", "O", "O", "O", "o", "o", "o", "o", "o", "o", "O", "O", "O'", "O", "O", "O", "u", "u", "u", "u", "u", "u", "u", "U", "U", "U", "U", "U", "U", "U", "u", "u", "u", "u", "U", "U", "U", "U", "i", "i", "i", "i", "i", "I", "I", "I", "I", "I", "y", "y", "y", "y", "y", "Y", "Y", "Y", "Y", "Y", "d", "D");
        $arrCharnonAllowed = array("©", "®", "Æ", "Ç", "Å", "Ç", "๏", "๏̯͡๏", "Î", "Ø", "Û", "Þ", "ß", "å", "", "¼", "æ", "ð", "ñ", "ø", "û", "!", "ñ", "[", "\"", "$", "%", "'", "(", ")", "♥", "(", "+", "*", "/", "\\", ",", ":", "¯", "", "+", ";", "<", ">", "=", "?", "@", "`", "¶", "[", "]", "^", "~", "`", "|", "", "_", "?", "*", "{", "}", "€", "�", "ƒ", "„", "", "…", "‚", "†", "‡", "ˆ", "‰", "ø", "´", "Š", "‹", "Œ", "�", "Ž", "�", "ॐ", "۩", "�", "‘", "’", "“", "”", "•", "۞", "๏", "—", "˜", "™", "š", "›", "œ", "�", "ž", "Ÿ", "¡", "¢", "£", "¤", "¥", "¦", "§", "¨", "«", "¬", "¯", "°", "±", "²", "³", "´", "µ", "¶", "¸", "¹", "º", "»", "¼", "¾", "¿", "Å", "Æ", "Ç", "?", "×", "Ø", "Û", "Þ", "ß", "å", "æ", "ç", "ï", "ð", "ñ", "÷", "ø", "ÿ", "þ", "û", "½", "☺", "☻", "♥", "♦", "♣", "♠", "•", "░", "◘", "○", "◙", "♂", "♀", "♪", "♫", "☼", "►", "◄", "↕", "‼", "¶", "§", "▬", "↨", "↑", "↓", "←", "←", "↔", "▲", "▼", "⌂", "¢", "→", "¥", "ƒ", "ª", "º", "▒", "▓", "│", "┤", "╡", "╢", "╖", "╕", "╣", "║", "╗", "╝", "╜", "╛", "┐", "└", "┴", "┬", "├", "─", "┼", "╞", "╟", "╚", "╔", "╩", "╦", "╠", "═", "╬", "╧", "╨", "╤", "╥", "╙", "╘", "╒", "╓", "╫", "╪", "┘", "┌", "█", "▄", "▌", "▐", "▀", "α", "Γ", "π", "Σ", "σ", "µ", "τ", "Φ", "Θ", "Ω", "δ", "∞", "φ", "ε", "∩", "≡", "±", "≥", "≤", "⌠", "⌡", "≈", "°", "∙", "·", "√", "ⁿ", "²", "■", "¾", "×", "Ø", "Þ", "ð", "ღ", "ஐ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "•", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "•", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Ƹ", 'Ӝ', 'Ʒ', "★", "●", "♡", "ஜ", "ܨ");
        $string = str_replace($arrCharFrom, $arrCharEnd, $string);
        $finalString = str_replace($arrCharnonAllowed, '', $string);
        $export = iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $finalString);
        return $export;
    }

    public static function getPrefix($str) {
        $prefix = '';
        if (preg_match("/^Phường /i", $str, $matches)) {
            $prefix = 'phuong';
        }

        if (preg_match("/^Xã /i", $str, $matches)) {
            $prefix = 'xa';
        }

        if (preg_match("/^Thị Trấn /i", $str, $matches)) {
            $prefix = 'thi-tran';
        }

        if (preg_match("/^Đường /i", $str, $matches)) {
            $prefix = 'duong';
        }

        if (preg_match("/^Phố /i", $str, $matches)) {
            $prefix = 'pho';
        }

        if (preg_match("/^Lộ /i", $str, $matches)) {
            $prefix = 'lo';
        }
        return $prefix;
    }

    public static function exAddress($address) {
        $object = new \stdClass();
        $object->address = $address;
        $object->number = null;
        $object->street = null;

        $format = "/(^Số ([0-9a-zA-Z-\/]*) (.*)|^Ngõ ([0-9a-zA-Z-\/]*) (.*))/i";

        if (preg_match($format, $address, $match)) {
            if (count($match) == 3) {
                $object->address = $match[0];
                $object->number = $match[1];
                $object->street = $match[2];
            } else if (count($match) == 6) {
                $object->address = $match[0];
                $object->number = $match[4];
                $object->street = $match[5];
            }
        } else {
            $format = "/^([0-9a-zA-Z-\/]*) (.*)/i";
            if (preg_match($format, $address, $match)) {
                $object->address = $match[0];
                $object->number = $match[1];
                $object->street = $match[2];
            } else {
                $object->street = $address;
            }
        }

        return $object;
    }
	
	public static function get_prov_api ($lat, $long) {
		
		$result = array();
		
		$get_API = "http://maps.googleapis.com/maps/api/geocode/json?latlng=";
		$get_API .= round($lat,2).",";
		$get_API .= round($long,2);         

		$jsonfile = file_get_contents($get_API.'&sensor=false');
		$jsonarray = json_decode($jsonfile); 

		$result['address'] = $jsonarray->results[0]->formatted_address;
		$result['obj'] = $jsonarray->results[0];
		return $result;
	}

    public static function get_avatar($object){
        $url = new Url;

        $images = $url->get('frontend/images/Moigioi.png');
        if( is_array($object) ){
            $images = $url->get($object['thumbs']['120x120']);
        }else if($object){
           if( @is_array(getimagesize($object)) ){
                $images = $object;
            }else{
                if( @is_array(getimagesize($url->get($object))) ){
                    $images = $url->get($object);
                }
            } 
        }
        return $images;
    }

}
