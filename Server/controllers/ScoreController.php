<?php


class ScoreController
{

    private $Error = [];
    public function actionAddScoreAccount(){
        global $mysql;
        require ROOT . '/models/Score.php';
        if (!empty($_POST)){
            if (empty($_POST['name'])){
                $this->Error[] = 'Անունը պետք է դատարկ չլինի․․․';
            }
            if (empty($_POST['phone'])){
                $this->Error[] = 'Հեռախոսահամարը պետք է դատարկ չլինի․․․';
            }
            if (empty($_POST['email'])){
                $this->Error[] = 'E-mail-ը պետք է դատարկ չլինի․․․';
            }
            if (empty($this->Error)){
                Score::AddScore($_POST);
            }else{
                echo json_encode([
                    'status' => false,
                    'message' => $this->Error[0]
                ]);
            }
            if (!empty($_FILES['score']['name'])){
                $tmp_img_name = explode('/',$_FILES['score']['type']);
                if (
                    $tmp_img_name[1] == 'jpeg' ||
                    $tmp_img_name[1] == 'jpg' ||
                    $tmp_img_name[1] == 'png' ||
                    $tmp_img_name[1] == 'svg')
                {

                    $img_name  = ROOT . '/img/user/score/'.'-'.time(). '.'.$tmp_img_name[1];
                    $img_name_for_db = 'https://elbakyan.am/Server/img/user/score/'.'-'.time().'.'.$tmp_img_name[1];

                    // create link from delite img in server
                    $tmp_link = $mysql->query("SELECT `img` FROM `user` WHERE `id` = '$_POST[id]'");
                    $array_links = explode('-', $tmp_link->fetch_assoc()['img']);
                    $link_from_delite_img ='-' . $array_links[1];
                    $path = './img/user/dcore/'.$link_from_delite_img ;

                    $mysql->query("UPDATE `user` SET 
                                                `img` = '$img_name_for_db' 
                                                WHERE `user`.`id` = '$_POST[id]'");
                    move_uploaded_file($_FILES['score']['tmp_name'],$img_name);
                    unlink($path);


                }else{
                    $Error[] = 'Ներբեռնել միայն jpeg,jpg,png,svg ֆորմատի լուսանկար';
                }


            }else{
                $mysql->query("UPDATE `user` SET 
                                                `img` = '$_POST[img]' 
                                                WHERE `user`.`id` = '$_POST[id]'");
            }
            if (!empty($Error)){
                echo json_encode([
                    'status' => false,
                    'message' => $Error[0]
                ]);
            }else{
                echo json_encode([
                    'status' => true,
                    'message' => 'Տվյալները փոփոխված են․․․'
                ]);
            }
        }
      return true;
    }
    public function actionGetScoreAccount(){
        global $mysql;
        if (!empty($_POST)){
            $data = $mysql->query("SELECT * FROM `score` WHERE `user_id` = '$_POST[id]'");

           if ($data->num_rows){
               echo json_encode([
                   'status' => true,
                   'data' => $data->fetch_assoc()
               ]);
           }else{
               echo json_encode([
                   'status' => false,

               ]);
           }
        }
        return true;
    }
}