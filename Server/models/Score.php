<?php


class Score
{
    public static function AddScore($data)
    {
        $Error = [];
        global $mysql;

        $temp_name = $mysql->query("SELECT `name`, FROM `score` WHERE `name` = '$data[name]'");
        $temp_email = $mysql->query("SELECT `email` FROM `score` WHERE `email` = '$data[email]'");
        $temp_phone= $mysql->query("SELECT `phone` FROM `score` WHERE `phone` = '$data[phone]'");
        $temp_url = $mysql->query("SELECT `url` FROM `score` WHERE `url` = '$data[url]'");

        if ($temp_name->num_rows){
            $Error[] = 'Գրված անունով գործընկեր արդեն գոյություն ունի․․․';
        }
        if ($temp_email->num_rows) {
            $Error[] = 'Գրված E-mail ով գործընկեր արդեն գոյություն ունի․․․';
        }
        if ($temp_phone->num_rows) {
            $Error[] = 'Գրված Հեռախոսահամաւրով գործընկեր արդեն գոյություն ունի․․․';
        }
        if ($temp_url->num_rows) {
            $Error[] = 'Գրված հղումով գործընկեր արդեն գոյություն ունի․․․';
        }
        if (empty($Error)){
            $res = $mysql->query("INSERT INTO `score` (
                       `user_id`, `name`, `sircle`, `city`, `adress`, `phone`, `email`, `url`,`data`)
                VALUES (
                        '1', '$data[name]', '$data[sircle]', '$data[city]', '$data[adress]', '$data[phone]', '$data[email]', '$data[url]', current_timestamp())");
            echo json_encode([
                'status' => $res,
                'message'=> 'Մեր գործընկերնեի ցանկը ավելացավ ևս մեկով․․․'
            ]);
        }else{
            echo json_encode([
                'status' => false,
                'message'=> $Error
            ]);
        }


    }
}